import Armor from "./armor.type";
import Weapon from "./weapon.type";
/**
 * Defines a type called Item that can be either a Weapon or an Armor.
 */
type Item = Weapon | Armor;
export default Item;
