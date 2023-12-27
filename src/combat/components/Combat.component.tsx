import React, { useCallback, useEffect, useRef, useState } from "react";
import useCharacterGold from "../../store/hooks/character/use-character-gold.hook";
import useDungeon from "../../store/hooks/dungeon/use-dungeon.store";
import useDungeonLog from "../../store/hooks/dungeon/use-dungeon-log.hook";
import { useTranslation } from "react-i18next";
import Helpers from "../../helpers/index.helpers";
import Dungeon from "../../locations/models/dungeon.type";
import ButtonComponent from "../../shared-components/Button.component";
import Monster from "../../monsters/models/monster.type";
import useCharacterHealth from "../../store/hooks/character/use-character-health.hook";
import useCharacterDamage from "../../store/hooks/character/use-character-damage.hook";
import useCharacterAttack from "../../store/hooks/character/use-character-attack.hook";
import useCharacterDefense from "../../store/hooks/character/use-character-defense.hook";
import useCharacterExperience from "../../store/hooks/character/use-character-experience.hook";
import CharacterHealthComponent from "../../character/components/CharacterHealth.component";
import CombatLogComponent from "./CombatLog.component";
import useCombatLog from "../../store/hooks/combat/use-combat-log.hook";
import CombatPotionBarComponent from "./CombatPotionBar.component";
import useInventory from "../../store/hooks/inventory/use-inventory.hook";
import useCurrentScreen from "../../store/hooks/global/use-current-screen.hook";
import useMessagesStore from "../../store/hooks/message/use-message-store";
import useCharacterIsInDungeon from "../../store/hooks/character/use-character-is-in-dungeon.hook";

const Combat = ({ dungeon, onClose, isBoss }: { dungeon: Dungeon; onClose: () => void; isBoss?: boolean }) => {
  const { setCurrentScreen } = useCurrentScreen();
  const { setCharacterIsInDungeon } = useCharacterIsInDungeon();
  const { addMessage } = useMessagesStore();
  const { addItemToInventory } = useInventory();
  const { addCombatLog, resetCombatLog } = useCombatLog();
  const { increaseExperience } = useCharacterExperience();
  const { characterCurrentHealth, decreaseCharacterHealth } = useCharacterHealth();
  const { characterAttack } = useCharacterAttack();
  const { characterDefense } = useCharacterDefense();
  const { characterDamage } = useCharacterDamage();
  const [monster, setMonster] = useState<Monster>();
  const { increaseGold } = useCharacterGold();
  const { decreaseMonsterAmount, decreaseBossAmount } = useDungeon();
  const { addDungeonLog } = useDungeonLog();
  const { t } = useTranslation();
  const currentMonster = useRef(
    Helpers.getRandomElementFromArray(isBoss ? dungeon.monsters.boss : dungeon.monsters.list)
  );
  const commonRewards = useRef(dungeon.rewards.common);

  const onAttackToCharacter = useCallback(() => {
    const { isCritical, monsterDamageDice, monsterTotalAttack } = Helpers.combatHelpers.attackToCharacter(monster);

    if (isCritical || monsterTotalAttack >= characterDefense) {
      if (isCritical) {
        addCombatLog(`${t("Critical")}: ${monster.name} ${monsterDamageDice * 2}`, "error");
        decreaseCharacterHealth(monsterDamageDice * 2);
      } else {
        addCombatLog(`${t("You took damage")}: ${monster.name} ${monsterDamageDice}`, "error");
        decreaseCharacterHealth(monsterDamageDice);
      }
    } else {
      addCombatLog(`${t("Monster couldn't hit")}`);
    }
  }, [monster, decreaseCharacterHealth, characterDefense, addCombatLog, t]);

  const onAttackToMonster = useCallback(() => {
    const { characterDamageDice, characterTotalAttack, isCritical } = Helpers.combatHelpers.attackToMonster(
      characterAttack,
      characterDamage
    );

    if (isCritical || characterTotalAttack >= monster.defense) {
      if (isCritical) {
        addCombatLog(`${t("Critical")}: ${characterDamageDice * 2}`, "success");
        setMonster({ ...monster, hp: monster.hp - characterDamageDice * 2 });
      } else {
        addCombatLog(`${t("Monster took damage")}: ${characterDamageDice}`, "success");
        setMonster({ ...monster, hp: monster.hp - characterDamageDice });
      }
    } else {
      addCombatLog(`${t("You couldn't hit")}`);
    }
    onAttackToCharacter();
  }, [characterDamage, characterAttack, monster, onAttackToCharacter, addCombatLog, t]);

  useEffect(() => {
    setMonster(Helpers.createMonster(currentMonster.current, isBoss));
  }, [setMonster, currentMonster, isBoss]);

  useEffect(() => {
    if (monster?.hp < 1 || characterCurrentHealth < 1) {
      if (monster.hp < 1) {
        if (isBoss) {
          decreaseBossAmount();
          addDungeonLog(`${t("You killed")}: ${monster.name}`, "warning");
        } else {
          decreaseMonsterAmount();
          addDungeonLog(`${t("You killed")}: ${monster.name}`, "success");
        }

        const experience = Helpers.getRandomNumber(1, monster.experience);
        increaseExperience(experience);
        addDungeonLog(`${t("Experience")}: ${experience}`, "success");
        const reward = Helpers.combatHelpers.getCombatReward(dungeon.rewards, isBoss);
        if (reward) {
          if (typeof reward === "number") {
            const gold = Helpers.getRandomNumber(0, reward);
            if (gold > 0) {
              addDungeonLog(`${t("You found")}: ${gold}${t("Gold")}`, "success");
              increaseGold(gold);
            }
          } else {
            const rewardGainLuck = Helpers.getRandomNumber();
            if (isBoss) {
              setCurrentScreen("message");
              setCharacterIsInDungeon(false);
              addItemToInventory(reward);
              addMessage(`${t("You found")}: ${reward.name}`, "success");
              onClose();
            } else if (rewardGainLuck < 40) {
              addItemToInventory(reward);
              addDungeonLog(`${t("You found")}: ${reward.name}`, "success");
            }
          }
        }
      }
      onClose();
    }
    // eslint-disable-next-line
  }, [monster, characterCurrentHealth, commonRewards]);

  useEffect(() => {
    resetCombatLog();
    // eslint-disable-next-line
  }, []);
  return (
    <>
      {monster && (
        <figure>
          <div className="flex gap-2 items-center">
            <img className="max-w-[96px]" src={require(`../../assets/images/monsters/${monster.id}.jpeg`)} alt="" />
            <figcaption className="text-center py-2">
              <div className="flex gap-2 flex-col">
                <small>{monster.name}</small>
                <span>
                  {t("Health")}: {monster.hp}
                </span>
              </div>
            </figcaption>
          </div>
          <CombatPotionBarComponent></CombatPotionBarComponent>
          <div className="flex gap-2 mt-2">
            <CharacterHealthComponent></CharacterHealthComponent>
            <div className="ml-auto">
              <ButtonComponent onClick={onAttackToMonster}>
                <>{t("Attack")}</>
              </ButtonComponent>
            </div>
          </div>
          <CombatLogComponent></CombatLogComponent>
        </figure>
      )}
    </>
  );
};

export default React.memo(Combat);
