import React from "react";
import useCharacterExperience from "../../store/hooks/character/use-character-experience.hook";
/**
 * It uses the useCharacterExperience hook to get the characterExperience value. It renders a div element with two span elements inside. The first span displays the text "Experience:", and the second span displays the characterExperience value.
 */
const ChacraterExperience: React.FC = () => {
  const { characterExperience } = useCharacterExperience();

  return (
    <div className="flex gap-1">
      <span>Experience:</span>
      <span>{characterExperience}</span>
    </div>
  );
};

export default React.memo(ChacraterExperience);
