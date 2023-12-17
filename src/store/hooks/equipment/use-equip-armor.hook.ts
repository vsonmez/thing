import { useCallback } from "react";
import AppStore from "../../index.store";
import Armor from "../../../items/models/armor.type";
import EquipmentStore from "../../equipment.store";
import useCharacterDefense from "../character/use-character-defense.hook";
import useInventory from "../inventory/use-inventory.hook";
import { useTranslation } from "react-i18next";
import useMessagesStore from "../message/use-message-store";
/**
 * This code snippet defines a custom hook called useEquipArmor. It returns an object that contains three properties: 
 * - equippedArmor,
 * - equipArmor,
 * - unEquipArmor.

The equippedArmor property represents the defense of the character.

The equipArmor function is used to set the defense of the character. It takes an armor parameter and updates the character's defense by dispatching an action to the EquipmentStore, calling the increaseDefense function, and setting the isEquipped state using the setIsEquipped function.

The unEquipArmor function is used to remove the defense of the character. It decreases the character's defense by dispatching an action to the EquipmentStore, calling the decreaseDefense function, and setting the isEquipped state to false using the setIsEquipped function.

The useEquipArmor hook utilizes other custom hooks such as useInventory and useCharacterDefense to manage the state and actions related to inventory and character defense.
 */
const useEquipArmor = () => {
  const { addMessage } = useMessagesStore();
  const { t } = useTranslation();
  const dispatch = AppStore.useAppDispatch();
  const equippedArmor = AppStore.useAppSelector(EquipmentStore.select.armor);
  const { setIsEquipped } = useInventory();
  const { decreaseDefense, increaseDefense } = useCharacterDefense();

  const unEquipArmor = useCallback(() => {
    decreaseDefense(equippedArmor.defense);
    setIsEquipped({ defname: equippedArmor.defname, isEquipped: false });
    dispatch(EquipmentStore.actions.unEquipArmor());
    addMessage(`${t("Unequipped")}: ${equippedArmor.name}`);
  }, [dispatch, equippedArmor, setIsEquipped, decreaseDefense]);

  const equipArmor = useCallback(
    (armor: Armor) => {
      if (equippedArmor) {
        unEquipArmor();
      }
      dispatch(EquipmentStore.actions.equipArmor(armor));
      increaseDefense(armor.defense);
      setIsEquipped({ defname: armor.defname, isEquipped: true });
    },
    [dispatch, equippedArmor, unEquipArmor, increaseDefense, setIsEquipped]
  );

  return {
    /** The equippedArmor property is a number that represents the defense of the character. */
    equippedArmor,
    /** The equipArmor function sets the defense of the character. */
    equipArmor,
    /** The unEquipArmor function removes the defense of the character. */
    unEquipArmor,
  };
};

export default useEquipArmor;
