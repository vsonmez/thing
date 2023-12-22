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

const Dungeon = () => {
  const { eventAmount, monsterAmount, secretAmount, trapAmount } = useDungeon();
  const { addDungeonLog } = useDungeonLog();
  const { characterLocation } = useCharacterLocation();
  const { t } = useTranslation();
  const { startTimer, timerIsRuning, timerTime } = useTimer(3);
  const { currentDungeon } = useCharacterCurrentDungeon();
  const dungeon = useRef(Locations[characterLocation]?.dungeons[currentDungeon]);
  const [dungeonExploringResultKey, setDungeonExploringResultKey] = useState<DungeonExploringResultKeys>();

  const onMoveForward = useCallback(() => {
    addDungeonLog("You are progressing through the dungeon");
    setDungeonExploringResultKey(undefined);
    startTimer();
  }, [startTimer, addDungeonLog]);

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
  }, [timerTime, addDungeonLog]);

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
      <div className="bg-black/80 p-1 flex gap-2">
        {dungeon.current.monsters && (
          <ButtonComponent disabled={timerIsRuning} onClick={onMoveForward}>
            <>Move Forward</>
          </ButtonComponent>
        )}
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
