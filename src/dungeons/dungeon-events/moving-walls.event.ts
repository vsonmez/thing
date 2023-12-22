import DungeonEventReturn from "../models/dungeon-event-return.type";

const movingWalls = (): DungeonEventReturn => {
  return {
    message: "",
    event: "resetDungeon",
  };
};
export default movingWalls;
