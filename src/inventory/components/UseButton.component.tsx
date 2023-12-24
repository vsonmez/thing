import React, { useCallback } from "react";
import ButtonComponent from "../../shared-components/Button.component";
import Item from "../../items/models/item-global.type";
import useCharacterHunger from "../../store/hooks/character/use-character-hunger.hook";
import Helpers from "../../helpers/index.helpers";
import useInventory from "../../store/hooks/inventory/use-inventory.hook";
import useMessagesStore from "../../store/hooks/message/use-message-store";
import useCurrentScreen from "../../store/hooks/global/use-current-screen.hook";
import useDungeonLog from "../../store/hooks/dungeon/use-dungeon-log.hook";
import Consumable from "../../items/models/consumable.type";
import useCharacterHealth from "../../store/hooks/character/use-character-health.hook";
import { useTranslation } from "react-i18next";

const UseButton = ({ item }: { item: Item }) => {
  const { t } = useTranslation();
  const { characterCurrentHealth, increaseCharacterHealth, characterMaxHealth } = useCharacterHealth();
  const { currentScreen } = useCurrentScreen();
  const { addDungeonLog } = useDungeonLog();
  const { addMessage } = useMessagesStore();
  const { increaseCharacterHunger, characterHunger } = useCharacterHunger();
  const { removeItemFromInventory } = useInventory();

  const consumeFood = useCallback(() => {
    if (characterHunger < 100) {
      increaseCharacterHunger((item as Consumable).hungerPointGain);
      removeItemFromInventory(item);
      if (currentScreen === "dungeon") {
        addDungeonLog(`You ate something`);
      } else {
        addMessage("You ate something");
      }
    } else {
      if (currentScreen === "dungeon") {
        addDungeonLog(`You are not hungry`);
      } else {
        addMessage("You are not hungry");
      }
    }
  }, [
    characterHunger,
    increaseCharacterHunger,
    removeItemFromInventory,
    item,
    currentScreen,
    addDungeonLog,
    addMessage,
  ]);

  const consumePotion = useCallback(() => {
    if (characterCurrentHealth < characterMaxHealth) {
      const multiplier = (item as Consumable).healthPointGain / 100;
      const health = Math.ceil(characterMaxHealth * multiplier);
      increaseCharacterHealth(health);
      removeItemFromInventory(item);
      if (currentScreen === "dungeon") {
        addDungeonLog(`${t("Healed")}: ${health}`, "success");
      } else {
        addMessage(`${t("Healed")}: ${health}`);
      }
    } else {
      if (currentScreen === "dungeon") {
        addDungeonLog(`No need`);
      } else {
        addMessage("No need");
      }
    }
  }, [
    addDungeonLog,
    addMessage,
    characterCurrentHealth,
    characterMaxHealth,
    increaseCharacterHealth,
    removeItemFromInventory,
    item,
    currentScreen,
    t,
  ]);

  const onUse = useCallback(() => {
    if (Helpers.isItemConsumable(item)) {
      switch (item.subType) {
        case "food":
          consumeFood();
          break;
        case "potion":
          consumePotion();
          break;
        default:
          break;
      }
    }
  }, [item, consumeFood, consumePotion]);
  return (
    <ButtonComponent onClick={onUse}>
      <>{t("Use")}</>
    </ButtonComponent>
  );
};

export default React.memo(UseButton);
