import React from "react";
import useDungeonLog from "../../../store/hooks/dungeon/use-dungeon-log.hook";

const DungeonLogList = () => {
  const { dungeonLogList } = useDungeonLog();
  return (
    <ul className="h-full bg-black/70 overflow-auto">
      {dungeonLogList.map((dungeonLog) => (
        <li key={dungeonLog.id} className="border-b border-black p-1 text-[14px] last:border-0 flex items-center">
          {dungeonLog.text}
        </li>
      ))}
    </ul>
  );
};

export default React.memo(DungeonLogList);
