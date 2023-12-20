import React from "react";
import CharacterAttackComponent from "../character/components/CharacterAttack.component";
import CharacterDefenseComponent from "../character/components/CharacterDefense.component";
import CharacterExperienceComponent from "../character/components/CharacterExperience.component";
import CharacterHealthComponent from "../character/components/CharacterHealth.component";
import CharacterLevelComponent from "../character/components/CharacterLevel.component";
import CharacterNameComponent from "../character/components/CharacterName.component";
import CharacterGoldComponent from "../character/components/CharacterGold.component";
import CharacterDamageComponent from "../character/components/CharacterDamage.component";
import CharacterStrengthAndDexterityComponent from "../character/components/CharacterStrengthAndDexterity.component";
import LanguageComponent from "./Language.component";
import CharacterLocationComponent from "../character/components/CharacterLocation.component";
import CharacterHungerComponent from "../character/components/CharacterHunger.component";
import HeaderResponsiveMenuComponent from "./HeaderResponsiveMenu.component";
/**
 *
 * It returns a JSX element representing a header section with multiple child components.
 *
 * Each child component represents a different aspect of a character, such as
 * - character name,
 * - character level,
 * - character gold,
 * - character health,
 * - character strength,
 * - character dexterity,
 * - character defense,
 * - character attack,
 * - character damage, and experience.
 *
 */
const Header: React.FC = () => {
  return (
    <header className="p-2 border-b border-gray-700 flex gap-2 items-center ">
      <div className="hidden xl:flex">
        <CharacterNameComponent></CharacterNameComponent>
      </div>
      <CharacterLevelComponent></CharacterLevelComponent>
      <CharacterGoldComponent></CharacterGoldComponent>
      <CharacterHungerComponent></CharacterHungerComponent>
      <div className="gap-2 items-center hidden xl:flex">
        <CharacterHealthComponent></CharacterHealthComponent>
        <CharacterStrengthAndDexterityComponent></CharacterStrengthAndDexterityComponent>
        <CharacterDefenseComponent></CharacterDefenseComponent>
        <CharacterAttackComponent></CharacterAttackComponent>
        <CharacterDamageComponent></CharacterDamageComponent>
        <CharacterExperienceComponent></CharacterExperienceComponent>
        <CharacterLocationComponent></CharacterLocationComponent>
      </div>
      <div className="ml-auto hidden xl:flex">
        <LanguageComponent></LanguageComponent>
      </div>
      <HeaderResponsiveMenuComponent></HeaderResponsiveMenuComponent>
    </header>
  );
};

export default React.memo(Header);
