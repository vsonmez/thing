import ItemList from "./models/item-list.type";

const foods: ItemList = {
  bread: {
    type: "consumable",
    defname: "bread",
    name: "Bread",
    price: 1.5,
    quantity: 0,
    isConsumable: true,
    isEquippable: false,
    isPurchasable: true,
    isSellable: true,
    isUsable: false,
    description: {
      tr: "Yemek. +5 açlık puanı kazandırır.",
      en: "Food. Provides +5 hunger points.",
    },
    hungerPointGain: 5,
  },
};
export default foods;
