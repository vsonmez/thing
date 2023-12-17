import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Weapon from "../items/models/weapon.type";
import Armor from "../items/models/armor.type";
import AppStore from "./index.store";
/**
 * This code snippet defines a namespace called EquipmentStore in TypeScript. It includes a type called EquipmentStoreType, which represents the structure of an equipment store object with properties for hand and armor.

The code also initializes an initial state object for the equipment store, where hand and armor are initially set to undefined.

Additionally, the code creates a slice using the createSlice function, which is a part of the redux-toolkit library. The slice includes reducers for equipping and unequipping weapons and armor.

Finally, the code exports the actions, reducer, and select functions from the equipmentSlice to be used in other parts of the codebase.
 */
namespace EquipmentStore {
  type EquipmentStoreType = {
    hand: Weapon;
    armor: Armor;
  };
  const initialState: EquipmentStoreType = {
    armor: undefined,
    hand: undefined,
  };
  const equipmentSlice = createSlice({
    initialState,
    name: "equipment",
    reducers: {
      equipWeapon(state, action: PayloadAction<Weapon>) {
        state.hand = action.payload;
      },
      unEquipWeapon(state) {
        state.hand = undefined;
      },
      equipArmor(state, action: PayloadAction<Armor>) {
        state.armor = action.payload;
      },
      unEquipArmor(state) {
        state.armor = undefined;
      },
    },
  });
  export const actions = equipmentSlice.actions;
  export const reducer = equipmentSlice.reducer;
  export const select = {
    hand: (state: AppStore.RootState) => state.equipment.hand,
    armor: (state: AppStore.RootState) => state.equipment.armor,
  };
}

export default EquipmentStore;
