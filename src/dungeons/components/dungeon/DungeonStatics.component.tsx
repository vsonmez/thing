import React, { useEffect, useRef } from "react";
import useDungeon from "../../../store/hooks/dungeon/use-dungeon.store";
import Locations from "../../../locations/index.locations";
import useCharacterLocation from "../../../store/hooks/character/use-character-location.hook";
import useCharacterCurrentDungeon from "../../../store/hooks/character/use-character-current-dungeon.hook";
import { useTranslation } from "react-i18next";

const DungeonStatics = () => {
  const { t } = useTranslation();
  const { characterLocation } = useCharacterLocation();
  const { currentDungeon } = useCharacterCurrentDungeon();
  const dungeon = useRef(Locations[characterLocation]?.dungeons[currentDungeon]);
  const { eventAmount, monsterAmount, secretAmount, trapAmount, bossAmount, resetDungeon } = useDungeon();

  useEffect(() => {
    resetDungeon({
      eventAmount: dungeon.current.events.amount,
      monsterAmount: dungeon.current.monsters.amount,
      secretAmount: dungeon.current.secrets.amount,
      trapAmount: dungeon.current.traps.amount,
      bossAmount: dungeon.current.monsters.bossAmount,
    });
  }, [dungeon, resetDungeon]);

  return (
    <div className="flex gap-2">
      {/* <div className="flex flex-col items-center">
        <span>{t("Event")}</span>
        <span>{eventAmount}</span>
      </div> */}
      <div className="flex flex-col items-center">
        <span>{t("Secret")}</span>
        <span>{secretAmount}</span>
      </div>
      <div className="flex flex-col items-center">
        <span>{t("Trap")}</span>
        <span>{trapAmount}</span>
      </div>
      <div className="flex flex-col items-center">
        <span>{t("Monster")}</span>
        <span>{monsterAmount}</span>
      </div>
      <div className="flex flex-col items-center">
        <span>Boss</span>
        <span>{bossAmount}</span>
      </div>
    </div>
  );
};

export default React.memo(DungeonStatics);
