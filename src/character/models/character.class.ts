import CharacterStats from "./character-stats.class";
import Helpers from "../../helpers/index.helpers";
import getStatPoint from "../../helpers/get-stat-point.helper";
/**
 * This class definition represents a character in a game.
 * @constructor
 * It generates random values for health, strength (str), dexterity (dex), and constitution (cons). It then checks if these values are less than 10 and assigns 10 to them if they are. It calculates stat modifiers for strength, dexterity, and constitution. Finally, it assigns values to the properties of the stats object, such as health, attack, defense, dexterity, strength, and constitution.
 */
class Character {
  stats: CharacterStats;
  name: string;
  level: number = 0;
  experience: number = 0;
  gold: number;
  location: string = "eldorath";
  hunger: number = 100;
  constructor(name: string) {
    this.name = name;
    this.gold = 100;
    /**
     * Generate random values for strength (str), dexterity (dex), and constitution (cons)
     */
    const stats = [getStatPoint(), getStatPoint(), getStatPoint()];
    /**
     * Sort the stats in ascending order
     */
    stats.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    // Generate a random number between 1 and 10 for the "health" variable
    const health = Helpers.getRandomNumber(1, 10);
    /**
     * Assign the sorted stats to the "str", "dex", and "cons" variables
     */
    let str = stats[2];

    let dex = stats[1];

    let cons = stats[0];

    // Check if str is less than 10
    // If it is, assign 10 to str; otherwise, leave it unchanged
    str = str < 10 ? 10 : str;

    // Check if dex is less than 10
    // If it is, assign 10 to dex; otherwise, leave it unchanged
    dex = dex < 10 ? 10 : dex;

    // Check if cons is less than 10
    // If it is, assign 10 to cons; otherwise, leave it unchanged
    cons = cons < 10 ? 10 : cons;

    // Calculate the stat modifier for strength
    const strModifier = Math.round(Helpers.calculateStatModifier(str));

    // Calculate the stat modifier for dexterity
    const dexModifier = Math.round(Helpers.calculateStatModifier(dex));

    // Calculate the stat modifier for constitution
    const consModifier = Math.round(Helpers.calculateStatModifier(cons));

    this.stats = {
      health: {
        current: Math.round(health + consModifier),
        max: Math.round(health + consModifier),
        regen: 1,
      },
      // Calculate the attack value based on the strModifier
      // and round it to the nearest whole number
      attack: Math.round(1 + strModifier),
      // Calculate defense based on dexModifier
      // and round it to the nearest whole number
      defense: Math.round(10 + dexModifier),
      damage: 0,
      dexterity: {
        value: dex,
        modifier: dexModifier,
      },
      strength: {
        value: str,
        modifier: strModifier,
      },
      constitution: {
        value: cons,
        modifier: consModifier,
      },
    };
  }
}
export default Character;
