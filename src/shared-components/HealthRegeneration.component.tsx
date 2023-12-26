import React, { useEffect } from "react";
import useTimer from "../hooks/use-timer.hook";
import useCharacterHealth from "../store/hooks/character/use-character-health.hook";
import useMessagesStore from "../store/hooks/message/use-message-store";

const HealthRegeneration = () => {
  const { addMessage } = useMessagesStore();
  const { startTimer, timerTime, timerIsRuning, setTime } = useTimer(30);
  const { characterCurrentHealth, characterMaxHealth, increaseCharacterHealth, renewCharacter } = useCharacterHealth();
  useEffect(() => {
    if (characterCurrentHealth < characterMaxHealth && !timerIsRuning) {
      setTime(30);
      startTimer();
    }
    // eslint-disable-next-line
  }, [characterCurrentHealth, timerIsRuning]);

  useEffect(() => {
    if (timerTime <= 0) {
      increaseCharacterHealth(1);
    }
    // eslint-disable-next-line
  }, [timerTime]);

  useEffect(() => {
    if (characterCurrentHealth < 1) {
      addMessage("You have died", "error");
      renewCharacter();
    }
    // eslint-disable-next-line
  }, [characterCurrentHealth]);
  return <></>;
};

export default React.memo(HealthRegeneration);
