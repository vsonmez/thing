import React, { useCallback, useEffect, useState } from "react";
import Location from "../models/location.type";
import CityImageComponent from "./CityImage.component";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../shared-components/Button.component";
import useCharacterLocation from "../../store/hooks/character/use-character-location.hook";
import useTimer from "../../hooks/use-timer.hook";
import useMessagesStore from "../../store/hooks/message/use-message-store";
import useCharacterHunger from "../../store/hooks/character/use-character-hunger.hook";
import Constants from "../../constants/index.constants";
import IconInfoComponent from "../../assets/images/svg-icons/IconInfo.component";
/**
 * This code snippet defines a React functional component called CityListItem. It receives a city object as a prop, which has properties like name, id, and description.

Inside the component, it uses various custom hooks like useCharacterHunger, useMessagesStore, useIsBusy, useTimer, useTranslation, and useCharacterLocation to manage different aspects of the component's state and functionality.

The component renders a list item (<li>) and displays information about the city. It conditionally renders additional UI elements based on the characterLocation, timerIsRunning, and characterHunger states.

When the user clicks on the "Travel" button, it checks if the characterHunger is sufficient and starts a timer. Once the timer reaches 0, it updates the state and displays a success message with the city name.

The component also conditionally renders a black overlay with the current timer value and the name of the city when the timerIsRunning state is true.
 */
const CityListItem = ({ city }: { city: Location }) => {
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);
  const { characterHunger, decreaseCharacterHunger } = useCharacterHunger();
  const { addMessage } = useMessagesStore();
  const { startTimer, timerTime, timerIsRuning, setTime } = useTimer(Constants.travelTime);
  const { i18n, t } = useTranslation();
  const { setCharacterLocation, characterLocation } = useCharacterLocation();
  const onTravel = useCallback(() => {
    if (characterHunger < Constants.travelHungerPoint) {
      addMessage("Not Enouhg Hunger Point", "error");
      return;
    }
    startTimer();
  }, [addMessage, startTimer, characterHunger]);
  const toggleShowDetail = useCallback(() => {
    setIsShowDetail(!isShowDetail);
  }, [isShowDetail, setIsShowDetail]);

  useEffect(() => {
    if (timerTime <= 0) {
      setCharacterLocation(city.id, () => {
        decreaseCharacterHunger(Constants.travelHungerPoint);
        setTime(Constants.travelTime);
        addMessage("Hunger point decreased");
        addMessage(`${t("Welcome To")}: ${city.name}`, "success");
      });
    }
  }, [timerTime, addMessage, setCharacterLocation, city, t, decreaseCharacterHunger, setTime]);

  return (
    <li key={city.id} className="relative flex items-center justify-center">
      <CityImageComponent cityID={city.id}></CityImageComponent>
      <div
        className={`absolute bg-black/50 p-2 bottom-[1px] left-[1px] right-[1px] rounded overflow-hidden ${
          characterLocation === city.id ? "bg-green-900/50 rounded" : ""
        }`}
      >
        <div className="flex items-center">
          <span className="block">{city.name}</span>
          <ButtonComponent className="ml-auto border-0" onClick={toggleShowDetail}>
            <IconInfoComponent></IconInfoComponent>
          </ButtonComponent>
        </div>
        {isShowDetail && <small>{i18n.language === "en" ? city.description.en : city.description.tr}</small>}
        {characterLocation !== city.id && isShowDetail && (
          <small className="block my-1 text-orange-300">{t("Travel Info")}</small>
        )}
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
