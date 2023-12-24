import ItemBase from "./item-base.type";

type Consumable = {
  description: {
    tr: string;
    en: string;
  };
  hungerPointGain?: number;
  healthPointGain?: number;
} & ItemBase;
export default Consumable;
