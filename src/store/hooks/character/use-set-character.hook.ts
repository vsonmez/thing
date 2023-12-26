import { useCallback } from "react";
import Character from "../../../character/models/character.class";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";

const useSetCharacter = () => {
  const dispatch = AppStore.useAppDispatch();

  const setCharacter = useCallback(
    (character: Character) => {
      dispatch(CharacterStore.actions.setCharacter({ ...character }));
    },
    [dispatch]
  );

  return {
    /**
     * set character
     */
    setCharacter,
  };
};

export default useSetCharacter;
