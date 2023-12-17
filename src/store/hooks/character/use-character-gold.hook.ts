import { useCallback } from "react";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";

/**
 * This code defines a custom React hook called useCharacterGold that provides methods to increase and decrease the gold of a character.
 *
 * It uses the useAppDispatch and useAppSelector hooks from the AppStore and CharacterStore modules, respectively.
 *
 * The increaseGold and decreaseGold methods dispatch actions to increase and decrease the character's gold using the CharacterStore.
 *
 * The hook returns an object with three properties:
 * - characterGold, which represents the current gold of the character,
 * - increaseGold,
 * - decreaseGold,
 *
 * which are functions to increase and decrease the character's gold.
 */
const useCharacterGold = () => {
  const dispatch = AppStore.useAppDispatch();
  const characterGold = AppStore.useAppSelector(CharacterStore.select.gold);

  const increaseGold = useCallback(
    (amount: number) => {
      dispatch(CharacterStore.actions.increaseGold(amount));
    },
    [dispatch]
  );

  const decreaseGold = useCallback(
    (amount: number) => {
      dispatch(CharacterStore.actions.decreaseGold(amount));
    },
    [dispatch]
  );

  return {
    /** The characterGold property is a number that represents the gold of the character. */
    characterGold,
    /** Increase the gold of the character. */
    increaseGold,
    /** Decrease the gold of the character. */
    decreaseGold,
  };
};

export default useCharacterGold;
