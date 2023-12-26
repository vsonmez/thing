import React from "react";
import useCharacterName from "../../store/hooks/character/use-character-name.hook";
/**
 *  It uses the useCharacterName custom hook to get the characterName state value and the setCharacterName function to update it.

The useEffect hook is used to prompt the user to enter a character name if characterName is empty. When the component renders, it checks if characterName is falsy (empty) and prompts the user to enter a name using window.prompt. The entered name is then set as the new characterName value using setCharacterName.

Finally, the component renders the characterName value inside a span element.
 */
const CharacterName: React.FC = () => {
  const { characterName } = useCharacterName();

  return <span>{characterName}</span>;
};

export default React.memo(CharacterName);
