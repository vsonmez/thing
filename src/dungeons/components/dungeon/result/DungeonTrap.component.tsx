import React, { useEffect, useRef } from "react";
import Helpers from "../../../../helpers/index.helpers";
import Dungeon from "../../../../locations/models/dungeon.type";
import useDungeon from "../../../../store/hooks/dungeon/use-dungeon.store";
import { useTranslation } from "react-i18next";
import useDungeonLog from "../../../../store/hooks/dungeon/use-dungeon-log.hook";
import useCharacterExperience from "../../../../store/hooks/character/use-character-experience.hook";
import useCharacterHealth from "../../../../store/hooks/character/use-character-health.hook";
import useCharacterSkills from "../../../../store/hooks/character/use-character-skills.hook";

const DungeonTrap = ({ dungeon }: { dungeon: Dungeon }) => {
  const { characterSkillList } = useCharacterSkills();
  const { decreaseTrapAmount } = useDungeon();
  const { addDungeonLog } = useDungeonLog();
  const { t } = useTranslation();
  const { increaseExperience } = useCharacterExperience();
  const { decreaseCharacterHealth } = useCharacterHealth();
  const trap = useRef(Helpers.getRandomElementFromArray(dungeon.traps.list));
  useEffect(() => {
    decreaseTrapAmount();

    const isFoundTrap = Helpers.difficultyCheck(trap.current, characterSkillList.spot);

    if (isFoundTrap) {
      addDungeonLog(`${t("You spot")}: ${trap.current.name}`, "success");
      increaseExperience(trap.current.damage);
      addDungeonLog(`${t("Earned exprience")}: ${trap.current.damage}`, "success");
    } else {
      const damage = Helpers.getRandomNumber(1, trap.current.damage);
      addDungeonLog(`${t("Trap")}: ${trap.current.name} ${damage} ${t("Damage")}`, "warning");
      decreaseCharacterHealth(damage);
    }
    // eslint-disable-next-line
  }, []);
  return <></>;
};

export default React.memo(DungeonTrap);
