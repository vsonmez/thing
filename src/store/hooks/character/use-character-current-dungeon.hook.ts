import { useCallback } from "react";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";

const useCharacterCurrentDungeon = () => {
  const dispatch = AppStore.useAppDispatch();
  const currentDungeon = AppStore.useAppSelector(CharacterStore.select.currentDungeon);

  const setCurrentDungeon = useCallback(
    (dungeon: string) => {
      dispatch(CharacterStore.actions.setCurrentDungeon(dungeon));
    },
    [dispatch]
  );

  return {
    /** current dungeon of the character */
    currentDungeon,
    /** set current dungeon of the character */
    setCurrentDungeon,
  };
};

export default useCharacterCurrentDungeon;
