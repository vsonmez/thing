import React from "react";
import IconInfoComponent from "../../assets/images/svg-icons/IconInfo.component";
import Location from "../models/location.type";
import { useTranslation } from "react-i18next";
import useCharacterLocation from "../../store/hooks/character/use-character-location.hook";

const CityDetail = ({ city }: { city: Location }) => {
  const { i18n, t } = useTranslation();
  const { characterLocation } = useCharacterLocation();

  return (
    <>
      <details>
        <summary className="flex items-baseline gap-2">
          <IconInfoComponent></IconInfoComponent>
          <span>{city.name}</span>
        </summary>
        <div>
          <small>{i18n.language === "en" ? city.description.en : city.description.tr}</small>
          {characterLocation !== city.id && <small className="block my-1 text-orange-300">{t("Travel Info")}</small>}
        </div>
      </details>
    </>
  );
};

export default React.memo(CityDetail);
