import React, { useEffect, useRef } from "react";
import useDungeon from "../../../store/hooks/dungeon/use-dungeon.store";
import Locations from "../../../locations/index.locations";
import useCharacterLocation from "../../../store/hooks/character/use-character-location.hook";
import useCharacterCurrentDungeon from "../../../store/hooks/character/use-character-current-dungeon.hook";

const DungeonStatics = () => {
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
      bossAmount: 1,
    });
  }, [dungeon, resetDungeon]);

  return (
    <div className="flex gap-2">
      <span>Event: {eventAmount}</span> <span>Monster: {monsterAmount}</span> <span>Secret: {secretAmount}</span>
      <span>Trap: {trapAmount}</span> <span>Boss: {bossAmount}</span>
    </div>
  );
};

export default React.memo(DungeonStatics);
