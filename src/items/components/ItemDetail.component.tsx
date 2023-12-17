import React from "react";
import Item from "../models/item-global.type";
import Helpers from "../../helpers/index.helpers";
import { useTranslation } from "react-i18next";
/**
 * It renders a div element with a flex layout and displays some information about the item. If the item is an armor, it displays the defense value. If the item is a weapon, it displays the damage range and critical damage multiplier.
 */
const ItemDetail = ({ item }: { item: Item }) => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-start">
      {Helpers.isItemArmor(item) && (
        <small>
          {t("Defense")}: +{item.defense}
        </small>
      )}
      {Helpers.isItemWeapon(item) && (
        <small>
          {t("Damage Range")}: 1-{item.damage}
        </small>
      )}
      {Helpers.isItemWeapon(item) && (
        <small>
          {t("Critical")}: x{item.critical} {t("Damage").toLowerCase()}
        </small>
      )}
    </div>
  );
};

export default React.memo(ItemDetail);
