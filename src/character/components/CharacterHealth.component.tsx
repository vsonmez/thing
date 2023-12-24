import React, { useEffect } from "react";
import useCharacterHealth from "../../store/hooks/character/use-character-health.hook";
import { useTranslation } from "react-i18next";
import useCurrentScreen from "../../store/hooks/global/use-current-screen.hook";
import useTimer from "../../hooks/use-timer.hook";
/**
 * It uses the useCharacterHealth hook to get the current and maximum health values for a character. It renders a div element with the text "Health:" followed by the current health and maximum health values.
 */
const CharacterHealth: React.FC = () => {
  const { startTimer, timerTime } = useTimer(30, true);
  const { t } = useTranslation();
  const { characterCurrentHealth, characterMaxHealth, increaseCharacterHealth } = useCharacterHealth();
  const { currentScreen } = useCurrentScreen();

  useEffect(() => {
    startTimer();
  }, []);

  useEffect(() => {
    if (timerTime <= 0) {
      increaseCharacterHealth(1);
    }
  }, [timerTime, increaseCharacterHealth]);

  return (
    <div className={`flex gap-1 ${currentScreen === "dungeon" ? "bg-red-500 px-1 rounded-sm" : ""}`}>
      <span> {t("Health")}:</span>
      <span>
        {characterCurrentHealth}/{characterMaxHealth}
      </span>
    </div>
  );
};

export default React.memo(CharacterHealth);
