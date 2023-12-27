import monsters from "../../monsters/index.monsters";
import DungeonEventReturn from "../models/dungeon-event-return.type";

const monsterEvent = (): DungeonEventReturn => {
  return {
    message: "Pack of monsters appeared",
    event: "monsterEvent",
    monster: {
      ...monsters.packOfCrystalFairies,
    },
  };
};
export default monsterEvent;
