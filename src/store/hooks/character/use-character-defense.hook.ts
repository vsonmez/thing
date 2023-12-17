import { useCallback } from "react";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";
/**
 * This code defines a custom React hook called useCharacterDefense. It returns an object with three properties: characterDefense, increaseDefense, and decreaseDefense.

- The characterDefense property is a number that represents the defense power of a character.

- The increaseDefense function increases the defense of the character by the specified amount.

- The decreaseDefense function decreases the defense of the character by the specified amount.

Both increaseDefense and decreaseDefense make use of a dispatch function from the AppStore to update the character's defense value using actions defined in the CharacterStore.
 */
const useCharacterDefense = () => {
  const dispatch = AppStore.useAppDispatch();
  const characterDefense = AppStore.useAppSelector(CharacterStore.select.defense);

  const increaseDefense = useCallback(
    (amount: number) => {
      dispatch(CharacterStore.actions.increaseDefense(amount));
    },
    [dispatch]
  );

  const decreaseDefense = useCallback(
    (amount: number) => {
      dispatch(CharacterStore.actions.decreaseDefense(amount));
    },
    [dispatch]
  );

  return {
    /** The characterDefense property is a number that represents the defense power of the character. */
    characterDefense,
    /**
     * It increases the defense of the character by the amount passed in.
     * @param {number} amount - The amount to increase the defense by.
     */
    increaseDefense,
    /**
     * It decreases the defense of the character by the amount passed in.
     * @param {number} amount - The amount to decrease the defense by.
     */
    decreaseDefense,
  };
};

export default useCharacterDefense;
