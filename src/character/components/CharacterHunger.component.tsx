import React, { useEffect, useMemo } from "react";
import useCharacterHunger from "../../store/hooks/character/use-character-hunger.hook";
import { useTranslation } from "react-i18next";
import useMessagesStore from "../../store/hooks/message/use-message-store";
/**
 * This code snippet defines a React functional component called CharacterHunger.

It uses hooks like useTranslation, useMessagesStore, and useCharacterHunger to access certain functionality and data.

The useEffect hook is used to trigger a side effect when the characterHunger value changes. If the characterHunger value is less than or equal to 50, it adds a warning message using the addMessage function.

The component renders a div with two spans. The first span displays the translated text for "Hunger". The second span displays the characterHunger value divided by 100.
 */
const CharacterHunger = () => {
  const { t } = useTranslation();
  const { addMessage } = useMessagesStore();
  const { characterHunger } = useCharacterHunger();

  const cssClass = useMemo(() => {
    if (characterHunger <= 50 && characterHunger > 20) {
      return `flex items-center text-yellow-500`;
    }
    if (characterHunger <= 20) {
      return `flex items-center text-red-500`;
    }
  }, [characterHunger]);

  useEffect(() => {
    if (characterHunger <= 50) {
      addMessage(`You're starting to get hungry`, "warning");
    }
  }, [characterHunger, addMessage]);
  return (
    <div className={cssClass}>
      <span> {t("Hunger")}:</span>
      <span className="ml-1">{characterHunger}</span>
    </div>
  );
};

export default React.memo(CharacterHunger);
