import Monster from "../monsters/models/monster.type";
import getRandomNumber from "./get-random-number.helper";

const createMonster = (monster: Monster): Monster => {
  return {
    ...monster,
    hp: getRandomNumber(5, monster.hp),
  };
};
export default createMonster;
