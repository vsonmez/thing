import React, { useCallback } from "react";
import useEquipWeapon from "../../store/hooks/equipment/use-equip-weapon.hook";
import ItemImageComponent from "../../items/components/ItemImage.component";
import ButtonComponent from "../../shared-components/Button.component";
import useEquipArmor from "../../store/hooks/equipment/use-equip-armor.hook";
import { useTranslation } from "react-i18next";
/**
 * This code snippet is a React component called Equipment that renders a UI for displaying equipment information. It uses two custom hooks: useEquipWeapon and useEquipArmor.

The component renders a list of equipment items. If there is an equipped weapon and armor, it renders an item with the name, image, and an "Unequip" button. If there is no equipped weapon/armor, it renders an empty item with the text "Weapon/Armor Empty".

The component also renders an empty armor/weapon item.
 */
const Equipment = () => {
  const { t } = useTranslation();
  const { unEquipWeapon, equippedWeapon } = useEquipWeapon();
  const { unEquipArmor, equippedArmor } = useEquipArmor();
  const onUnequipWeapon = useCallback(() => {
    unEquipWeapon();
  }, [unEquipWeapon]);

  return (
    <div className="space-y-2 border-b pb-4">
      <h1>{t("Equipments")}</h1>
      <ul className="flex gap-1">
        {equippedWeapon ? (
          <li className="relative w-[64px]">
            <small className="absolute bottom-6 w-full text-center">{equippedWeapon.name}</small>
            <ItemImageComponent width={64} itemDefName={equippedWeapon.defname}></ItemImageComponent>
            <ButtonComponent onClick={onUnequipWeapon} className="mt-1 text-[12px] w-full">
              <span>{t("Unequip")}</span>
            </ButtonComponent>
          </li>
        ) : (
          <li className="relative w-[64px] h-[64px] rounded border border-gray-400">
            <small className="absolute top-0 w-full text-center opacity-70">{t("Weapon Empty")}</small>
          </li>
        )}
        {equippedArmor ? (
          <li className="relative w-[64px]">
            <small className="absolute bottom-6 w-full text-center">{equippedArmor.name}</small>
            <ItemImageComponent width={64} itemDefName={equippedArmor.defname}></ItemImageComponent>
            <ButtonComponent onClick={unEquipArmor} className="mt-1 text-[12px] w-full">
              <span>{t("Unequip")}</span>
            </ButtonComponent>
          </li>
        ) : (
          <li className="relative w-[64px] h-[64px] rounded border border-gray-400">
            <small className="absolute top-0 w-full text-center opacity-70">{t("Armor Empty")}</small>
          </li>
        )}
      </ul>
    </div>
  );
};

export default React.memo(Equipment);
