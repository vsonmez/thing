import DungeonEventReturn from "../../dungeons/models/dungeon-event-return.type";
import Trap from "../../dungeons/traps/models/trap.type";
import Container from "../../items/models/container.type";
import Item from "../../items/models/item-global.type";
import Monster from "../../monsters/models/monster.type";

export type DungeonRewards = {
  common: {
    [key: string]: number | Item;
  };
  uncommon: {
    [key: string]: number | Item;
  };
  rare: {
    [key: string]: number | Item;
  };
  epic: {
    [key: string]: number | Item;
  };
  legendary: {
    [key: string]: number | Item;
  };
  mythic: {
    [key: string]: number | Item;
  };
};
type Dungeon = {
  name: string;
  id: string;
  description: {
    tr: string;
    en: string;
  };
  monsters?: {
    list: Monster[];
    amount: number;
    possibility: number;
    boss: Monster[];
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
    list: Container[];
    amount: number;
    possibility: number;
  };
  rewards?: DungeonRewards;
};
export default Dungeon;
