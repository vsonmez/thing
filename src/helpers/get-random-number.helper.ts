/**
 * This code defines a function called getRandomNumber that generates a random number between min and max (inclusive). If no min and max values are provided, it generates a random number between 1 and 100.
 */
const getRandomNumber = (min: number = 1, max: number = 100) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export default getRandomNumber;
