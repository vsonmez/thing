import ItemBase from "./item-base.type";

type Consumable = {
  description: {
    tr: string;
    en: string;
  };
  hungerPointGain?: number;
} & ItemBase;
export default Consumable;
