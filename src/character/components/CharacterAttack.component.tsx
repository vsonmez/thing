import React from "react";
import useCharacterAttack from "../../store/hooks/character/use-character-attack.hook";
import { useTranslation } from "react-i18next";
/**
 *  It uses the useCharacterAttack hook to get the characterAttack value.
 */
const CharacterAttack: React.FC = () => {
  const { t } = useTranslation();
  const { characterAttack } = useCharacterAttack();
  return (
    <div className="flex gap-1">
      <span>{t("Attack")}: </span>
      <span>{characterAttack}</span>
    </div>
  );
};

export default React.memo(CharacterAttack);
