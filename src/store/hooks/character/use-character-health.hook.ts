import { useCallback } from "react";
import CharacterStore from "../../character.store";
import AppStore from "../../index.store";
/**
 * This code snippet is a custom React hook called useCharacterHealth that provides methods and properties related to a character's health. It returns an object with the following properties and methods:

- characterCurrentHealth: a number representing the current health of the character.
- characterMaxHealth: a number representing the maximum health of the character.
- characterHealthRegen: a number representing the amount of health the character regenerates per second.
- increaseCharacterHealth(amount: number): a function that increases the character's health by the specified amount.
- decreaseCharacterHealth(amount: number): a function that decreases the character's health by the specified amount.

The hook internally uses the useAppDispatch and useAppSelector hooks from the AppStore and CharacterStore contexts to dispatch actions and select the character's health state.
 */
const useCharacterHealth = () => {
  const dispatch = AppStore.useAppDispatch();
  const { current, max, regen } = AppStore.useAppSelector(CharacterStore.select.health);

  const increaseHealth = useCallback(
    (amount: number) => dispatch(CharacterStore.actions.increaseHealth(amount)),
    [dispatch]
  );
  const decreaseHealth = useCallback(
    (amount: number) => dispatch(CharacterStore.actions.decreaseHealth(amount)),
    [dispatch]
  );

  return {
    /**
     * The characterCurrentHealth property is a number that represents the current health of the character.
     */
    characterCurrentHealth: current,
    /**
     * The characterMaxHealth property is a number that represents the maximum health of the character.
     */
    characterMaxHealth: max,
    /**
     * The characterHealthRegen property is a number that represents the amount of health the character
     * regenerates per second.
     */
    characterHealthRegen: regen,
    /**
     * The increaseCharacterHealth function takes in a number and dispatches an action to increase the
     * character's health by that amount.
     * @param {number} amount - number - The amount of health to increase the character's health by.
     */
    increaseCharacterHealth: increaseHealth,
    /**
     * The decreaseCharacterHealth function takes in a number and dispatches an action to decrease the
     * character's health by that amount.
     * @param {number} amount - number - The amount of health to decrease the character's health by.
     */
    decreaseCharacterHealth: decreaseHealth,
  };
};

export default useCharacterHealth;
