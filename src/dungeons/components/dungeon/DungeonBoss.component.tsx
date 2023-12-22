import React, { useEffect, useRef } from "react";
import Dungeon from "../../../locations/models/dungeon.type";
import Helpers from "../../../helpers/index.helpers";
import useDungeonLog from "../../../store/hooks/dungeon/use-dungeon-log.hook";

const DungeonBoss = ({ dungeon }: { dungeon: Dungeon }) => {
  const { addDungeonLog } = useDungeonLog();
  const boss = useRef(Helpers.getRandomElementFromArray(dungeon.monsters.boss));
  useEffect(() => {
    addDungeonLog(`Boss`);
    // eslint-disable-next-line
  }, []);
  return <></>;
};

export default React.memo(DungeonBoss);
