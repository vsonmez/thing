import React, { useRef } from "react";
import Items from "../../items/index.items";
import ItemImageComponent from "../../items/components/ItemImage.component";
import Weapon from "../../items/models/weapon.type";
import BuyButtonComponent from "./BuyButton.component";
import ItemDetailComponent from "../../items/components/ItemDetail.component";
import ItemNameComponent from "../../items/components/ItemName.component";
/**
 * It renders a list of weapons by mapping over an array of weapons and rendering a list item for each weapon.
 *
 * The weapons are retrieved from the Items.weapons object using the Object.values() method.
 *
 * The useRef() hook is used to store the weapons array and make it accessible across renders.
 *
 * The list item contains the weapon's image, name, details, and a buy button.
 *
 * If a weapon is not purchasable, it is not rendered.
 */
const MarketWeaponList = () => {
  const weapons = useRef(Object.values(Items.weapons) as Weapon[]);
  return (
    <ul>
      {weapons.current.map((weapon) => {
        if (!weapon.isPurchasable) {
          return null;
        }
        return (
          <li key={weapon.defname} className="flex p-1 gap-1 items-center">
            <ItemImageComponent itemDefName={weapon.defname}></ItemImageComponent>
            <div className="flex flex-col items-start">
              <ItemNameComponent item={weapon}></ItemNameComponent>
              <ItemDetailComponent item={weapon}></ItemDetailComponent>
              <BuyButtonComponent item={weapon}></BuyButtonComponent>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(MarketWeaponList);
