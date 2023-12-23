import ItemBase from "./item-base.type";
/**
 * This type definition creates a Weapon type that extends the ItemBase type and adds three properties: damage, isEquipped, and critical.
 */
type Weapon = {
  damage: number;
  critical: number;
} & ItemBase;
export default Weapon;
