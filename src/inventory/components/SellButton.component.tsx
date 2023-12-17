import React, { useCallback } from "react";
import Item from "../../items/models/item-global.type";
import ButtonComponent from "../../shared-components/Button.component";
import CurrencyComponent from "../../shared-components/Currency.component";
import useCharacterGold from "../../store/hooks/character/use-character-gold.hook";
import useInventory from "../../store/hooks/inventory/use-inventory.hook";
import useEquipWeapon from "../../store/hooks/equipment/use-equip-weapon.hook";
import { useTranslation } from "react-i18next";
/**
 * This code defines a SellButton component that takes an item object as a prop. When the button is clicked, it triggers the onSell function.

The onSell function does the following:
- It increases the user's gold by half of the item's price.
- If the item is equipped, it unequips the weapon.
- It removes the item from the user's inventory.

The component renders a button with the label "Sell" and the value of half the item's price in gold.
 */
const SellButton = ({ item }: { item: Item }) => {
  const { t } = useTranslation();
  const { unEquipWeapon } = useEquipWeapon();
  const { increaseGold } = useCharacterGold();
  const { removeItemFromInventory } = useInventory();
  const onSell = useCallback(
    (item: Item) => {
      increaseGold(item.price / 2);
      if (item.isEquipped) {
        unEquipWeapon();
      }
      removeItemFromInventory(item);
    },
    [increaseGold, removeItemFromInventory, unEquipWeapon]
  );
  return (
    <ButtonComponent onClick={() => onSell(item)} className="flex gap-1 items-center">
      <>
        <span>{t("Sell")}</span>
        <small>
          <i>
            <CurrencyComponent value={item.price / 2}></CurrencyComponent> {t("Gold")}
          </i>
        </small>
      </>
    </ButtonComponent>
  );
};

export default React.memo(SellButton);
