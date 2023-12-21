import { useCallback } from "react";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";
/**
 * This code defines a custom hook called useCharacterIsInDungeon in TypeScript.

It uses the useAppDispatch and useAppSelector hooks from the AppStore and CharacterStore respectively.

The hook returns an object with two properties: characterIsInDungeon, which represents whether the character is currently in the dungeon, and setCharacterIsInDungeon, which is a function to update the value of characterIsInDungeon.
 */
const useCharacterIsInDungeon = () => {
  const dispatch = AppStore.useAppDispatch();
  const characterIsInDungeon = AppStore.useAppSelector(CharacterStore.select.isInDungeon);

  const setCharacterIsInDungeon = useCallback(
    (isInDungeon: boolean) => {
      dispatch(CharacterStore.actions.setIsInDungeon(isInDungeon));
    },
    [dispatch]
  );

  return {
    /** is character in dungeon */
    characterIsInDungeon,
    /** set character in dungeon */
    setCharacterIsInDungeon,
  };
};

export default useCharacterIsInDungeon;
