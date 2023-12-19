import calculateStatModifierFN from "./calculate-stat-modifier.helper";
import createCharacterFN from "./create-character.helper";
import experienceFNS from "./experience.helper";
import formatCurrencyFN from "./format-currency.helper";
import getRandomNumberFN from "./get-random-number.helper";
import getStatPointFN from "./get-stat-point.helper";
import isItemArmorFN from "./is-item-armor.helper";
import isItemWeaponFN from "./is-item-weapon.helper";
import makeImmutableFN from "./make-immutable";

namespace Helpers {
  /**
   * Returns a random number between 1 and 100.
   */
  export const getRandomNumber = getRandomNumberFN;
  /**
   * Creates a new character.
   * @param name - The name of the character.
   */
  export const createCharacter = createCharacterFN;
  /**
   * Makes an object immutable.
   * @param obj - The object to make immutable.
   */
  export const makeImmutable = makeImmutableFN;
  /**
   * Formats a currency value.
   */
  export const formatCurrency = formatCurrencyFN;
  /**
   * Determines if an item is armor.
   */
  export const isItemArmor = isItemArmorFN;
  /**
   * Determines if an item is a weapon.
   */
  export const isItemWeapon = isItemWeaponFN;
  /**
   * Calculates the stat modifier.
   */
  export const calculateStatModifier = calculateStatModifierFN;
  /**
   * Experience helper functions
   */
  export const experience = experienceFNS;
  /**
   * Get stat point
   */
  export const getStatPoint = getStatPointFN;
}
export default Helpers;
