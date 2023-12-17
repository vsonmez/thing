import React from "react";
import useCharacterAttack from "../../store/hooks/character/use-character-attack.hook";
/**
 *  It uses the useCharacterAttack hook to get the characterAttack value.
 */
const CharacterAttack: React.FC = () => {
  const { characterAttack } = useCharacterAttack();

  return (
    <div className="flex gap-1">
      <span>Attack: </span>
      <span>{characterAttack}</span>
    </div>
  );
};

export default React.memo(CharacterAttack);
