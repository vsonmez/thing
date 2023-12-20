import React from "react";
import useCharacterLevel from "../../store/hooks/character/use-character-level.hook";
import { useTranslation } from "react-i18next";
/**
 * It uses the useCharacterLevel hook to get the characterLevel value. It renders a div with two span elements: one displaying the text "LvL" and the other displaying the characterLevel value.
 */
const CharacterLevel: React.FC = () => {
  const { t } = useTranslation();
  const { characterLevel } = useCharacterLevel();
  return (
    <div className="flex items-center">
      <span> {t("Level")}</span>
      <span className="ml-1">{characterLevel}</span>
      <small>/100</small>
    </div>
  );
};

export default React.memo(CharacterLevel);
