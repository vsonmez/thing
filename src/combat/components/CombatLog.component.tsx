import React from "react";
import useCombatLog from "../../store/hooks/combat/use-combat-log.hook";

const CombatLog = () => {
  const { combatLog } = useCombatLog();
  return (
    <ul className="h-full bg-black/70 max-h-[96px] mt-1 rounded overflow-auto">
      {combatLog.map((combatLog) => (
        <li key={combatLog.id} className="border-b border-black p-1 text-[14px] last:border-0 flex items-center">
          <span
            className={`${!combatLog.type && "text-gray-400"} ${combatLog.type === "error" && "text-red-500"} ${
              combatLog.type === "success" && "text-green-500"
            } ${combatLog.type === "warning" && "text-yellow-500"}`}
          >
            {combatLog.message}
          </span>
          <time className="ml-auto text-gray-400">{combatLog.created_at}</time>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(CombatLog);
