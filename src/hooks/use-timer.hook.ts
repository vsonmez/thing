import { useEffect, useState } from "react";

const useTimer = (initialTime: number) => {
  const [timerTime, setTime] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    setIsRunning(true);
  };

  useEffect(() => {
    if (isRunning) {
      const timer = setInterval(() => {
        setTime((prevTime: number) => prevTime - 1);
      }, 1000);

      if (timerTime <= 0) {
        setIsRunning(false);
        clearInterval(timer);
      }

      return () => clearInterval(timer);
    }
  }, [isRunning, timerTime, setTime]);

  return { timerTime, startTimer, timerIsRuning: isRunning, setTime };
};

export default useTimer;
