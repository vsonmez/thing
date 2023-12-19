import getRandomNumber from "./get-random-number.helper";

const getStatPoint = () => {
  const stat = [getRandomNumber(1, 6), getRandomNumber(1, 6), getRandomNumber(1, 6), getRandomNumber(1, 6)];
  stat.sort((a, b) => {
    if (a < b) {
      return -1;
    }
    if (a > b) {
      return 1;
    }
    return 0;
  });
  stat.shift();
  const total = stat.reduce((acc, cur) => acc + cur, 0);
  return total;
};
export default getStatPoint;
