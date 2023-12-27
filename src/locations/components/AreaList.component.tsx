import React, { useCallback, useRef } from "react";
import Location from "../models/location.type";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../shared-components/Button.component";

const AreaList = ({ city }: { city: Location }) => {
  const { i18n, t } = useTranslation();
  const areaList = useRef(Object.values(city.areas));

  const onGo = useCallback(() => {}, []);
  return (
    <div className="mt-2">
      <ul className="flex flex-col gap-1">
        {areaList.current.map((area) => (
          <li key={area.id} className="flex items-center border-b last:border-none border-gray-400 pb-1">
            <span className="w-[110px]">{area.name[i18n.language]}</span>
            <ButtonComponent className="ml-auto" onClick={onGo}>
              <>{t("Go")}</>
            </ButtonComponent>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(AreaList);
