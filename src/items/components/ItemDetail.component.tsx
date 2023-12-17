import React from "react";
import Item from "../models/item-global.type";
import Helpers from "../../helpers/index.helpers";
/**
 * It renders a div element with a flex layout and displays some information about the item. If the item is an armor, it displays the defense value. If the item is a weapon, it displays the damage range and critical damage multiplier.
 */
const ItemDetail = ({ item }: { item: Item }) => {
  return (
    <div className="flex flex-col items-start">
      {Helpers.isItemArmor(item) && <small>Defense: +{item.defense}</small>}
      {Helpers.isItemWeapon(item) && <small>Damage Range: 1-{item.damage}</small>}
      {Helpers.isItemWeapon(item) && <small>Critical: x{item.critical} damage</small>}
    </div>
  );
};

export default React.memo(ItemDetail);
