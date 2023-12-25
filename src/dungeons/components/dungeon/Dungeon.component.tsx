import React, { useCallback, useEffect, useRef, useState } from "react";
import ButtonComponent from "../../../shared-components/Button.component";
import useTimer from "../../../hooks/use-timer.hook";
import { useTranslation } from "react-i18next";
import useCharacterCurrentDungeon from "../../../store/hooks/character/use-character-current-dungeon.hook";
import useCharacterLocation from "../../../store/hooks/character/use-character-location.hook";
import Locations from "../../../locations/index.locations";
import DungeonLogListComponent from "../dungeon-log/DungeonLogList.component";
import useDungeonLog from "../../../store/hooks/dungeon/use-dungeon-log.hook";
import Helpers from "../../../helpers/index.helpers";
import useDungeon from "../../../store/hooks/dungeon/use-dungeon.store";
import DungeonExploringResultKeys from "../../models/dungeon-exploring-result-keys.type";
import DungeonStaticsComponent from "./DungeonStatics.component";
import DungeonExitCombatButtonComponent from "./DungeonExitCombatButton.component";
import DungeonResultComponent from "./result/DungeonResult.component";
import useCharacterHunger from "../../../store/hooks/character/use-character-hunger.hook";
import CharacterHealthComponent from "../../../character/components/CharacterHealth.component";

const Dungeon = () => {
  const { characterHunger, decreaseCharacterHunger } = useCharacterHunger();
  const { eventAmount, monsterAmount, secretAmount, trapAmount } = useDungeon();
  const { addDungeonLog, clearDungeonLog } = useDungeonLog();
  const { characterLocation } = useCharacterLocation();
  const { t } = useTranslation();
  const { startTimer, timerIsRuning, timerTime, setTime } = useTimer(3);
  const { currentDungeon } = useCharacterCurrentDungeon();
  const dungeon = useRef(Locations[characterLocation]?.dungeons[currentDungeon]);
  const [dungeonExploringResultKey, setDungeonExploringResultKey] = useState<DungeonExploringResultKeys>();

  const onMoveForward = useCallback(() => {
    if (characterHunger > 1) {
      addDungeonLog("You are progressing through the dungeon");
      setDungeonExploringResultKey(undefined);
      decreaseCharacterHunger(1);
      setTime(3);
      startTimer();
    } else {
      addDungeonLog("Not Enough Hunger Point", "error");
    }
  }, [startTimer, addDungeonLog, characterHunger, decreaseCharacterHunger]);

  useEffect(() => {
    if (timerTime <= 0) {
      const exploringResult = Helpers.getDungeonExploringResult(
        {
          eventAmount,
          monsterAmount,
          secretAmount,
          trapAmount,
          bossAmount: 1,
        },
        dungeon.current
      );
      setDungeonExploringResultKey(exploringResult);
    }
    // eslint-disable-next-line
  }, [timerTime]);

  useEffect(() => {
    clearDungeonLog();
  }, [clearDungeonLog]);

  return (
    <div className="h-full flex flex-col">
      <h1 className="bg-black/80">
        <span>
          {t("Dungeon")}: {dungeon.current?.name}
        </span>
        {dungeon.current.monsters && <DungeonStaticsComponent></DungeonStaticsComponent>}
        {!dungeon.current.monsters && <div>Under Construction</div>}
      </h1>
      <DungeonLogListComponent></DungeonLogListComponent>
      <div className="bg-black/80 p-1 flex gap-3">
        {dungeon.current.monsters && (
          <ButtonComponent disabled={timerIsRuning} onClick={onMoveForward}>
            <>{t("Move Forward")}</>
          </ButtonComponent>
        )}
        <CharacterHealthComponent></CharacterHealthComponent>
        <DungeonExitCombatButtonComponent timerIsRuning={timerIsRuning}></DungeonExitCombatButtonComponent>
      </div>
      {dungeonExploringResultKey && (
        <DungeonResultComponent
          resultKey={dungeonExploringResultKey}
          dungeon={dungeon.current}
        ></DungeonResultComponent>
      )}
    </div>
  );
};

export default React.memo(Dungeon);
