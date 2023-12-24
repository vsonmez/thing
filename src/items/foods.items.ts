import Consumable from "./models/consumable.type";
import ItemList from "./models/item-list.type";

const foods: ItemList<Consumable> = {
  bread: {
    type: "consumable",
    subType: "food",
    rarity: "common",
    defname: "bread",
    name: "Bread",
    price: 1.5,
    quantity: 0,
    isConsumable: true,
    isEquippable: false,
    isPurchasable: true,
    isSellable: true,
    isUsable: false,
    isEquipped: false,
    description: {
      tr: "Yemek. +5 açlık puanı kazandırır.",
      en: "Food. Provides +5 hunger points.",
    },
    hungerPointGain: 5,
  },
};
export default foods;
