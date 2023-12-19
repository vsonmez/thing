import React, { useCallback } from "react";
import Location from "../models/location.type";
import CityImageComponent from "./CityImage.component";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../shared-components/Button.component";
import useCharacterLocation from "../../store/hooks/character/use-character-location.hook";
/**
 * This code snippet defines a functional component called CityListItem in TypeScript and React. It takes in a prop called city of type Location. Inside the component, it uses hooks like useTranslation and useCharacterLocation to get access to translation and character location functionality.

The component renders a list item (li) with some content including an image, city name, description, and a button labeled "Travel". When the "Travel" button is clicked, it calls the onTravel function which sets the character's location to the ID of the city.
 */
const CityListItem = ({ city }: { city: Location }) => {
  const { i18n, t } = useTranslation();
  const { setCharacterLocation } = useCharacterLocation();
  const onTravel = useCallback(() => {
    setCharacterLocation(city.id);
  }, [setCharacterLocation, city]);
  return (
    <li key={city.id} className="flex gap-2 items-center">
      <CityImageComponent cityID={city.id} width={128}></CityImageComponent>
      <div className="w-full">
        <span className="block">{city.name}</span>
        <small>{i18n.language === "en" ? city.description.en : city.description.tr}</small>
        <div className="mt-1">
          <ButtonComponent onClick={onTravel}>
            <span>{t("Travel")}</span>
          </ButtonComponent>
        </div>
      </div>
    </li>
  );
};

export default React.memo(CityListItem);
