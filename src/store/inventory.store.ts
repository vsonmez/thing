import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ItemList from "../items/models/item-list.type";
import AppStore from "./index.store";
import Item from "../items/models/item-global.type";
import potions from "../items/potions.items";
import armors from "../items/armors.items";
import weapons from "../items/weapon.items";
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
  const initialState: ItemList = {
    healingHerb: {
      ...potions.healingHerb,
      quantity: 20,
    },
    lesserHealPotion: {
      ...potions.lesserHealPotion,
      quantity: 3,
    },
    paddedArmor: {
      ...armors.paddedArmor,
      quantity: 1,
    },
    dagger: {
      ...weapons.dagger,
      quantity: 1,
    },
  };
  const inventorySlice = createSlice({
    initialState,
    name: "inventory",
    reducers: {
      addItemToInventory: (state: ItemList, { payload }: PayloadAction<Item>) => {
        const payloadItem = payload;
        const quantity = payloadItem.quantity || 1;
        const itemInInventory = state[payloadItem.defname];
        if (itemInInventory) {
          itemInInventory.quantity += quantity;
        } else {
          const itemToBeAdded = {
            ...payloadItem,
            quantity,
          };
          state[payloadItem.defname] = itemToBeAdded;
        }
      },
      removeItemFromInventory: (state: ItemList, { payload }: PayloadAction<string>) => {
        const itemInInventory = state[payload];
        if (itemInInventory) {
          if (itemInInventory.quantity > 1) {
            itemInInventory.quantity -= 1;
          } else {
            delete state[payload];
          }
        }
      },
      setIsEquipped: (state: ItemList, { payload }: PayloadAction<{ defname: string; isEquipped: boolean }>) => {
        const itemInInventory = state[payload.defname];
        if (itemInInventory) {
          itemInInventory.isEquipped = payload.isEquipped;
        }
      },
      reset: () => {
        localStorage.removeItem("inventory");
        return initialState;
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
