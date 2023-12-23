import React, { useCallback } from "react";
import ButtonComponent from "../../shared-components/Button.component";
import Item from "../../items/models/item-global.type";
import useCharacterHunger from "../../store/hooks/character/use-character-hunger.hook";
import Helpers from "../../helpers/index.helpers";
import useInventory from "../../store/hooks/inventory/use-inventory.hook";
import useMessagesStore from "../../store/hooks/message/use-message-store";
import useCurrentScreen from "../../store/hooks/global/use-current-screen.hook";
import useDungeonLog from "../../store/hooks/dungeon/use-dungeon-log.hook";

const UseButton = ({ item }: { item: Item }) => {
  const { currentScreen } = useCurrentScreen();
  const { addDungeonLog } = useDungeonLog();
  const { addMessage } = useMessagesStore();
  const { increaseCharacterHunger, characterHunger } = useCharacterHunger();
  const { removeItemFromInventory } = useInventory();

  const onUse = useCallback(() => {
    if (Helpers.isItemConsumable(item)) {
      if (characterHunger < 100) {
        increaseCharacterHunger(item.hungerPointGain);
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
    }
  }, [
    increaseCharacterHunger,
    removeItemFromInventory,
    item,
    characterHunger,
    currentScreen,
    addDungeonLog,
    addMessage,
  ]);
  return (
    <ButtonComponent onClick={onUse}>
      <>Use</>
    </ButtonComponent>
  );
};

export default React.memo(UseButton);
