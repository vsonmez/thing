import React, { useEffect, useRef } from "react";
import Dungeon from "../../../../locations/models/dungeon.type";
import Helpers from "../../../../helpers/index.helpers";
import useDungeon from "../../../../store/hooks/dungeon/use-dungeon.store";
import useDungeonLog from "../../../../store/hooks/dungeon/use-dungeon-log.hook";
import { useTranslation } from "react-i18next";

const DungeonMonster = ({ dungeon }: { dungeon: Dungeon }) => {
  const { decreaseMonsterAmount } = useDungeon();
  const { addDungeonLog } = useDungeonLog();
  const { t } = useTranslation();
  const monster = useRef(Helpers.getRandomElementFromArray(dungeon.monsters.list));
  useEffect(() => {
    decreaseMonsterAmount();
    addDungeonLog(`${t("Monster")}: ${monster.current.name}`);
    // eslint-disable-next-line
  }, []);
  return <></>;
};

export default React.memo(DungeonMonster);
