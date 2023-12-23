import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import DungeonLog from "../dungeons/models/dungeon-log.type";
import Helpers from "../helpers/index.helpers";
import AppStore from "./index.store";
import { MessageTypes } from "../message/models/message.type";
namespace DungeonLogStore {
  const initialState: DungeonLog[] = [];
  const dungeonLogSlice = createSlice({
    initialState,
    name: "dungeonLog",
    reducers: {
      addDungeonLog: produce((draft, action: PayloadAction<{ message: string; type?: MessageTypes }>) => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const newLog: DungeonLog = {
          id: Helpers.getID(),
          message: action.payload.message,
          created_at: `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
            2,
            "0"
          )}`,
          type: action.payload.type,
        };
        draft.unshift(newLog);
      }),
    },
  });
  export const actions = dungeonLogSlice.actions;
  export const reducer = dungeonLogSlice.reducer;
  export const select = {
    getDungeonLog: (state: AppStore.RootState) => state.dungeonLog,
  };
}

export default DungeonLogStore;
