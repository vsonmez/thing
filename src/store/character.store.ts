import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import AppStore from "./index.store";
import Character from "../character/models/character.class";
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
    area: "market",
    hunger: 100,
    isInDungeon: false,
    currentDungeon: "",
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
      setCharacter: (state: CharacterStoreType, action: PayloadAction<CharacterStoreType>) => {
        return {
          ...state,
          ...action.payload,
        };
      },
      setCharacterName: (state: CharacterStoreType, action: PayloadAction<string>) => {
        state.name = action.payload;
      },
      increaseDefense: (state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.defense += action.payload;
      },
      decreaseDefense: (state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.defense = Math.max(state.stats.defense - action.payload, 0);
      },
      increaseHealth: (state: CharacterStoreType, action: PayloadAction<number>) => {
        const { current, max } = state.stats.health;
        state.stats.health.current = Math.min(current + action.payload, max);
      },
      decreaseHealth: (state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.health.current = Math.max(state.stats.health.current - action.payload, 0);
      },
      increaseAttack: (state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.attack += action.payload;
      },
      increaseDamage: (state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.damage += action.payload;
      },
      decreaseDamage: (state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.damage = Math.max(state.stats.damage - action.payload, 0);
      },
      decreaseAttack: (state: CharacterStoreType, action: PayloadAction<number>) => {
        state.stats.attack = Math.max(state.stats.attack - action.payload, 0);
      },
      increaseLevel: (state: CharacterStoreType) => {
        state.level++;
      },
      increaseExperience: (state: CharacterStoreType, action: PayloadAction<number>) => {
        state.experience += action.payload;
      },
      increaseGold: (state: CharacterStoreType, action: PayloadAction<number>) => {
        state.gold += action.payload;
      },
      decreaseGold: (state: CharacterStoreType, action: PayloadAction<number>) => {
        state.gold = Math.max(state.gold - action.payload, 0);
      },
      setLocation: (state: CharacterStoreType, action: PayloadAction<string>) => {
        state.location = action.payload;
      },
      setArea: (state: CharacterStoreType, action: PayloadAction<string>) => {
        state.area = action.payload;
      },
      increaseHunger: (state: CharacterStoreType, action: PayloadAction<number>) => {
        state.hunger = Math.min(state.hunger + action.payload, 100);
      },
      decreaseHunger: (state: CharacterStoreType, action: PayloadAction<number>) => {
        state.hunger = Math.max(state.hunger - action.payload, 0);
      },
      setIsInDungeon: (state: CharacterStoreType, action: PayloadAction<boolean>) => {
        state.isInDungeon = action.payload;
      },
      setCurrentDungeon: (state: CharacterStoreType, action: PayloadAction<string>) => {
        state.currentDungeon = action.payload;
      },
      renewCharacter: (state: CharacterStoreType) => {
        localStorage.removeItem("character");
        const character = {
          ...new Character(state.name, {
            cons: state.stats.constitution.value,
            dex: state.stats.dexterity.value,
            str: state.stats.strength.value,
            health: state.stats.health.max,
          }),
        };
        return {
          ...character,
          gold: state.gold,
          level: state.level,
          experience: state.experience,
          location: state.location,
          hunger: state.hunger,
          currentDungeon: "",
          isInDungeon: false,
        };
      },
    },
  });
  export const actions = characterSlice.actions;
  export const reducer = characterSlice.reducer;
  export const select = {
    attack: (state: AppStore.RootState) => state.character.stats.attack,
    damage: (state: AppStore.RootState) => state.character.stats.damage,
    defense: (state: AppStore.RootState) => state.character.stats.defense,
    health: (state: AppStore.RootState) => state.character.stats.health,
    strength: (state: AppStore.RootState) => state.character.stats.strength,
    dexterity: (state: AppStore.RootState) => state.character.stats.dexterity,
    name: (state: AppStore.RootState) => state.character.name,
    level: (state: AppStore.RootState) => state.character.level,
    experience: (state: AppStore.RootState) => state.character.experience,
    gold: (state: AppStore.RootState) => state.character.gold,
    location: (state: AppStore.RootState) => state.character.location,
    hunger: (state: AppStore.RootState) => state.character.hunger,
    isInDungeon: (state: AppStore.RootState) => state.character.isInDungeon,
    currentDungeon: (state: AppStore.RootState) => state.character.currentDungeon,
    area: (state: AppStore.RootState) => state.character.area,
  };
}

export default CharacterStore;
