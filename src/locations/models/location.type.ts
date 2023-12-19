import Dungeon from "./dungeon.type";

type Location = {
  description: {
    tr: string;
    en: string;
  };
  name: string;
  id: string;
  dungeons?: {
    [key: string]: Dungeon;
  };
};
export default Location;
