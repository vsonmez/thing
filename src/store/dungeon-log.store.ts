import { PayloadAction, createSlice } from "@reduxjs/toolkit";
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
      addDungeonLog: (state, { payload }: PayloadAction<{ message: string; type?: MessageTypes }>) => {
        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        const newLog: DungeonLog = {
          id: Helpers.getID(),
          message: payload.message,
          created_at: `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
            2,
            "0"
          )}`,
          type: payload.type,
        };
        state.unshift(newLog);
      },
      clearDungeonLog: (state) => {
        state.splice(0, state.length);
      },
    },
  });
  export const actions = dungeonLogSlice.actions;
  export const reducer = dungeonLogSlice.reducer;
  export const select = {
    getDungeonLog: (state: AppStore.RootState) => state.dungeonLog,
  };
}

export default DungeonLogStore;
