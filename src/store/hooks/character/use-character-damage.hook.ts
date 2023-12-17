import { useCallback } from "react";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";
/**
 * This code defines a custom hook called useCharacterDamage that provides access to the character's damage value and functions to increase or decrease the damage.
 *
 * It uses the Redux store's useAppDispatch and useAppSelector hooks to interact with the store.
 *
 * The increaseDamage and decreaseDamage functions dispatch actions to update the character's damage in the store.
 *
 * The hook returns an object with the characterDamage property, which represents the current damage value, and the increaseDamage and decreaseDamage functions.
 */
const useCharacterDamage = () => {
  const dispatch = AppStore.useAppDispatch();
  const characterDamage = AppStore.useAppSelector(CharacterStore.select.damage);

  const increaseDamage = useCallback(
    (amount: number) => {
      dispatch(CharacterStore.actions.increaseDamage(amount));
    },
    [dispatch]
  );

  const decreaseDamage = useCallback(
    (amount: number) => {
      dispatch(CharacterStore.actions.decreaseDamage(amount));
    },
    [dispatch]
  );

  return {
    /** The characterDamage property is a number that represents the damage of the character. */
    characterDamage,
    /** Increase the damage of the character. */
    increaseDamage,
    /** Decrease the damage of the character. */
    decreaseDamage,
  };
};

export default useCharacterDamage;
