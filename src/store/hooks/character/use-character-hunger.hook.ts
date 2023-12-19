import { useCallback } from "react";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";
/**
 * This code defines a custom hook called useCharacterHunger. It uses the useAppDispatch and useAppSelector hooks from the AppStore to get the current value of the hunger state from the CharacterStore.

It also defines two functions increaseCharacterHunger and decreaseCharacterHunger that dispatch actions to increase and decrease the hunger state respectively.

The useCharacterHunger hook returns an object with the current characterHunger value and the two functions increaseCharacterHunger and decreaseCharacterHunger.
 */
const useCharacterHunger = () => {
  const dispatch = AppStore.useAppDispatch();
  const characterHunger = AppStore.useAppSelector(CharacterStore.select.hunger);

  const increaseCharacterHunger = useCallback(
    (amount: number) => {
      dispatch(CharacterStore.actions.increaseHunger(amount));
    },
    [dispatch]
  );

  const decreaseCharacterHunger = useCallback(
    (amount: number) => {
      dispatch(CharacterStore.actions.decreaseHunger(amount));
    },
    [dispatch]
  );

  return {
    /** Character Hunger **/
    characterHunger,
    /**
     * Increase Character Hunger
     */
    increaseCharacterHunger,
    /**
     * Decrease Character Hunger
     */
    decreaseCharacterHunger,
  };
};

export default useCharacterHunger;
