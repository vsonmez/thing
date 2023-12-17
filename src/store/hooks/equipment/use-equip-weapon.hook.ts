import { useCallback } from "react";
import EquipmentStore from "../../equipment.store";
import AppStore from "../../index.store";
import Weapon from "../../../items/models/weapon.type";
import useInventory from "../inventory/use-inventory.hook";
import useCharacterDamage from "../character/use-character-damage.hook";

/**
 * This code snippet defines a custom React hook called useEquipWeapon. This hook provides methods to get and set the hand weapon of a character.

The useEquipWeapon hook returns three values:

- equippedWeapon: This is a property that represents the hand weapon of the character.
- equipWeapon: This is a function that sets the hand weapon of the character.
- unEquipWeapon: This is a function that removes the hand weapon of the character.

The hook internally uses other custom hooks like useInventory and useCharacterDamage to manage the state and perform related actions.
 */
const useEquipWeapon = () => {
  const dispatch = AppStore.useAppDispatch();
  const equippedWeapon = AppStore.useAppSelector(EquipmentStore.select.hand);
  const { setIsEquipped } = useInventory();
  const { decreaseDamage, increaseDamage } = useCharacterDamage();

  const unEquipWeapon = useCallback(() => {
    decreaseDamage(equippedWeapon.damage);
    setIsEquipped({ defname: equippedWeapon.defname, isEquipped: false });
    dispatch(EquipmentStore.actions.unEquipWeapon());
  }, [dispatch, equippedWeapon, setIsEquipped, decreaseDamage]);

  const equipWeapon = useCallback(
    (weapon: Weapon) => {
      if (equippedWeapon) {
        unEquipWeapon();
      }
      dispatch(EquipmentStore.actions.equipWeapon(weapon));
      increaseDamage(weapon.damage);
      setIsEquipped({ defname: weapon.defname, isEquipped: true });
    },
    [dispatch, unEquipWeapon, setIsEquipped, increaseDamage, equippedWeapon]
  );

  return {
    /** The equippedWeapon property is a Weapon object that represents the hand weapon of the character. */
    equippedWeapon,
    /** The equipWeapon function is a function that sets the hand weapon of the character. */
    equipWeapon,
    /** The unEquipWeapon function is a function that removes the hand weapon of the character. */
    unEquipWeapon,
  };
};

export default useEquipWeapon;
