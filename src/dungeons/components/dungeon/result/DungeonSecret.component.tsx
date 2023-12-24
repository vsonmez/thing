import React, { useEffect, useRef } from "react";
import Dungeon from "../../../../locations/models/dungeon.type";
import Helpers from "../../../../helpers/index.helpers";
import useDungeon from "../../../../store/hooks/dungeon/use-dungeon.store";
import useDungeonLog from "../../../../store/hooks/dungeon/use-dungeon-log.hook";
import { useTranslation } from "react-i18next";
import useInventory from "../../../../store/hooks/inventory/use-inventory.hook";
import useCharacterExperience from "../../../../store/hooks/character/use-character-experience.hook";

const DungeonSecret = ({ dungeon }: { dungeon: Dungeon }) => {
  const { increaseExperience } = useCharacterExperience();
  const { addItemToInventory } = useInventory();
  const { decreaseSecretAmount } = useDungeon();
  const { addDungeonLog } = useDungeonLog();
  const { t } = useTranslation();
  const secret = useRef(Helpers.getRandomElementFromArray(dungeon.secrets.list));
  useEffect(() => {
    decreaseSecretAmount();
    const isFoundScret = Helpers.difficultyCheck(secret.current);
    if (isFoundScret) {
      addDungeonLog(`${t("Secret")}: ${secret.current.name}`, "success");
      switch (secret.current.type) {
        case "container":
          const reward = Helpers.getRandomElementFromArray(secret.current.content);
          addItemToInventory(reward);
          addDungeonLog(`${t("You found")}: ${t(reward.name)}`, "success");
          increaseExperience(Math.ceil(secret.current.difficulty / 10));
          addDungeonLog(`${t("Earned exprience")}: ${Math.ceil(secret.current.difficulty / 10)}`, "success");
          console.log(reward);
          break;
        default:
          break;
      }
    } else {
      addDungeonLog(t("You didn't find anything"));
    }
    // eslint-disable-next-line
  }, []);
  return <></>;
};

export default React.memo(DungeonSecret);
