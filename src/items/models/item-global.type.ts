import Armor from "./armor.type";
import Consumable from "./consumable.type";
import Container from "./container.type";
import Weapon from "./weapon.type";
/**
 * Defines a type called Item that can be either a Weapon or an Armor.
 */
type Item = Weapon | Armor | Consumable | Container;
export default Item;
