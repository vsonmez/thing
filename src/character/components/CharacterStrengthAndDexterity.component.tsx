import React from "react";
import useCharacterStrength from "../../store/hooks/character/use-character-strength.hook";
import useCharacterDexterity from "../../store/hooks/character/use-character-dexterity.hook";
/**
 *  It uses two custom hooks, useCharacterStrength and useCharacterDexterity, to retrieve the values of characterStrength and characterDexterity respectively. The component renders two div elements, each containing a label ("STR:" or "DEX:") and the corresponding value (characterStrength or characterDexterity).
 */
const CharacterStrengthAndDexterity: React.FC = () => {
  const { characterStrength } = useCharacterStrength();
  const { characterDexterity } = useCharacterDexterity();
  return (
    <div className="flex gap-2">
      <div className="flex">
        <span>STR: </span>
        <span>{characterStrength}</span>
      </div>
      <div className="flex">
        <span>DEX: </span>
        <span>{characterDexterity}</span>
      </div>
    </div>
  );
};

export default React.memo(CharacterStrengthAndDexterity);
