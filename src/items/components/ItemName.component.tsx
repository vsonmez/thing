import React, { useMemo } from "react";
import Item from "../models/item-global.type";

const ItemName = ({ item }: { item: Item }) => {
  const cssClass = useMemo(() => {
    switch (item.rarity) {
      case "uncommon":
        return "text-cyan-300";
      case "rare":
        return "text-indigo-300";
      case "epic":
        return "text-purple-300";
      case "legendary":
        return "text-yellow-300";
      case "mythic":
        return "text-red-300";
      default:
        break;
    }
  }, [item]);
  return <span className={cssClass}>{item.name}</span>;
};

export default React.memo(ItemName);
