import Character from "../character/models/character.class";
/**
 * This code defines a function called createCharacter that takes a name parameter of type string. Inside the function, it creates a new instance of a Character class with an empty string as the argument, and then returns it.
 */
const createCharacter = (
  name: string = "",
  renew?: {
    dex: number;
    str: number;
    cons: number;
    hp: number;
  }
) => {
  let newCharacter = new Character(name, renew);
  return newCharacter;
};
export default createCharacter;
