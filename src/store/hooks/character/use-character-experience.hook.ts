import CharacterStore from "../../character.store";
import AppStore from "../../index.store";

/**
 * This code snippet defines a custom React hook called useCharacterExperience. It returns an object with two properties:

- characterExperience: Represents the current experience of a character.
- increaseExperience: A function that increases the experience of the character by a specified amount.

The hook internally uses the useAppDispatch and useAppSelector hooks from the AppStore and CharacterStore respectively, which are likely part of a larger Redux store setup. 

The dispatch function is used to dispatch an action to increase the character's experience.
 */
const useCharacterExperience = () => {
  const dispatch = AppStore.useAppDispatch();
  const characterExperience = AppStore.useAppSelector(CharacterStore.select.experience);

  const increaseExperience = (amount: number) => {
    dispatch(CharacterStore.actions.increaseExperience(amount));
  };
  return {
    /**
     * The current experience of the character.
     */
    characterExperience,
    /**
     * Increase the experience of the character.
     * @param amount The amount of experience to increase by.
     */
    increaseExperience,
  };
};

export default useCharacterExperience;
