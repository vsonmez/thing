import React, { useCallback, useState } from "react";
import IconMenuComponent from "../assets/images/svg-icons/IconMenu.component";
import CharacterAttackComponent from "../character/components/CharacterAttack.component";
import CharacterDamageComponent from "../character/components/CharacterDamage.component";
import CharacterDefenseComponent from "../character/components/CharacterDefense.component";
import CharacterExperienceComponent from "../character/components/CharacterExperience.component";
import CharacterHungerComponent from "../character/components/CharacterHunger.component";
import CharacterLocationComponent from "../character/components/CharacterLocation.component";
import CharacterStrengthAndDexterityComponent from "../character/components/CharacterStrengthAndDexterity.component";
import ButtonComponent from "./Button.component";
import LanguageComponent from "./Language.component";
import CharacterNameComponent from "../character/components/CharacterName.component";

const HeaderResponsiveMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = useCallback(() => {
    setShowMenu(!showMenu);
  }, [showMenu, setShowMenu]);

  return (
    <div className="ml-auto xl:hidden relative" onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
      <ButtonComponent className="border-0 p-0" onClick={() => {}}>
        <IconMenuComponent></IconMenuComponent>
      </ButtonComponent>
      {showMenu && (
        <ul className="absolute right-0 bg-black p-2 rounded border border-gray-400 flex flex-col space-y-1">
          <li className="border-b border-gray-500">
            <CharacterNameComponent></CharacterNameComponent>
          </li>
          <li className="border-b border-gray-500">
            <CharacterStrengthAndDexterityComponent></CharacterStrengthAndDexterityComponent>
          </li>
          <li className="border-b border-gray-500">
            <CharacterDefenseComponent></CharacterDefenseComponent>
          </li>
          <li className="border-b border-gray-500">
            <CharacterAttackComponent></CharacterAttackComponent>
          </li>
          <li className="border-b border-gray-500">
            <CharacterDamageComponent></CharacterDamageComponent>
          </li>
          <li className="border-b border-gray-500">
            <CharacterExperienceComponent></CharacterExperienceComponent>
          </li>
          <li className="border-b border-gray-500">
            <CharacterLocationComponent></CharacterLocationComponent>
          </li>
          <li className="border-b border-gray-500">
            <CharacterHungerComponent></CharacterHungerComponent>
          </li>
          <li>
            <LanguageComponent></LanguageComponent>
          </li>
        </ul>
      )}
    </div>
  );
};

export default React.memo(HeaderResponsiveMenu);
