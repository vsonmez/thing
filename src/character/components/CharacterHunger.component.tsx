import React from "react";
import useCharacterHunger from "../../store/hooks/character/use-character-hunger.hook";
import { useTranslation } from "react-i18next";
/**
 * This code snippet defines a component called CharacterHunger that displays the hunger level of a character. It uses the useTranslation hook to access translated text and the useCharacterHunger hook to get the current hunger level. The hunger level is displayed as a percentage within a span element.
 */
const CharacterHunger = () => {
  const { t } = useTranslation();
  const { characterHunger } = useCharacterHunger();
  return (
    <div className="flex gap-1">
      <span> {t("Hunger")}:</span>
      <span>{characterHunger}/100</span>
    </div>
  );
};

export default React.memo(CharacterHunger);
