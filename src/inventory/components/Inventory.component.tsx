import React from "react";
import useInventory from "../../store/hooks/inventory/use-inventory.hook";
import ItemImageComponent from "../../items/components/ItemImage.component";
import ItemDetailComponent from "../../items/components/ItemDetail.component";
import InventoryButtonsComponent from "./InventoryButtons.component";
import EquipmentComponent from "../../equipment/components/Equipment.component";
/**
 *  It uses the useInventory hook to fetch an inventory object. The component renders a list of items from the inventory object.

Each item is rendered as a list item (li) with its name and quantity displayed. The item also includes an image, some details, and buttons for inventory management.

Overall, this code snippet is rendering an inventory view with items and their details.
 */
const Inventory = () => {
  const { inventory } = useInventory();
  return (
    <>
      <EquipmentComponent></EquipmentComponent>
      <div>
        <h1>Inventory</h1>
        <ul className="flex gap-4">
          {Object.values(inventory).map((item) => (
            <li key={item.defname}>
              <span>
                {item.name} - ({item.quantity})
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
