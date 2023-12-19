import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { produce } from "immer";
import AppStore from "./index.store";
namespace GlobalStore {
  type GlobalStoreType = {
    isBusy: boolean;
  };
  const initialState: GlobalStoreType = {
    isBusy: false,
  };
  const globalStoreSlice = createSlice({
    initialState,
    name: "global",
    reducers: {
      setIsBusy: produce((state, action: PayloadAction<boolean>) => {
        state.isBusy = action.payload;
      }),
    },
  });
  export const actions = globalStoreSlice.actions;
  export const reducer = globalStoreSlice.reducer;
  export const select = {
    isBusy: (state: AppStore.RootState) => state.global.isBusy,
  };
}

export default GlobalStore;
