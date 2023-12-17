import ItemBase from "../items/models/item-base.type";
import Weapon from "../items/models/weapon.type";

const isItemWeapon = (item: ItemBase): item is Weapon => {
  return (item as Weapon).damage !== undefined;
};
export default isItemWeapon;
