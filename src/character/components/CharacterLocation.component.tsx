import React, { useRef } from "react";
import useCharacterLocation from "../../store/hooks/character/use-character-location.hook";
import { useTranslation } from "react-i18next";
import Locations from "../../locations/index.locations";

const CharacterLocation = () => {
  const locations = useRef(Locations);
  const { characterLocation, characterArea } = useCharacterLocation();
  const { t, i18n } = useTranslation();
  return (
    <div className="flex">
      <span> {t("Location")}: </span>
      <span className="ml-1">
        {locations.current[characterLocation].name}/
        {locations.current[characterLocation]?.areas &&
          locations.current[characterLocation]?.areas[characterArea]?.name[i18n.language]}
      </span>
    </div>
  );
};

export default React.memo(CharacterLocation);
