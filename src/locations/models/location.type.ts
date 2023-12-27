import CityArea from "./area.type";
import Dungeon from "./dungeon.type";

type Location = {
  description: {
    tr: string;
    en: string;
  };
  name: string;
  id: string;
  areas?: {
    [key: string]: CityArea;
  };
  dungeons?: {
    [key: string]: Dungeon;
  };
};
export default Location;
