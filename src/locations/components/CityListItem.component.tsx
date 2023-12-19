import React, { useCallback, useEffect } from "react";
import Location from "../models/location.type";
import CityImageComponent from "./CityImage.component";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../shared-components/Button.component";
import useCharacterLocation from "../../store/hooks/character/use-character-location.hook";
import useTimer from "../../hooks/use-timer.hook";
import useIsBusy from "../../store/hooks/global/use-is-busy.hook";
import useMessagesStore from "../../store/hooks/message/use-message-store";
/**
 * This code snippet defines a functional component called CityListItem in TypeScript and React. It takes in a prop called city of type Location. Inside the component, it uses hooks like useTranslation and useCharacterLocation to get access to translation and character location functionality.

The component renders a list item (li) with some content including an image, city name, description, and a button labeled "Travel". When the "Travel" button is clicked, it calls the onTravel function which sets the character's location to the ID of the city.
 */
const CityListItem = ({ city }: { city: Location }) => {
  const { addMessage } = useMessagesStore();
  const { setIsBusy } = useIsBusy();
  const { startTimer, timerTime, timerIsRuning } = useTimer(45);
  const { i18n, t } = useTranslation();
  const { setCharacterLocation, characterLocation } = useCharacterLocation();
  const onTravel = useCallback(() => {
    setIsBusy(true);
    startTimer();
  }, [startTimer, setIsBusy]);
  useEffect(() => {
    if (timerTime === 0) {
      setCharacterLocation(city.id);
      setIsBusy(false);
      addMessage(`${t("WelcomeTo")}: ${city.name}`, "success");
    }
  }, [timerTime, setCharacterLocation, city, setIsBusy]);
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
