import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AppStore from "./index.store";

namespace DungeonStore {
  export type DungeonStoreType = {
    eventAmount: number;
    trapAmount: number;
    monsterAmount: number;
    secretAmount: number;
    bossAmount: number;
  };
  const initialState: DungeonStoreType = {
    eventAmount: 0,
    trapAmount: 0,
    monsterAmount: 0,
    secretAmount: 0,
    bossAmount: 0,
  };
  const dungeonStoreSlice = createSlice({
    initialState,
    name: "dungeon",
    reducers: {
      decreaseEventAmount: (state) => {
        state.eventAmount = Math.max(0, state.eventAmount - 1);
      },
      decreaseTrapAmount: (state) => {
        state.trapAmount = Math.max(0, state.trapAmount - 1);
      },
      decreaseMonsterAmount: (state) => {
        state.monsterAmount = Math.max(0, state.monsterAmount - 1);
      },
      decreaseSecretAmount: (state) => {
        state.secretAmount = Math.max(0, state.secretAmount - 1);
      },
      decreaseBossAmount: (state) => {
        state.bossAmount = Math.max(0, state.bossAmount - 1);
      },
      reset: (state, action: PayloadAction<DungeonStoreType>) => {
        state.eventAmount = action.payload.eventAmount;
        state.trapAmount = action.payload.trapAmount;
        state.monsterAmount = action.payload.monsterAmount;
        state.secretAmount = action.payload.secretAmount;
        state.bossAmount = action.payload.bossAmount;
      },
    },
  });
  export const actions = dungeonStoreSlice.actions;
  export const reducer = dungeonStoreSlice.reducer;
  export const select = {
    eventAmount: (state: AppStore.RootState) => state.dungeon.eventAmount,
    trapAmount: (state: AppStore.RootState) => state.dungeon.trapAmount,
    monsterAmount: (state: AppStore.RootState) => state.dungeon.monsterAmount,
    secretAmount: (state: AppStore.RootState) => state.dungeon.secretAmount,
    bossAmount: (state: AppStore.RootState) => state.dungeon.bossAmount,
  };
}

export default DungeonStore;
