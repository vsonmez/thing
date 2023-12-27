import Character from "../character/models/character.class";
import Monster from "../monsters/models/monster.type";
import getRandomNumber from "./get-random-number.helper";

const createMonster = (monster: Monster, isBoss?: boolean): Monster => {
  const character = JSON.parse(localStorage.getItem("character")) as Character;
  if (isBoss) {
    return {
      ...monster,
      hp: getRandomNumber(5, monster.hp),
      defense: getRandomNumber(5, character.stats.defense - 1),
      damage: getRandomNumber(1, character.stats.damage - 1),
      attack: getRandomNumber(1, character.stats.attack - 1),
    };
  }
  return {
    ...monster,
    hp: getRandomNumber(5, monster.hp),
  };
};
export default createMonster;
