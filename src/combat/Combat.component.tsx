import React, { useEffect, useRef } from "react";
import useCharacterGold from "../store/hooks/character/use-character-gold.hook";
import useDungeon from "../store/hooks/dungeon/use-dungeon.store";
import useDungeonLog from "../store/hooks/dungeon/use-dungeon-log.hook";
import { useTranslation } from "react-i18next";
import Helpers from "../helpers/index.helpers";
import Dungeon from "../locations/models/dungeon.type";
import img from "../assets/images/monsters/voiletCrystalFungus.jpeg";

const Combat = ({ dungeon }: { dungeon: Dungeon }) => {
  const { increaseGold } = useCharacterGold();
  const { decreaseMonsterAmount } = useDungeon();
  const { addDungeonLog } = useDungeonLog();
  const { t } = useTranslation();
  const monster = useRef(Helpers.getRandomElementFromArray(dungeon.monsters.list));
  const commonRewards = useRef(dungeon.rewards.common);

  useEffect(() => {
    decreaseMonsterAmount();
    addDungeonLog(`${t("Monster")}: ${monster.current.name}`);
    const reward = commonRewards.current["gold"] as number;
    const gold = Helpers.getRandomNumber(0, reward);
    if (gold > 0) {
      addDungeonLog(`${t("You found")}: ${gold}${t("Gold")}`);
      increaseGold(gold);
    }
    // eslint-disable-next-line
  }, []);
  return <>{monster && <img src={require(`../assets/images/monsters/${monster.current.id}.jpeg`)} alt="" />}</>;
};

export default React.memo(Combat);
