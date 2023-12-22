import DungeonEventReturn from "../models/dungeon-event-return.type";

const movingWalls = (): DungeonEventReturn => {
  return {
    message: "Dungeon has been reset",
    event: "resetDungeon",
  };
};
export default movingWalls;
