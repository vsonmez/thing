import ItemBase from "../items/models/item-base.type";
import Weapon from "../items/models/weapon.type";
/**
 * This code snippet defines a function called isItemWeapon that takes an argument item of type ItemBase. It checks if item is of type Weapon by using the item is Weapon type guard. If item has a property called damage, the function returns true, indicating that item is a weapon. Otherwise, it returns false.
 */
const isItemWeapon = (item: ItemBase): item is Weapon => {
  return (item as Weapon).damage !== undefined;
};
export default isItemWeapon;
