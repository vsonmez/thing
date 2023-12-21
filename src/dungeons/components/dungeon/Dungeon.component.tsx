import React, { useCallback, useRef } from "react";
import useCurrentScreen from "../../../store/hooks/global/use-current-screen.hook";
import ButtonComponent from "../../../shared-components/Button.component";
import useCharacterIsInDungeon from "../../../store/hooks/character/use-character-is-in-dungeon.hook";
import useTimer from "../../../hooks/use-timer.hook";
import { useTranslation } from "react-i18next";
import useCharacterCurrentDungeon from "../../../store/hooks/character/use-character-current-dungeon.hook";
import useCharacterLocation from "../../../store/hooks/character/use-character-location.hook";
import Locations from "../../../locations/index.locations";

const Dungeon = () => {
  const { characterLocation } = useCharacterLocation();
  const { t } = useTranslation();
  const { startTimer, timerIsRuning } = useTimer(3);
  const { setCharacterIsInDungeon } = useCharacterIsInDungeon();
  const { setCurrentDungeon, currentDungeon } = useCharacterCurrentDungeon();
  const dungeon = useRef(Locations[characterLocation]?.dungeons[currentDungeon]);
  const { setCurrentScreen } = useCurrentScreen();

  const onAttack = useCallback(() => {
    console.log("attacking");
    startTimer();
  }, [startTimer]);

  const onExitCombat = useCallback(() => {
    setCurrentScreen("message");
    setCharacterIsInDungeon(false);
    setCurrentDungeon("");
  }, [setCurrentScreen, setCharacterIsInDungeon, setCurrentDungeon]);

  return (
    <div className="h-full -2">
      <h1>
        {t("Dungeon")}: {dungeon.current?.name}
      </h1>
      {timerIsRuning && <div>You are progressing through the dungeon....</div>}
      <ButtonComponent disabled={timerIsRuning} onClick={onAttack}>
        <>Attack</>
      </ButtonComponent>
      <ButtonComponent disabled={timerIsRuning} onClick={onExitCombat}>
        <>Exit</>
      </ButtonComponent>
    </div>
  );
};

export default React.memo(Dungeon);
