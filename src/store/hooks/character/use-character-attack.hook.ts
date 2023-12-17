import { useCallback } from "react";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";

/**
 * This code defines a custom hook called useCharacterAttack. It returns an object with three properties and two functions.

- The characterAttack property is a number that represents the attack power of the character.
- The decreaseAttack function decreases the attack power of the character by the amount passed in.
- The increaseAttack function increases the attack power of the character by the amount passed in.

Both decreaseAttack and increaseAttack functions use the useCallback hook to memoize the function instances and optimize performance. They also use the dispatch function from the AppStore to dispatch actions defined in the CharacterStore to update the attack power state.
 */
const useCharacterAttack = () => {
  const dispatch = AppStore.useAppDispatch();
  const characterAttack = AppStore.useAppSelector(CharacterStore.select.attack);

  const increaseAttack = useCallback(
    (amount: number) => {
      dispatch(CharacterStore.actions.increaseAttack(amount));
    },
    [dispatch]
  );
  const decreaseAttack = useCallback(
    (amount: number) => {
      dispatch(CharacterStore.actions.decreaseAttack(amount));
    },
    [dispatch]
  );

  return {
    /**
     * The characterAttack property is a number that represents the attack power of the character.
     */
    characterAttack,
    /**
     * It decreases the attack power of the character by the amount passed in.
     * @param {number} amount - The amount to decrease the attack by.
     */
    decreaseAttack,
    /**
     * It increases the attack power of the character by the amount passed in.
     * @param {number} amount - The amount to increase the attack by.
     */
    increaseAttack,
  };
};

export default useCharacterAttack;
