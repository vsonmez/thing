import CharacterStats from "./character-stats.class";
import Helpers from "../../helpers/index.helpers";
/**
 * This class definition represents a character in a game.
 * @constructor
 * It generates random values for health, strength (str), dexterity (dex), and constitution (cons). It then checks if these values are less than 10 and assigns 10 to them if they are. It calculates stat modifiers for strength, dexterity, and constitution. Finally, it assigns values to the properties of the stats object, such as health, attack, defense, dexterity, strength, and constitution.
 */
class Character {
  stats: CharacterStats;
  name: string;
  level: number = 1;
  experience: number = 0;
  gold: number;
  constructor(name: string) {
    this.name = name;
    this.gold = 100;
    // Generate a random number between 1 and 10 for the "health" variable
    const health = Helpers.getRandomNumber(1, 10);

    // Generate a random number between 5 and 18 for the "str" variable
    let str = Helpers.getRandomNumber(5, 18);

    // Generate a random number between 5 and 18 for the "dex" variable
    let dex = Helpers.getRandomNumber(5, 18);

    // Generate a random number between 5 and 18 for the "cons" variable
    let cons = Helpers.getRandomNumber(5, 18);

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
