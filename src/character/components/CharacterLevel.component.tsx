import React from "react";
import useCharacterLevel from "../../store/hooks/character/use-character-level.hook";
/**
 * It uses the useCharacterLevel hook to get the characterLevel value. It renders a div with two span elements: one displaying the text "LvL" and the other displaying the characterLevel value.
 */
const CharacterLevel: React.FC = () => {
  const { characterLevel } = useCharacterLevel();
  return (
    <div className="flex">
      <span>LvL</span>
      <span>{characterLevel}</span>
    </div>
  );
};

export default React.memo(CharacterLevel);
