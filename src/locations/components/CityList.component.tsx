import React, { useRef } from "react";
import Locations from "../index.locations";
import CityListItemComponent from "./CityListItem.component";
/**
 * This code snippet defines a functional component called CityList. It creates a reference to an array of values from the Locations object using the useRef hook. It then renders an unordered list (ul) with a CSS class of flex flex-col gap-4. Each item in the list is rendered using the map function on the cityList.current array. Each item is passed as a prop to the CityListItemComponent component, with a unique key assigned to each item.
 */
const CityList = () => {
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
