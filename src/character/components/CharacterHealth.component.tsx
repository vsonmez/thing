import React from "react";
import useCharacterHealth from "../../store/hooks/character/use-character-health.hook";
/**
 * It uses the useCharacterHealth hook to get the current and maximum health values for a character. It renders a div element with the text "Health:" followed by the current health and maximum health values.
 */
const CharacterHealth: React.FC = () => {
  const { characterCurrentHealth, characterMaxHealth } = useCharacterHealth();

  return (
    <div className="flex gap-1">
      <span>Health:</span>
      <span>
        {characterCurrentHealth}/{characterMaxHealth}
      </span>
    </div>
  );
};

export default React.memo(CharacterHealth);
