import React, { useCallback } from "react";
import Item from "../../items/models/item-global.type";
import ButtonComponent from "../../shared-components/Button.component";
import useEquipWeapon from "../../store/hooks/equipment/use-equip-weapon.hook";
import Helpers from "../../helpers/index.helpers";
import useEquipArmor from "../../store/hooks/equipment/use-equip-armor.hook";
/**
 * This code snippet defines a functional component called EquipButton that takes an item prop of type Item.
 *
 * Inside the component, it uses the useEquipWeapon hook to get the equipWeapon function.
 *
 * It then defines an onEquip callback function that checks if the item is a weapon and calls equipWeapon with the item if it is.
 *
 * The component returns a button component with an onClick handler that calls onEquip with the item prop. The button displays the text "Equip".
 */
const EquipButton = ({ item }: { item: Item }) => {
  const { equipWeapon } = useEquipWeapon();
  const { equipArmor } = useEquipArmor();
  const onEquip = useCallback(
    (item: Item) => {
      if (Helpers.isItemWeapon(item)) {
        equipWeapon(item);
      }
      if (Helpers.isItemArmor(item)) {
        equipArmor(item);
      }
    },
    [equipWeapon, equipArmor]
  );
  return (
    <ButtonComponent onClick={() => onEquip(item)}>
      <span>Equip</span>
    </ButtonComponent>
  );
};

export default React.memo(EquipButton);
