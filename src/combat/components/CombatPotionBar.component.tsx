import React, { useCallback, useMemo, useRef } from "react";
import useInventory from "../../store/hooks/inventory/use-inventory.hook";
import ItemImageComponent from "../../items/components/ItemImage.component";
import useCharacterHealth from "../../store/hooks/character/use-character-health.hook";
import Consumable from "../../items/models/consumable.type";
import useCombatLog from "../../store/hooks/combat/use-combat-log.hook";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../shared-components/Button.component";
import Item from "../../items/models/item-global.type";

const CombatPotionBar = () => {
  const { t } = useTranslation();
  const { characterCurrentHealth, characterMaxHealth, increaseCharacterHealth } = useCharacterHealth();
  const { inventory, removeItemFromInventory } = useInventory();
  const { addCombatLog } = useCombatLog();
  const inventoryList = useMemo(() => Object.values(inventory), [inventory]);
  const healingPotions = useMemo(() => {
    return inventoryList.filter((item) => item.type === "consumable" && item.subType === "potion");
  }, [inventoryList]);

  const onUsePotion = useCallback(
    ({ item }: { item: Item }) => {
      if (characterCurrentHealth < characterMaxHealth) {
        const multiplier = (item as Consumable).healthPointGain / 100;
        const health = Math.ceil(characterMaxHealth * multiplier);
        increaseCharacterHealth(health);
        removeItemFromInventory(item);
        addCombatLog(`${t("Healed")}: ${health}`, "success");
      } else {
        addCombatLog(`No need`);
      }
    },
    [characterCurrentHealth, characterMaxHealth, addCombatLog, increaseCharacterHealth, removeItemFromInventory, t]
  );
  return (
    <ul className="mt-2 flex flex-wrap border-t pt-2">
      {healingPotions.map((item) => (
        <li key={item.defname}>
          <ButtonComponent className="border-0 relative" onClick={() => onUsePotion({ item })}>
            <>
              <ItemImageComponent itemDefName={item.defname} width={40}></ItemImageComponent>
              <small className="absolute right-2 bottom-0 drop-shadow-xl">{item.quantity}</small>
            </>
          </ButtonComponent>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(CombatPotionBar);
