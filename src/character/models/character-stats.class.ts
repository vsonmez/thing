/**
 * health is an object with properties current, max, and regen that represent the health of the character.
 *
 * attack is a number that represents the attack power of the character.
 *
 * defense is a number that represents the defense power of the character.
 *
 * damage is a number that represents the damage dealt by the character.
 *
 * strength, dexterity, and constitution are objects with properties value and modifier that represent the strength, dexterity, and constitution of the character respectively.
 */
class CharacterStats {
  /**
   * The characterHealth property is a number that represents the health of the character.
   */
  health: {
    current: number;
    max: number;
    regen: number;
  };
  /**
   * The health property of the CharacterStats class can be used to track the health of the character throughout the game. The current property of the health object can be used to determine if the character is still alive. The max property of the health object can be used to determine how much health the character can have at most. The regen property of the health object can be used to determine how much health the character regenerates per turn.
   */
  attack: number;
  /**
   * The character defense property is a number that represents the defense power of the character.
   */
  defense: number;
  /**
   * The character damage property is a number that represents the damage dealt by the character.
   */
  damage: number;
  /**
   * The character strength property is a number that represents the strength of the character.
   */
  strength: {
    value: number;
    modifier: number;
  };
  /**
   * The character dexterity property is a number that represents the dexterity of the character.
   */
  dexterity: {
    value: number;
    modifier: number;
  };
  /**
   * The character constitution property is a number that represents the constitution of the character.
   */
  constitution: {
    value: number;
    modifier: number;
  };
}
export default CharacterStats;
