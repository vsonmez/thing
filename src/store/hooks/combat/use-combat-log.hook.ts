import { useCallback } from "react";
import CombatLog from "../../../combat/models/combat-log.type";
import CombatLogStore from "../../combat-log.store";
import AppStore from "../../index.store";
import { MessageTypes } from "../../../message/models/message.type";

const useCombatLog = () => {
  const dispatch = AppStore.useAppDispatch();
  const combatLog = AppStore.useAppSelector(CombatLogStore.select.getCombatLog);

  const addCombatLog = useCallback(
    (message: string, type?: MessageTypes) => {
      dispatch(CombatLogStore.actions.addCombatLog({ message, type }));
    },
    [dispatch]
  );

  return {
    /** list of combat logs */
    combatLog,
    /** add combat log */
    addCombatLog,
  };
};

export default useCombatLog;
