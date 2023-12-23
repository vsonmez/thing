/**
 * This class definition defines a type called ItemBase that represents an item. Each method of the class has the following functionality:
 * - defname: Represents the definition name of the item.
 * - name: Represents the name of the item.
 * - price: Represents the price of the item.
 * - quantity: Represents the quantity of the item.
 * - isPurchasable: Indicates whether the item is purchasable.
 * - isSellable: Indicates whether the item is sellable.
 * - isEquippable: Indicates whether the item is equippable.
 * - isConsumable: Indicates whether the item is consumable.
 * - isUsable: Indicates whether the item is usable.
 */
type ItemBase = {
  type: "weapon" | "armor" | "consumable";
  defname: string;
  name: string;
  price: number;
  quantity: number;
  isPurchasable: boolean;
  isSellable: boolean;
  isEquippable: boolean;
  isConsumable: boolean;
  isUsable: boolean;
  isEquipped?: boolean;
};
export default ItemBase;
