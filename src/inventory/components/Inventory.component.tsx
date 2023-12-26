import React from "react";
import useInventory from "../../store/hooks/inventory/use-inventory.hook";
import ItemImageComponent from "../../items/components/ItemImage.component";
import ItemDetailComponent from "../../items/components/ItemDetail.component";
import InventoryButtonsComponent from "./InventoryButtons.component";
import EquipmentComponent from "../../equipment/components/Equipment.component";
import { useTranslation } from "react-i18next";
import ItemNameComponent from "../../items/components/ItemName.component";
/**
 *  It uses the useInventory hook to fetch an inventory object. The component renders a list of items from the inventory object.

Each item is rendered as a list item (li) with its name and quantity displayed. The item also includes an image, some details, and buttons for inventory management.

Overall, this code snippet is rendering an inventory view with items and their details.
 */
const Inventory = () => {
  const { t } = useTranslation();
  const { inventory } = useInventory();
  return (
    <>
      <EquipmentComponent></EquipmentComponent>
      <div>
        <h1 className="mb-2">{t("Inventory")}</h1>
        <ul className="flex gap-4 flex-wrap flex-col sm:flex-row">
          {Object.values(inventory).map((item) => (
            <li key={item.defname} className="border border-gray-400 rounded p-2">
              <span>
                <ItemNameComponent item={item}></ItemNameComponent> - ({item.quantity})
              </span>
              <div className="flex p-1 gap-1 items-center">
                <ItemImageComponent width={72} itemDefName={item.defname}></ItemImageComponent>
                <div>
                  <ItemDetailComponent item={item}></ItemDetailComponent>
                  <InventoryButtonsComponent item={item}></InventoryButtonsComponent>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default React.memo(Inventory);
