import React, { useEffect } from "react";
import useCharacterHealth from "../../store/hooks/character/use-character-health.hook";
import { useTranslation } from "react-i18next";
import useCurrentScreen from "../../store/hooks/global/use-current-screen.hook";
import useTimer from "../../hooks/use-timer.hook";
import useMessagesStore from "../../store/hooks/message/use-message-store";
/**
 * It uses the useCharacterHealth hook to get the current and maximum health values for a character. It renders a div element with the text "Health:" followed by the current health and maximum health values.
 */
const CharacterHealth: React.FC = () => {
  const { addMessage } = useMessagesStore();
  const { startTimer, timerTime, timerIsRuning, setTime } = useTimer(30);
  const { t } = useTranslation();
  const { characterCurrentHealth, characterMaxHealth, increaseCharacterHealth, renewCharacter } = useCharacterHealth();
  const { currentScreen } = useCurrentScreen();

  useEffect(() => {
    if (characterCurrentHealth < characterMaxHealth && !timerIsRuning) {
      setTime(30);
      startTimer();
    }
  }, [characterCurrentHealth, timerIsRuning, startTimer, characterMaxHealth]);

  useEffect(() => {
    if (timerTime <= 0) {
      increaseCharacterHealth(1);
    }
  }, [timerTime]);

  useEffect(() => {
    if (characterCurrentHealth < 1) {
      addMessage("You have died", "error");
      renewCharacter();
    }
  }, [characterCurrentHealth]);

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
