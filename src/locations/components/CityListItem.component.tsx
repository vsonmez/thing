import React, { useCallback, useEffect } from "react";
import Location from "../models/location.type";
import CityImageComponent from "./CityImage.component";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../shared-components/Button.component";
import useCharacterLocation from "../../store/hooks/character/use-character-location.hook";
import useTimer from "../../hooks/use-timer.hook";
import useIsBusy from "../../store/hooks/global/use-is-busy.hook";
import useMessagesStore from "../../store/hooks/message/use-message-store";
import useCharacterHunger from "../../store/hooks/character/use-character-hunger.hook";
/**
 * This code snippet defines a React functional component called CityListItem. It receives a city object as a prop, which has properties like name, id, and description.

Inside the component, it uses various custom hooks like useCharacterHunger, useMessagesStore, useIsBusy, useTimer, useTranslation, and useCharacterLocation to manage different aspects of the component's state and functionality.

The component renders a list item (<li>) and displays information about the city. It conditionally renders additional UI elements based on the characterLocation, timerIsRunning, and characterHunger states.

When the user clicks on the "Travel" button, it checks if the characterHunger is sufficient and starts a timer. Once the timer reaches 0, it updates the state and displays a success message with the city name.

The component also conditionally renders a black overlay with the current timer value and the name of the city when the timerIsRunning state is true.
 */
const CityListItem = ({ city }: { city: Location }) => {
  const { characterHunger, decreaseCharacterHunger } = useCharacterHunger();
  const { addMessage } = useMessagesStore();
  const { setIsBusy } = useIsBusy();
  const { startTimer, timerTime, timerIsRuning } = useTimer(3);
  const { i18n, t } = useTranslation();
  const { setCharacterLocation, characterLocation } = useCharacterLocation();
  const onTravel = useCallback(() => {
    if (characterHunger < 3) {
      addMessage("Not Enouhg Hunger Point", "error");
      return;
    }
    setIsBusy(true);
    startTimer();
  }, [setIsBusy, addMessage, startTimer, characterHunger]);

  useEffect(() => {
    if (timerTime <= 0) {
      setIsBusy(false);
      addMessage(`${t("Welcome To")}: ${city.name}`, "success");
      setCharacterLocation(city.id, decreaseCharacterHunger(3));
    }
  }, [timerTime, setIsBusy, addMessage, setCharacterLocation, city, t, decreaseCharacterHunger]);

  return (
    <li
      key={city.id}
      className={`flex gap-2 items-center ${characterLocation === city.id ? "bg-green-700 rounded" : ""}`}
    >
      <CityImageComponent cityID={city.id} width={128}></CityImageComponent>
      <div className="w-full">
        <span className="block">{city.name}</span>
        <small>{i18n.language === "en" ? city.description.en : city.description.tr}</small>
        {characterLocation !== city.id && <small className="block my-1 text-orange-300">{t("TravelInfo")}</small>}
        {characterLocation !== city.id && (
          <div className="mt-1">
            <ButtonComponent onClick={onTravel}>
              <span>{t("Travel")}</span>
            </ButtonComponent>
          </div>
        )}
      </div>
      {timerIsRuning && (
        <div className="fixed top-0 left-0 w-full h-full bg-black/50 flex items-center justify-center flex-col">
          <span className="text-[24px]">{timerTime}</span>
          <div>{`${t("Traveling")}: ${city.name}`}</div>
        </div>
      )}
    </li>
  );
};

export default React.memo(CityListItem);
