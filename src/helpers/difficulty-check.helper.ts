import Trap from "../dungeons/traps/models/trap.type";
import Container from "../items/models/container.type";
import getRandomNumber from "./get-random-number.helper";

const difficultyCheck = (item: Trap | Container) => {
  const trapDifficulty = item.difficulty;
  const randomNumber = getRandomNumber();
  if (trapDifficulty >= randomNumber) {
    return true;
  }
  return false;
};
export default difficultyCheck;
