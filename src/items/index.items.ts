import ItemList from "./models/item-list.type";
import Helpers from "../helpers/index.helpers";
import armors from "./armors.items";
import weapons from "./weapon.items";
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
} = {
  weapons: {
    ...Helpers.makeImmutable(weapons),
  },
  armors: {
    ...Helpers.makeImmutable(armors),
  },
};
export default Items;
