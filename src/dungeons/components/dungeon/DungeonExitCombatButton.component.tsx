import React, { useCallback } from "react";
import ButtonComponent from "../../../shared-components/Button.component";
import useCharacterCurrentDungeon from "../../../store/hooks/character/use-character-current-dungeon.hook";
import useCharacterIsInDungeon from "../../../store/hooks/character/use-character-is-in-dungeon.hook";
import useCurrentScreen from "../../../store/hooks/global/use-current-screen.hook";

const DungeonExitCombatButton = ({ timerIsRuning }: { timerIsRuning: boolean }) => {
  const { setCurrentScreen } = useCurrentScreen();
  const { setCharacterIsInDungeon } = useCharacterIsInDungeon();
  const { setCurrentDungeon } = useCharacterCurrentDungeon();
  const onExitCombat = useCallback(() => {
    setCurrentScreen("message");
    setCharacterIsInDungeon(false);
    setCurrentDungeon("");
  }, [setCurrentScreen, setCharacterIsInDungeon, setCurrentDungeon]);
  return (
    <ButtonComponent disabled={timerIsRuning} onClick={onExitCombat}>
      <>Exit</>
    </ButtonComponent>
  );
};

export default React.memo(DungeonExitCombatButton);
