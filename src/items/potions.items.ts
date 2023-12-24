import Consumable from "./models/consumable.type";
import ItemList from "./models/item-list.type";

const potions: ItemList<Consumable> = {
  lesserHealPotion: {
    type: "consumable",
    subType: "potion",
    rarity: "common",
    defname: "lesserHealPotion",
    name: "Lesser Heal Potion",
    price: 100,
    quantity: 0,
    isConsumable: true,
    isEquippable: false,
    isPurchasable: true,
    isSellable: true,
    isUsable: false,
    isEquipped: false,
    description: {
      tr: "Potion. 10% iyileştirir.",
      en: "Potion. Heals 10%.",
    },
    healthPointGain: 10,
  },
  healPotion: {
    type: "consumable",
    subType: "potion",
    rarity: "common",
    defname: "healPotion",
    name: "Heal Potion",
    price: 250,
    quantity: 0,
    isConsumable: true,
    isEquippable: false,
    isPurchasable: true,
    isSellable: true,
    isUsable: false,
    isEquipped: false,
    description: {
      tr: "Potion. 25% iyileştirir.",
      en: "Potion. Heals 25%.",
    },
    healthPointGain: 25,
  },
  greaterHealPoition: {
    type: "consumable",
    subType: "potion",
    rarity: "common",
    defname: "greaterHealPoition",
    name: "Greater Heal Potion",
    price: 600,
    quantity: 0,
    isConsumable: true,
    isEquippable: false,
    isPurchasable: true,
    isSellable: true,
    isUsable: false,
    isEquipped: false,
    description: {
      tr: "Potion. 50% iyileştirir.",
      en: "Potion. Heals 50%.",
    },
    healthPointGain: 50,
  },
};
export default potions;
