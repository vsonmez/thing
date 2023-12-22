import React, { useEffect, useRef } from "react";
import useDungeonLog from "../../../store/hooks/dungeon/use-dungeon-log.hook";
import { useTranslation } from "react-i18next";
import Dungeon from "../../../locations/models/dungeon.type";
import Helpers from "../../../helpers/index.helpers";
import useDungeon from "../../../store/hooks/dungeon/use-dungeon.store";

const DungeonEvent = ({ dungeon }: { dungeon: Dungeon }) => {
  const { decreaseEventAmount } = useDungeon();
  const { addDungeonLog } = useDungeonLog();
  const { t } = useTranslation();
  const event = useRef(Helpers.getRandomElementFromArray(dungeon.events.list));

  useEffect(() => {
    decreaseEventAmount();
    addDungeonLog(`${t("Event")}: ${event.current.message}`);
    // eslint-disable-next-line
  }, []);

  return <></>;
};

export default React.memo(DungeonEvent);
