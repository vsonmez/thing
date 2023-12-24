import Trap from "../dungeons/traps/models/trap.type";
import getRandomNumber from "./get-random-number.helper";

const trapDifficultyCheck = (trap: Trap) => {
  const trapDifficulty = trap.difficulty;
  const randomNumber = getRandomNumber();
  if (trapDifficulty >= randomNumber) {
    return true;
  }
  return false;
};
export default trapDifficultyCheck;
