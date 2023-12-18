import React from "react";
import useCharacterExperience from "../../store/hooks/character/use-character-experience.hook";
import { useTranslation } from "react-i18next";
import useCharacterLevel from "../../store/hooks/character/use-character-level.hook";
import Helpers from "../../helpers/index.helpers";
/**
 * It uses the useCharacterExperience hook to get the characterExperience value. It renders a div element with two span elements inside. The first span displays the text "Experience:", and the second span displays the characterExperience value.
 */
const ChacraterExperience: React.FC = () => {
  const { t } = useTranslation();
  const { characterExperience } = useCharacterExperience();
  const { characterLevel } = useCharacterLevel();

  return (
    <div className="flex gap-1">
      <span> {t("Experience")}:</span>
      <span>
        {characterExperience}/{Helpers.experience.getNextLevel(characterLevel)}
      </span>
    </div>
  );
};

export default React.memo(ChacraterExperience);
