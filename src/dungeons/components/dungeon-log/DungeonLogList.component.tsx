import React from "react";
import useDungeonLog from "../../../store/hooks/dungeon/use-dungeon-log.hook";

const DungeonLogList = () => {
  const { dungeonLogList } = useDungeonLog();
  return (
    <ul className="h-full bg-black/70 overflow-auto">
      {dungeonLogList.map((dungeonLog) => (
        <li key={dungeonLog.id} className="border-b border-black p-1 text-[14px] last:border-0 flex items-center">
          <span
            className={`${!dungeonLog.type && "text-gray-400"} ${dungeonLog.type === "error" && "text-red-500"} ${
              dungeonLog.type === "success" && "text-green-500"
            } ${dungeonLog.type === "warning" && "text-yellow-500"}`}
          >
            {dungeonLog.message}
          </span>
          <time className="ml-auto text-gray-400">{dungeonLog.created_at}</time>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(DungeonLogList);
