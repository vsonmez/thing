import { configureStore } from "@reduxjs/toolkit";
import CharacterStore from "./character.store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import Helpers from "../helpers/index.helpers";
import InventoryStore from "./inventory.store";
import Character from "../character/models/character.class";
import ItemList from "../items/models/item-list.type";
import EquipmentStore from "./equipment.store";

const character = localStorage.getItem("character");
const characterData: Character = character ? JSON.parse(character) : { ...Helpers.createCharacter("") };

const inventory = localStorage.getItem("inventory");
const inventoryData: ItemList = inventory ? JSON.parse(inventory) : {};

const equipment = localStorage.getItem("equipment");
const equipmentData = equipment ? JSON.parse(equipment) : {};

localStorage.setItem("character", JSON.stringify(characterData));
localStorage.setItem("inventory", JSON.stringify(inventoryData));
localStorage.setItem("equipment", JSON.stringify(equipmentData));
/**
 * This code snippet appears to be setting up a store for an application using Redux in TypeScript.
 *
 * It retrieves data from local storage for a character, inventory, and equipment, and then initializes the Redux store with that data.
 *
 * The store object has a reducer that combines reducers from CharacterStore, InventoryStore, and EquipmentStore. It also has a preloaded state that is initialized with characterData, inventoryData, and equipmentData.
 *
 * It also sets up functions and types for dispatching actions and selecting state from the Redux store.
 *
 * The code exports some types and hooks related to the store object: RootState, AppDispatch, useAppDispatch, and useAppSelector. These can be used to interact with the Redux store in other parts of the application.
 *
 * Finally, it adds a subscription to the store that updates the local storage whenever the state changes.
 */
namespace AppStore {
  export const store = configureStore({
    reducer: {
      character: CharacterStore.reducer,
      inventory: InventoryStore.reducer,
      equipment: EquipmentStore.reducer,
    },
    preloadedState: {
      character: characterData,
      inventory: inventoryData,
      equipment: equipmentData,
    },
  });

  store.subscribe(() => {
    localStorage.setItem("character", JSON.stringify(store.getState().character));
    localStorage.setItem("inventory", JSON.stringify(store.getState().inventory));
    localStorage.setItem("equipment", JSON.stringify(store.getState().equipment));
  });

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
}

export default AppStore;
