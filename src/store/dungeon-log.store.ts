import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import DungeonLog from "../dungeons/models/dungeon-log.type";
import Helpers from "../helpers/index.helpers";
import AppStore from "./index.store";
namespace DungeonLogStore {
  const initialState: DungeonLog[] = [];
  const dungeonLogSlice = createSlice({
    initialState,
    name: "dungeonLog",
    reducers: {
      addDungeonLog: produce((draft, action: PayloadAction<string>) => {
        const newLog: DungeonLog = {
          id: Helpers.getID(),
          text: action.payload,
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
