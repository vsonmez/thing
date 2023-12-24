import ItemList from "./models/item-list.type";
import Helpers from "../helpers/index.helpers";
import armors from "./armors.items";
import weapons from "./weapon.items";
import foods from "./foods.items";
import potions from "./potions.items";
/**
 * This code snippet defines a constant variable Items that has two properties:
 * - weapons,
 * - armors.
 *
 * Each property is assigned a value of an object literal.
 */
const Items: {
  weapons: ItemList;
  armors: ItemList;
  consumables: ItemList;
} = {
  weapons: {
    ...Helpers.makeImmutable(weapons),
  },
  armors: {
    ...Helpers.makeImmutable(armors),
  },
  consumables: {
    ...Helpers.makeImmutable(foods),
    ...Helpers.makeImmutable(potions),
  },
};
export default Items;
