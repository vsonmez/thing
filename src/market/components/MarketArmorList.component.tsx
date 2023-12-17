import React, { useRef } from "react";
import Items from "../../items/index.items";
import ItemImageComponent from "../../items/components/ItemImage.component";
import Armor from "../../items/models/armor.type";
import BuyButtonComponent from "./BuyButton.component";
import ItemDetailComponent from "../../items/components/ItemDetail.component";
/**
 *  It renders a list of armor items that can be purchased.

The component uses the useRef hook to create a reference to an array of armor items from the Items.armors object.

Inside the component's JSX, it maps over the armorsList array and renders a list item for each armor item that is marked as purchasable. Each list item displays the armor's name, defense value, and a "Buy" button.
 */
const MarketArmorList: React.FC = () => {
  const armorsList = useRef(Object.values(Items.armors) as Armor[]);

  return (
    <ul>
      {armorsList.current.map((armor) => {
        if (!armor.isPurchasable) {
          return null;
        }
        return (
          <li key={armor.defname} className="flex p-1 gap-1 items-center">
            <ItemImageComponent itemDefName={armor.defname}></ItemImageComponent>
            <div className="flex flex-col items-start">
              <span>{armor.name}</span>
              <ItemDetailComponent item={armor}></ItemDetailComponent>
              <BuyButtonComponent item={armor}></BuyButtonComponent>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default React.memo(MarketArmorList);
