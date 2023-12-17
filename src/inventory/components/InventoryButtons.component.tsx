import React from "react";
import Item from "../../items/models/item-global.type";
import SellButtonComponent from "./SellButton.component";
import EquipButtonComponent from "./EquipButton.component";
/**
 * This code snippet defines a functional component called InventoryButtons, which takes an item object as a prop.
 *
 * It renders a div element with two child components based on the properties of the item object.
 *
 * If the item is equippable and not currently equipped, it renders an EquipButtonComponent with the item prop.
 *
 * If the item is sellable, it renders a SellButtonComponent with the item prop.
 */
const InventoryButtons = ({ item }: { item: Item }) => {
  return (
    <div className="flex gap-1 mt-1">
      {item.isEquippable && item.isEquipped === false && <EquipButtonComponent item={item}></EquipButtonComponent>}
      {item.isSellable && item.isEquipped === false && <SellButtonComponent item={item}></SellButtonComponent>}
    </div>
  );
};

export default React.memo(InventoryButtons);
