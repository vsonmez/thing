import { useCallback } from "react";
import AppStore from "../../index.store";
import InventoryStore from "../../inventory.store";
import Item from "../../../items/models/item-global.type";

/**
 * This code snippet defines a custom React hook called useInventory that provides access to an inventory store. The hook returns an object with four properties:

- inventory: Represents the current state of the inventory.
- addItemToInventory: A function that adds an item to the inventory.
- removeItemFromInventory: A function that removes an item from the inventory.
- setIsEquipped: A function that sets the isEquipped property of an item in the inventory.

The code uses the useCallback hook to memoize the functions and the useAppDispatch and useAppSelector hooks from the AppStore and InventoryStore to access the dispatch and select functions for the inventory store.
 */
const useInventory = () => {
  const dispatch = AppStore.useAppDispatch();
  const inventory = AppStore.useAppSelector(InventoryStore.select.inventory);

  const addItemToInventory = useCallback(
    (item: Item) => {
      dispatch(InventoryStore.actions.addItemToInventory(item));
    },
    [dispatch]
  );
  const removeItemFromInventory = useCallback(
    (item: Item) => {
      dispatch(InventoryStore.actions.removeItemFromInventory(item.defname));
    },
    [dispatch]
  );

  const setIsEquipped = useCallback(
    (payload: { defname: string; isEquipped: boolean }) => {
      dispatch(InventoryStore.actions.setIsEquipped(payload));
    },
    [dispatch]
  );

  return {
    /**
     * The inventory of the player.
     */
    inventory,
    /**
     * Adds an item to the inventory.
     * @param item The item to add.
     */
    addItemToInventory,
    /**
     * Removes an item from the inventory.
     * @param item The item to remove.
     */
    removeItemFromInventory,
    /**
     * Sets the isEquipped property of an item in the inventory.
     */
    setIsEquipped,
  };
};

export default useInventory;
