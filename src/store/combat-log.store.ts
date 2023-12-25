import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import CombatLog from "../combat/models/combat-log.type";
import Helpers from "../helpers/index.helpers";
import AppStore from "./index.store";
import { MessageTypes } from "../message/models/message.type";
namespace CombatLogStore {
  const initialState: CombatLog[] = [];
  const combatLogSlice = createSlice({
    initialState,
    name: "combatLog",
    reducers: {
      addCombatLog: (
        state,
        action: PayloadAction<{
          message: string;
          type?: MessageTypes;
        }>
      ) => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const newLog: CombatLog = {
          id: Helpers.getID(),
          message: action.payload.message,
          created_at: `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
            2,
            "0"
          )}`,
          type: action.payload.type,
        };
        state.unshift(newLog);
      },
    },
  });
  export const actions = combatLogSlice.actions;
  export const reducer = combatLogSlice.reducer;
  export const select = {
    getCombatLog: (state: AppStore.RootState) => state.combatLog,
  };
}

export default CombatLogStore;
