import ItemBase from "./item-base.type";
import Item from "./item-global.type";

type Container = {
  description: {
    tr: string;
    en: string;
  };
  content: Item[];
  difficulty?: number;
} & ItemBase;
export default Container;
