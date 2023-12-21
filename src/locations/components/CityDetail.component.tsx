import React, { useCallback, useState } from "react";
import ButtonComponent from "../../shared-components/Button.component";
import IconInfoComponent from "../../assets/images/svg-icons/IconInfo.component";
import Location from "../models/location.type";
import { useTranslation } from "react-i18next";
import useCharacterLocation from "../../store/hooks/character/use-character-location.hook";

const CityDetail = ({ city }: { city: Location }) => {
  const { i18n, t } = useTranslation();
  const { characterLocation } = useCharacterLocation();
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);
  const toggleShowDetail = useCallback(() => {
    setIsShowDetail(!isShowDetail);
  }, [isShowDetail, setIsShowDetail]);
  return (
    <>
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
    </>
  );
};

export default React.memo(CityDetail);
