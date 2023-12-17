import Armor from "../items/models/armor.type";
import ItemBase from "../items/models/item-base.type";

const isItemArmor = (item: ItemBase): item is Armor => {
  return (item as Armor).defense !== undefined;
};
export default isItemArmor;
