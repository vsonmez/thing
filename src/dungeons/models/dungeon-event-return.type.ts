import Monster from "../../monsters/models/monster.type";

type DungeonEventReturn = {
  message: string;
  event: string;
  monster?: Monster;
};
export default DungeonEventReturn;
