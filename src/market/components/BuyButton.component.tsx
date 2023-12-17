import React, { useCallback, useRef } from "react";
import useCharacterGold from "../../store/hooks/character/use-character-gold.hook";
import useInventory from "../../store/hooks/inventory/use-inventory.hook";
import Item from "../../items/models/item-global.type";
import ButtonComponent from "../../shared-components/Button.component";
import CurrencyComponent from "../../shared-components/Currency.component";
/**
 * It receives an item object as a prop, which should have a price property. The component uses hooks (useCharacterGold and useInventory) to get access to the character's gold and inventory functionality.

Inside the component, it creates a reference to the item.price value using the useRef hook. It also defines a callback function onBuy using the useCallback hook. This function checks if the price.current (current value of the price reference) is greater than the characterGold. If it is, it logs an error and returns early. Otherwise, it decreases the characterGold by the price.current and adds the item to the inventory using addItemToInventory.

The component renders a ButtonComponent with an onClick event handler set to onBuy. The button displays the text "Buy" and the price.current value followed by "gp" (gold pieces) inside a CurrencyComponent.

Overall, this code represents a button that allows the user to buy an item if they have enough gold.
 */
const BuyButton = ({ item }: { item: Item }) => {
  const { characterGold, decreaseGold } = useCharacterGold();
  const { addItemToInventory } = useInventory();
  const price = useRef(item.price);
  const onBuy = useCallback(() => {
    if (price.current > characterGold) {
      console.error("not enough gold");
      return;
    }
    decreaseGold(price.current);
    addItemToInventory(item);
  }, [decreaseGold, price, addItemToInventory, item, characterGold]);
  return (
    <ButtonComponent onClick={onBuy} className="flex gap-1 items-center mt-1">
      <>
        <span>Buy</span>
        <small>
          <i>
            <CurrencyComponent value={price.current}></CurrencyComponent>gp
          </i>
        </small>
      </>
    </ButtonComponent>
  );
};

export default React.memo(BuyButton);
