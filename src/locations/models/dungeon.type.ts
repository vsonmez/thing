import DungeonEventReturn from "../../dungeons/models/dungeon-event-return.type";
import DungeonSecretReturn from "../../dungeons/models/dungeon-secret-return.type";
import Trap from "../../dungeons/traps/models/trap.type";
import Item from "../../items/models/item-global.type";

type Dungeon = {
  name: string;
  id: string;
  description: {
    tr: string;
    en: string;
  };
  monsters?: {
    list: any[];
    amount: number;
    possibility: number;
    boss: any[];
    bossAmount: number;
  };
  traps?: {
    list: Trap[];
    amount: number;
    possibility: number;
  };
  events?: {
    list: DungeonEventReturn[];
    amount: number;
    possibility: number;
  };
  secrets?: {
    list: DungeonSecretReturn[];
    amount: number;
    possibility: number;
  };
  rewards?: {
    common: {
      [key: string]: number | Item;
    };
    uncommon: {};
    rare: {};
    epic: {};
    legendary: {};
    mythic: {};
  };
};
export default Dungeon;
