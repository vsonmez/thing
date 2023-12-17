import CharacterStore from "../../character.store";
import AppStore from "../../index.store";
/**
 * This code defines a custom hook called useCharacterStrength.
 *
 * It uses a selector from the AppStore and CharacterStore to get the strength value. It returns an object with two properties:
 * - characterStrength,
 * - strengthModifier,
 *
 * which represent the strength and strength modifier of a character, respectively.
 */
const useCharacterStrength = () => {
  const { modifier: strengthModifier, value: characterStrength } = AppStore.useAppSelector(
    CharacterStore.select.strength
  );
  return {
    /** The characterStrength property is a number that represents the strength of the character. */
    characterStrength,
    /** The strengthModifier property is a number that represents the strength modifier of the character. */
    strengthModifier,
  };
};

export default useCharacterStrength;
