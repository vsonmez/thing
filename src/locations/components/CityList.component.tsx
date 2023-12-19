import React, { useRef } from "react";
import Locations from "../index.locations";
import { useTranslation } from "react-i18next";
import CityListItemComponent from "./CityListItem.component";
/**
 * This code defines a functional component called CityList. It uses the useTranslation hook from a library called i18n to access translation functionality. The component renders a list of cities by mapping over an array of city objects retrieved from the Locations object. Each city is rendered using the CityListItemComponent with a unique key provided by the id property of the city object. The list is wrapped in a ul element.
 */
const CityList = () => {
  const { i18n } = useTranslation();
  const cityList = useRef(Object.values(Locations));
  return (
    <ul className="flex flex-col gap-4">
      {cityList.current.map((city) => (
        <CityListItemComponent key={city.id} city={city}></CityListItemComponent>
      ))}
    </ul>
  );
};

export default React.memo(CityList);
