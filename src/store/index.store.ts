import { configureStore } from "@reduxjs/toolkit";
import CharacterStore from "./character.store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import Helpers from "../helpers/index.helpers";
import InventoryStore from "./inventory.store";
import Character from "../character/models/character.class";
import ItemList from "../items/models/item-list.type";
import EquipmentStore from "./equipment.store";
import MessageStore from "./message.store";

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
 * This code snippet defines a namespace called AppStore. It exports a store object that is created using the configureStore function. The store object is responsible for managing the application state and is initialized with a reducer function that combines the reducers from CharacterStore, InventoryStore, EquipmentStore, and MessageStore.

The code also sets up a subscription to the store object, which saves specific parts of the state to the local storage whenever there is a change.

The namespace also exports some additional types and hooks (RootState, AppDispatch, useAppDispatch, and useAppSelector) that can be used elsewhere in the application.
 */
namespace AppStore {
  export const store = configureStore({
    reducer: {
      character: CharacterStore.reducer,
      inventory: InventoryStore.reducer,
      equipment: EquipmentStore.reducer,
      messages: MessageStore.reducer,
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
