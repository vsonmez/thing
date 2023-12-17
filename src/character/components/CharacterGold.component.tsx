import React from "react";
import useCharacterGold from "../../store/hooks/character/use-character-gold.hook";
import CurrencyComponent from "../../shared-components/Currency.component";
/**
 * It uses the useCharacterGold hook to retrieve the characterGold value. The component renders a div element with two child span elements. The first span displays the text "Gold:", and the second span renders a CurrencyComponent with the characterGold value as its value prop.
 */
const CharacterGold: React.FC = () => {
  const { characterGold } = useCharacterGold();
  return (
    <div className="flex gap-1">
      <span>Gold:</span>
      <span>
        <CurrencyComponent value={characterGold}></CurrencyComponent>
      </span>
    </div>
  );
};

export default React.memo(CharacterGold);
