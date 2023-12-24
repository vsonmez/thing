import Items from "./index.items";
import Container from "./models/container.type";
import ItemList from "./models/item-list.type";

const chests: ItemList<Container> = {
  commonChest: {
    type: "container",
    rarity: "common",
    defname: "commonChest",
    name: "Chest",
    price: 0,
    quantity: 0,
    isConsumable: false,
    isEquippable: false,
    isPurchasable: false,
    isSellable: false,
    isUsable: false,
    isEquipped: false,
    description: {
      tr: "Chest. Empty.",
      en: "Chest. Empty.",
    },
    difficulty: 13,
    content: [
      {
        ...Items.weapons.dagger,
        quantity: 1,
      },
      {
        ...Items.armors.paddedArmor,
      },
      {
        ...Items.consumables.lesserHealPotion,
      },
      {
        ...Items.consumables.bread,
      },
    ],
  },
  uncommonChest: {
    type: "container",
    rarity: "uncommon",
    defname: "uncommonChest",
    name: "Chest",
    price: 0,
    quantity: 0,
    isConsumable: false,
    isEquippable: false,
    isPurchasable: false,
    isSellable: false,
    isUsable: false,
    isEquipped: false,
    difficulty: 15,
    description: {
      tr: "Sandık.",
      en: "Chest.",
    },
    content: [],
  },
};
export default chests;
