import React from "react";
import useCharacterDefense from "../../store/hooks/character/use-character-defense.hook";
import { useTranslation } from "react-i18next";
/**
 * It uses the useCharacterDefense hook to retrieve the characterDefense value. The component renders a div element with two span elements inside. The first span displays the text "Defense:", and the second span displays the value of characterDefense.
 */
const CharacterDefense: React.FC = () => {
  const { t } = useTranslation();
  const { characterDefense } = useCharacterDefense();

  return (
    <div className="flex gap-1">
      <span> {t("Defense")}: </span>
      <span>{characterDefense}</span>
    </div>
  );
};

export default React.memo(CharacterDefense);
