import CharacterStore from "../../character.store";
import AppStore from "../../index.store";
/**
 * This code snippet defines a custom React hook called useCharacterDexterity.
 *
 * It uses the useAppSelector hook from the AppStore to select the dexterity value from the CharacterStore.
 *
 * It then returns an object with two properties: characterDexterity and dexterityModifier.
 *
 * These properties represent the dexterity and dexterity modifier of a character, respectively.
 */
const useCharacterDexterity = () => {
  const { modifier: dexterityModifier, value: characterDexterity } = AppStore.useAppSelector(
    CharacterStore.select.dexterity
  );

  return {
    /**
     * The characterDexterity property is a number that represents the dexterity of the character.
     */
    characterDexterity,
    /**
     * The dexterityModifier property is a number that represents the dexterity modifier of the character.
     */
    dexterityModifier,
  };
};

export default useCharacterDexterity;
