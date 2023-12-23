import Armor from "../items/models/armor.type";
import ItemBase from "../items/models/item-base.type";
/**
 * This code defines a function called isItemArmor. It takes an argument item of type ItemBase. The function checks if the item is an instance of the Armor class by using the item is Armor type guard. If the item has a property called defense, the function returns true, indicating that the item is an armor. Otherwise, it returns false.
 */
const isItemArmor = (item: ItemBase): item is Armor => {
  return item.type === "armor";
};
export default isItemArmor;
