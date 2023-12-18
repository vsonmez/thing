import React, { useRef } from "react";
import Locations from "../index.locations";
import { useTranslation } from "react-i18next";
import CityImageComponent from "./CityImage.component";
import ButtonComponent from "../../shared-components/Button.component";

const CityList = () => {
  const { i18n } = useTranslation();
  const cityList = useRef(Object.values(Locations));
  return (
    <ul className="flex flex-col gap-4">
      {cityList.current.map((city) => (
        <li key={city.id} className="flex gap-2 items-center">
          <CityImageComponent cityID={city.id} width={128}></CityImageComponent>
          <div className="w-full">
            <span className="block">{city.name}</span>
            <small>{i18n.language === "en" ? city.description.en : city.description.tr}</small>
            <div className="mt-1">
              <ButtonComponent onClick={() => {}}>
                <span>Travel</span>
              </ButtonComponent>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default React.memo(CityList);
