import React, { useRef } from "react";
import useCharacterLocation from "../../store/hooks/character/use-character-location.hook";
import { useTranslation } from "react-i18next";
import Locations from "../../locations/index.locations";

const CharacterLocation = () => {
  const locations = useRef(Locations);
  const { characterLocation } = useCharacterLocation();
  const { t } = useTranslation();
  return (
    <div className="flex">
      <span> {t("Location")}: </span>
      <span className="ml-1">{locations.current[characterLocation].name}</span>
    </div>
  );
};

export default React.memo(CharacterLocation);
