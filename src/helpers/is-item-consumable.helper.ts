import Consumable from "../items/models/consumable.type";
import ItemBase from "../items/models/item-base.type";
/**
 * This code defines a TypeScript function isItemConsumable that takes an argument item of type ItemBase. It returns a boolean value indicating whether the item is of type "consumable". The item is Consumable syntax is a type predicate that allows TypeScript to narrow down the type of item within the function body.
 */
const isItemConsumable = (item: ItemBase): item is Consumable => {
  return item.type === "consumable";
};
export default isItemConsumable;
