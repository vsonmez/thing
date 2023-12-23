import React, { useRef } from "react";
import Items from "../../items/index.items";
import ItemImageComponent from "../../items/components/ItemImage.component";
import ItemDetailComponent from "../../items/components/ItemDetail.component";
import BuyButtonComponent from "./BuyButton.component";
import Item from "../../items/models/item-global.type";

const MarketConsumableList = () => {
  const consumables = useRef(Object.values(Items.consumables) as Item[]);
  return (
    <ul>
      {consumables.current.map((consumable) => (
        <li key={consumable.defname} className="flex p-1 gap-1 items-center">
          <ItemImageComponent itemDefName={consumable.defname}></ItemImageComponent>
          <div className="flex flex-col items-start">
            <span>{consumable.name}</span>
            <ItemDetailComponent item={consumable}></ItemDetailComponent>
            <BuyButtonComponent item={consumable}></BuyButtonComponent>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(MarketConsumableList);
