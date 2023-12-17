import { useCallback } from "react";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";
/**
 * This code snippet defines a custom React hook called useCharacterLevel. The hook provides two methods: characterLevel and increaseCharacterLevel.

The characterLevel method returns the level of a character.

The increaseCharacterLevel method increases the level of the character by 1.
 */
const useCharacterLevel = () => {
  const dispatch = AppStore.useAppDispatch();
  const characterLevel = AppStore.useAppSelector(CharacterStore.select.level);

  const increaseCharacterLevel = useCallback(() => {
    dispatch(CharacterStore.actions.increaseLevel());
  }, [dispatch]);
  return {
    /**
     * Character level
     * @description The characterLevel hook returns the level of the character.
     */
    characterLevel,
    /**
     * Increase level
     * @description The increaseLevel function increases the level of the character by 1.
     */
    increaseCharacterLevel,
  };
};

export default useCharacterLevel;
