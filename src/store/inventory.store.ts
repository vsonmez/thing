import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ItemList from "../items/models/item-list.type";
import AppStore from "./index.store";
import Item from "../items/models/item-global.type";
import { Draft, produce } from "immer";
/**
 * This code snippet defines a namespace called InventoryStore in TypeScript. It exports an actions object, a reducer function, and a select object.

The reducer function uses the createSlice function to create a slice of the Redux store called "inventory". It initializes the state with an empty ItemList object. The reducers property defines three reducer functions: 
- addItemToInventory, 
- removeItemFromInventory, 
- setIsEquipped.

These reducer functions use the produce function from the immer library to create a new immutable state based on the previous state. The functions update the state based on the action payload passed to them. 

- addItemToInventory adds an item to the inventory by incrementing its quantity, 
- removeItemFromInventory removes an item from the inventory by decrementing its quantity or deleting it if the quantity becomes zero, 
- setIsEquipped sets the isEquipped property of an item in the inventory.
 */
namespace InventoryStore {
  const initialState: ItemList = {};
  const inventorySlice = createSlice({
    initialState,
    name: "inventory",
    reducers: {
      addItemToInventory: (state: ItemList, { payload }: PayloadAction<Item>) => {
        return produce(state, (draftState: Draft<ItemList>) => {
          const itemInInventory = draftState[payload.defname];
          if (itemInInventory) {
            itemInInventory.quantity += 1;
          } else {
            const itemToBeAdded = {
              ...payload,
              quantity: 1,
            };
            draftState[payload.defname] = itemToBeAdded;
          }
        });
      },
      removeItemFromInventory: (state: ItemList, { payload }: PayloadAction<string>) => {
        return produce(state, (draftState: Draft<ItemList>) => {
          const itemInInventory = draftState[payload];
          if (itemInInventory) {
            if (itemInInventory.quantity > 1) {
              itemInInventory.quantity -= 1;
            } else {
              delete draftState[payload];
            }
          }
        });
      },
      setIsEquipped: (state: ItemList, { payload }: PayloadAction<{ defname: string; isEquipped: boolean }>) => {
        return produce(state, (draftState: Draft<ItemList>) => {
          const itemInInventory = draftState[payload.defname];
          if (itemInInventory) {
            itemInInventory.isEquipped = payload.isEquipped;
          }
        });
      },
    },
  });
  export const actions = inventorySlice.actions;
  export const reducer = inventorySlice.reducer;
  export const select = {
    inventory: (state: AppStore.RootState) => state.inventory,
  };
}

export default InventoryStore;
