import React, { useCallback, useMemo, useRef, useState } from "react";
import useCharacterGold from "../../store/hooks/character/use-character-gold.hook";
import useInventory from "../../store/hooks/inventory/use-inventory.hook";
import Item from "../../items/models/item-global.type";
import ButtonComponent from "../../shared-components/Button.component";
import CurrencyComponent from "../../shared-components/Currency.component";
import { useTranslation } from "react-i18next";
import useMessagesStore from "../../store/hooks/message/use-message-store";
import SelectComponent from "../../shared-components/inputs/Select.component";
import Constants from "../../constants/index.constants";
/**
 * It receives an item object as a prop, which should have a price property. The component uses hooks (useCharacterGold and useInventory) to get access to the character's gold and inventory functionality.

Inside the component, it creates a reference to the item.price value using the useRef hook. It also defines a callback function onBuy using the useCallback hook. This function checks if the price.current (current value of the price reference) is greater than the characterGold. If it is, it logs an error and returns early. Otherwise, it decreases the characterGold by the price.current and adds the item to the inventory using addItemToInventory.

The component renders a ButtonComponent with an onClick event handler set to onBuy. The button displays the text "Buy" and the price.current value followed by "gp" (gold pieces) inside a CurrencyComponent.

Overall, this code represents a button that allows the user to buy an item if they have enough gold.
 */
const BuyButton = ({ item }: { item: Item }) => {
  const { addMessage } = useMessagesStore();
  const { t } = useTranslation();
  const { characterGold, decreaseGold } = useCharacterGold();
  const { addItemToInventory } = useInventory();
  const price = useRef(item.price);
  const [quantity, setQuantity] = useState(1);
  const buyOptions = useMemo(() => {
    const filteredOptions = Constants.buyOptions.filter((option) => {
      if (option.value * price.current > characterGold) {
        return false;
      }
      return true;
    });
    return filteredOptions;
  }, [price, characterGold]);

  const onBuyOptionChange = useCallback(
    (value: number) => {
      setQuantity(value);
    },
    [setQuantity]
  );

  const onBuy = useCallback(() => {
    if (price.current > characterGold) {
      addMessage("Not enough gold", "error");
      return;
    }
    const confirm = window.confirm(
      `${t("Are you sure you want to buy")}: ${item.name} ${price.current * Number(quantity)} ${t("Gold")}?`
    );
    if (confirm) {
      decreaseGold(price.current * Number(quantity));
      addItemToInventory({
        ...item,
        quantity: Number(quantity),
      });
      addMessage(`${t("Bought")}: ${item.name} ${price.current * Number(quantity)} ${t("Gold")}`, "success");
    }
  }, [decreaseGold, price, addItemToInventory, item, characterGold, addMessage, t, quantity]);
  return (
    <div className="flex gap-2 items-baseline">
      {buyOptions.length > 0 && <SelectComponent onChange={onBuyOptionChange} options={buyOptions}></SelectComponent>}
      <ButtonComponent
        disabled={price.current > characterGold}
        onClick={onBuy}
        className="flex gap-1 items-center mt-1"
      >
        <>
          <span>{t("Buy")}</span>
          <small>
            <i>
              <CurrencyComponent value={price.current}></CurrencyComponent> {t("Gold")}
            </i>
          </small>
        </>
      </ButtonComponent>
    </div>
  );
};

export default React.memo(BuyButton);
