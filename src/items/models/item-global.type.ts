import Armor from "./armor.type";
import Consumable from "./consumable.type";
import ItemBase from "./item-base.type";
import Weapon from "./weapon.type";
/**
 * Defines a type called Item that can be either a Weapon or an Armor.
 */
type Item = Weapon | Armor | Consumable;
export default Item;
