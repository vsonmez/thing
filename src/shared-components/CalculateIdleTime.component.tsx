import React, { useEffect, useRef } from "react";
import Helpers from "../helpers/index.helpers";
import useCharacterHealth from "../store/hooks/character/use-character-health.hook";

const CalculateIdleTime = () => {
  const { increaseCharacterHealth } = useCharacterHealth();
  const saveTime = useRef(localStorage.getItem("saveTime"));
  const now = useRef(new Date().getTime());

  useEffect(() => {
    if (saveTime.current) {
      const different = Helpers.getTimeDifference(Number(saveTime.current), now.current);
      console.log(different);
      const healAmount = different.totalSeconds / 20;
      increaseCharacterHealth(healAmount);
    }

    // eslint-disable-next-line
  }, []);
  return <></>;
};

export default React.memo(CalculateIdleTime);
