import ItemBase from "./item-base.type";
/**
 * This definition creates a type called "Armor" that extends another type called "ItemBase". The "Armor" type has two properties: "defense" (a number) and "isEquipped" (a boolean).
 */
type Armor = {
  defense: number;
} & ItemBase;
export default Armor;
