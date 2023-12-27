import { useCallback } from "react";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";
/**
 * This code snippet defines a custom hook called useCharacterLocation. It uses the useAppDispatch and useAppSelector hooks from the AppStore to access the Redux store. It also uses the select.location selector from the CharacterStore to get the current character location from the Redux store.

The hook returns an object with two properties: characterLocation, which represents the current character location, and setCharacterLocation, which is a function that updates the character location in the Redux store when called with a new location string.
 */
const useCharacterLocation = () => {
  const dispatch = AppStore.useAppDispatch();
  const characterLocation = AppStore.useAppSelector(CharacterStore.select.location);
  const characterArea = AppStore.useAppSelector(CharacterStore.select.area);

  const setCharacterLocation = useCallback(
    (location: string, callback?: Function) => {
      dispatch(CharacterStore.actions.setLocation(location), callback && callback());
    },
    [dispatch]
  );

  const setCharacterArea = useCallback(
    (area: string, callback?: Function) => {
      dispatch(CharacterStore.actions.setArea(area), callback && callback());
    },
    [dispatch]
  );

  return {
    /** Character Location */
    characterLocation,
    /**
     * Character Area
     */
    characterArea,
    /** Set Character Location */
    setCharacterLocation,
    /**
     * Character Area
     */
    setCharacterArea,
  };
};

export default useCharacterLocation;
