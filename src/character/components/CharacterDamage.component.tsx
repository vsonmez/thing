import React from "react";
import useCharacterDamage from "../../store/hooks/character/use-character-damage.hook";
/**
 *
 * It uses a custom hook called useCharacterDamage to get the character's damage value. It renders a div element with the text "Damage: " followed by the character's damage value.
 */
const CharacterDamage = () => {
  const { characterDamage } = useCharacterDamage();
  return (
    <div className="flex gap-1">
      <span>Damage: </span>
      {characterDamage > 0 ? <span>1-{characterDamage}</span> : <span>0</span>}
    </div>
  );
};

export default React.memo(CharacterDamage);
