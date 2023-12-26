import { configureStore } from "@reduxjs/toolkit";
import CharacterStore from "./character.store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import InventoryStore from "./inventory.store";
import Character from "../character/models/character.class";
import ItemList from "../items/models/item-list.type";
import EquipmentStore from "./equipment.store";
import MessageStore from "./message.store";
import GlobalStore from "./global.store";
import DungeonLogStore from "./dungeon-log.store";
import DungeonStore from "./dungeon.store";
import CombatLogStore from "./combat-log.store";
import potions from "../items/potions.items";
import armors from "../items/armors.items";
import weapons from "../items/weapon.items";

const character = localStorage.getItem("character");
const characterData: Character = character
  ? {
      ...(JSON.parse(character) as Character),
      isInDungeon: false,
      currentDungeon: "",
    }
  : new Character("", {
      str: 0,
      dex: 0,
      cons: 0,
    });

const inventory = localStorage.getItem("inventory");
const inventoryData: ItemList = inventory
  ? JSON.parse(inventory)
  : {
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
      dungeonLog: DungeonLogStore.reducer,
      combatLog: CombatLogStore.reducer,
      dungeon: DungeonStore.reducer,
      global: GlobalStore.reducer,
    },
    preloadedState: {
      character: {
        ...characterData,
      },
      inventory: inventoryData,
      equipment: equipmentData,
    },
  });

  store.subscribe(() => {
    const character = store.getState().character;
    localStorage.setItem("character", JSON.stringify(character));
    localStorage.setItem("inventory", JSON.stringify(store.getState().inventory));
    localStorage.setItem("equipment", JSON.stringify(store.getState().equipment));
    localStorage.setItem("saveTime", new Date().getTime().toString());
  });

  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export const useAppDispatch: () => AppDispatch = useDispatch;
  export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
}

export default AppStore;
