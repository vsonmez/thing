import CharacterStats from "./character-stats.class";
import Helpers from "../../helpers/index.helpers";

class Character {
  stats: CharacterStats;
  name: string;
  level: number = 0;
  experience: number = 0;
  gold: number;
  location: string = "eldorath";
  area: string = "market";
  hunger: number = 100;
  isInDungeon: boolean = false;
  currentDungeon: string;
  constructor(
    name: string,
    stats: {
      str: number;
      dex: number;
      cons: number;
      health?: number;
    }
  ) {
    this.name = name;
    this.gold = 100;
    const strModifier = Helpers.calculateStatModifier(stats.str);
    const dexModifier = Helpers.calculateStatModifier(stats.dex);
    const consModifier = Helpers.calculateStatModifier(stats.cons);
    const healthDice = Helpers.getRandomNumber(3, 10);
    const health = stats.health || (healthDice < 5 ? 5 : healthDice) + consModifier;

    this.stats = {
      health: {
        current: health,
        max: health,
        regen: 1,
      },
      attack: Math.round(1 + strModifier),
      defense: Math.round(10 + Helpers.calculateStatModifier(stats.dex)),
      damage: 0,
      dexterity: {
        value: stats.dex,
        modifier: dexModifier,
      },
      strength: {
        value: stats.str,
        modifier: strModifier,
      },
      constitution: {
        value: stats.cons,
        modifier: consModifier,
      },
    };
  }
}
export default Character;
