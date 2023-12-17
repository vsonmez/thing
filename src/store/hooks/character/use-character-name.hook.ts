import { useCallback } from "react";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";

/**
 * This code defines a custom React hook called useCharacterName. I
 *
 * It returns an object that provides the character's name and allows setting the name as well.
 *
 * It uses the useAppDispatch and useAppSelector hooks from the AppStore and CharacterStore to interact with the Redux store.
 *
 * The characterName property represents the current name of the character, and the setCharacterName function is used to update the character's name.
 */
const useCharacterName = () => {
  const dispatch = AppStore.useAppDispatch();
  const characterName = AppStore.useAppSelector(CharacterStore.select.name);

  const setCharacterName = useCallback(
    (name: string) => {
      dispatch(CharacterStore.actions.setCharacterName(name));
    },
    [dispatch]
  );
  return {
    /**
     * The characterName property is a string that represents the name of the character.
     */
    characterName,
    /**
     * Set the name of the character.
     * @param {string} name - The name of the character.
     */
    setCharacterName,
  };
};

export default useCharacterName;
