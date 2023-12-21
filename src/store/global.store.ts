import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import AppStore from "./index.store";
namespace GlobalStore {
  type GlobalStoreType = {
    isBusy: boolean;
    currentScreen: "message" | "dungeon";
  };
  const initialState: GlobalStoreType = {
    isBusy: false,
    currentScreen: "message",
  };
  const globalStoreSlice = createSlice({
    initialState,
    name: "global",
    reducers: {
      setIsBusy: produce((state, action: PayloadAction<boolean>) => {
        state.isBusy = action.payload;
      }),
      setCurrentScreen: produce((state, action: PayloadAction<"message" | "dungeon">) => {
        state.currentScreen = action.payload;
      }),
    },
  });
  export const actions = globalStoreSlice.actions;
  export const reducer = globalStoreSlice.reducer;
  export const select = {
    isBusy: (state: AppStore.RootState) => state.global.isBusy,
    currentScreen: (state: AppStore.RootState) => state.global.currentScreen,
  };
}

export default GlobalStore;
