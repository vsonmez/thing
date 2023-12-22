import React, { useEffect, useRef } from "react";
import Dungeon from "../../../locations/models/dungeon.type";
import Helpers from "../../../helpers/index.helpers";
import useDungeon from "../../../store/hooks/dungeon/use-dungeon.store";
import useDungeonLog from "../../../store/hooks/dungeon/use-dungeon-log.hook";
import { useTranslation } from "react-i18next";

const DungeonSecret = ({ dungeon }: { dungeon: Dungeon }) => {
  const { decreaseSecretAmount } = useDungeon();
  const { addDungeonLog } = useDungeonLog();
  const { t } = useTranslation();
  const secret = useRef(Helpers.getRandomElementFromArray(dungeon.secrets.list));
  useEffect(() => {
    decreaseSecretAmount();
    addDungeonLog(t("Secret"));
    // eslint-disable-next-line
  }, []);
  return <></>;
};

export default React.memo(DungeonSecret);
