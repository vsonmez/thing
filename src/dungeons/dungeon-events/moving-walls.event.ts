import DungeonEventReturn from "../models/dungeon-event-return.type";

const movingWalls = (): DungeonEventReturn => {
  return {
    message: "Reset Dungeon",
    event: "resetDungeon",
  };
};
export default movingWalls;
