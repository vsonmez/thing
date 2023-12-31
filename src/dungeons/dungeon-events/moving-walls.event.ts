import monsters from "../../monsters/index.monsters";
import DungeonEventReturn from "../models/dungeon-event-return.type";

const movingWalls = (): DungeonEventReturn => {
  return {
    message: "Dungeon has been reset. Pack of monsters appeared",
    event: "monsterEvent",
    monster: {
      ...monsters.packOfCrystalFairies,
    },
  };
};
export default movingWalls;
