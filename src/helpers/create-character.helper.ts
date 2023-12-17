import Character from "../character/models/character.class";

const createCharacter = (name: string) => {
  let newCharacter = new Character("");
  return newCharacter;
};
export default createCharacter;
