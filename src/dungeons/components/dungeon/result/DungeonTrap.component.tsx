import React, { useEffect, useRef } from "react";
import Helpers from "../../../../helpers/index.helpers";
import Dungeon from "../../../../locations/models/dungeon.type";
import useDungeon from "../../../../store/hooks/dungeon/use-dungeon.store";
import { useTranslation } from "react-i18next";
import useDungeonLog from "../../../../store/hooks/dungeon/use-dungeon-log.hook";

const DungeonTrap = ({ dungeon }: { dungeon: Dungeon }) => {
  const { decreaseTrapAmount } = useDungeon();
  const { addDungeonLog } = useDungeonLog();
  const { t } = useTranslation();
  const trap = useRef(Helpers.getRandomElementFromArray(dungeon.traps.list));
  useEffect(() => {
    decreaseTrapAmount();
    addDungeonLog(`${t("Trap")}: ${trap.current.name} ${trap.current.damage} ${t("Damage")}`, "warning");
    // eslint-disable-next-line
  }, []);
  return <></>;
};

export default React.memo(DungeonTrap);
