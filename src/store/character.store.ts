import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AppStore from "./index.store";
import Character from "../character/models/character.class";
import { produce } from "immer";
/**
 * This code snippet defines a namespace called CharacterStore in TypeScript. It declares a type CharacterStoreType which is an alias for the Character type. 
 * 
 * It also defines an initial state object for the character store, which includes properties like name, level, experience, gold, and stats (which contains properties like attack, defense, damage, and health).

The code also creates a characterSlice using the createSlice function. This slice contains a set of reducers that modify the CharacterStoreType state. 

For example, there are reducers to set the character name, 
- increase/decrease defense, 
- increase/decrease health, 
- increase/decrease attack, 
- increase/decrease damage, 
- increase level, 
- increase/decrease experience, 
- increase/decrease gold.

The code exports the actions, reducer, and select objects from the characterSlice to be used elsewhere in the application. 

The select object provides selectors to access specific properties of the character state from the application's root state.
 */
namespace CharacterStore {
  type CharacterStoreType = Character;
  const initialState: CharacterStoreType = {
    name: "",
    level: 1,
    experience: 0,
    gold: 100,
    location: "eldorath",
    hunger: 100,
    stats: {
      attack: 1,
      defense: 10,
      damage: 0,
      health: {
        current: 100,
        max: 100,
        regen: 1,
      },
      dexterity: {
        modifier: 0,
        value: 0,
      },
      strength: {
        modifier: 0,
        value: 0,
      },
      constitution: {
        modifier: 0,
        value: 0,
      },
    },
  };
  const characterSlice = createSlice({
    initialState,
    name: "character",
    reducers: {
      setCharacterName: produce((state: CharacterStoreType, action: PayloadAction<string>) => {
        state.name = action.payload;
      }),
      increaseDefense: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.defense += action.payload;
      }),
      decreaseDefense: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.defense = Math.max(state.stats.defense - action.payload, 0);
      }),
      increaseHealth: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        const { current, max } = state.stats.health;
        state.stats.health.current = Math.min(current + action.payload, max);
      }),
      decreaseHealth: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.health.current = Math.max(state.stats.health.current - action.payload, 0);
      }),
      increaseAttack: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.attack += action.payload;
      }),
      increaseDamage: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.damage += action.payload;
      }),
      decreaseDamage: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.damage = Math.max(state.stats.damage - action.payload, 0);
      }),
      decreaseAttack: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.attack = Math.max(state.stats.attack - action.payload, 0);
      }),
      increaseLevel: produce((state: CharacterStoreType) => {
        state.level++;
      }),
      increaseExperience: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        state.experience += action.payload;
      }),
      increaseGold: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        state.gold += action.payload;
      }),
      decreaseGold: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        state.gold = Math.max(state.gold - action.payload, 0);
      }),
      setLocation: produce((state: CharacterStoreType, action: PayloadAction<string>) => {
        state.location = action.payload;
      }),
      increaseHunger: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        state.hunger += Math.min(state.hunger + action.payload, 100);
      }),
      decreaseHunger: produce((state: CharacterStoreType, action: PayloadAction<number>) => {
        state.hunger = Math.max(state.hunger - action.payload, 0);
      }),
    },
  });
  export const actions = characterSlice.actions;
  export const reducer = characterSlice.reducer;
  export const select = {
    attack: (state: AppStore.RootState) => state.character.stats.attack,
    damage: (state: AppStore.RootState) => state.character.stats.damage,
    defense: (state: AppStore.RootState) => state.character.stats.defense,
    health: (state: AppStore.RootState) => state.character.stats.health,
    name: (state: AppStore.RootState) => state.character.name,
    level: (state: AppStore.RootState) => state.character.level,
    experience: (state: AppStore.RootState) => state.character.experience,
    gold: (state: AppStore.RootState) => state.character.gold,
    strength: (state: AppStore.RootState) => state.character.stats.strength,
    dexterity: (state: AppStore.RootState) => state.character.stats.dexterity,
    location: (state: AppStore.RootState) => state.character.location,
    hunger: (state: AppStore.RootState) => state.character.hunger,
  };
}

export default CharacterStore;
