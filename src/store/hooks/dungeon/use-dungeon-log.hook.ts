import { useCallback } from "react";
import DungeonLogStore from "../../dungeon-log.store";
import AppStore from "../../index.store";
import { useTranslation } from "react-i18next";
import { MessageTypes } from "../../../message/models/message.type";
/**
 * This code defines a custom hook called useDungeonLog. It uses the useAppDispatch and useAppSelector hooks from the AppStore to get the Redux dispatch function and select the dungeonLog state from the store.

The addDungeonLog function is defined using useCallback and takes a dungeonLog parameter. It dispatches an action to add the dungeonLog to the store.

The hook returns an object with two properties: dungeonLogList which is the list of dungeon logs from the store, and addDungeonLog which is the function to add a dungeon log to the store.
 */
const useDungeonLog = () => {
  const { t } = useTranslation();
  const dispatch = AppStore.useAppDispatch();
  const dungeonLogList = AppStore.useAppSelector(DungeonLogStore.select.getDungeonLog);

  const addDungeonLog = useCallback(
    (dungeonLog: string, type?: MessageTypes) => {
      dispatch(DungeonLogStore.actions.addDungeonLog({ message: t(dungeonLog), type }));
    },
    [dispatch, t]
  );

  return {
    /** list of dungeon logs */
    dungeonLogList,
    /** add dungeon log */
    addDungeonLog,
  };
};

export default useDungeonLog;
