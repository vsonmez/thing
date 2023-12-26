import Constants from "../constants/index.constants";
import Item from "../items/models/item-global.type";
import { DungeonRewards } from "../locations/models/dungeon.type";
import Monster from "../monsters/models/monster.type";
import Helpers from "./index.helpers";

export const attackToCharacter = (monster: Monster) => {
  const attackDice = Helpers.getRandomNumber(1, 20);
  const isCritical = attackDice === 20;
  const monsterTotalAttack = attackDice + monster.attack;
  const monsterDamageDice = Helpers.getRandomNumber(1, monster.damage);
  return {
    isCritical,
    monsterTotalAttack,
    monsterDamageDice,
  };
};
export const attackToMonster = (characterAttack: number, characterDamage: number) => {
  const attackDice = Helpers.getRandomNumber(1, 20);
  const isCritical = attackDice >= 20;
  const characterTotalAttack = attackDice + characterAttack;
  const characterDamageDice = Helpers.getRandomNumber(1, characterDamage);
  return {
    isCritical,
    characterTotalAttack,
    characterDamageDice,
  };
};

export const getCombatReward = (rewards: DungeonRewards, isBoss: boolean = false) => {
  const possibilities = [
    Constants.mythicItemPossibility,
    Constants.epicItemPossibility,
    Constants.legendaryItemPossibility,
    Constants.rareItemPossibility,
    Constants.uncommonItemPossibility,
    Constants.commonItemPossibility,
  ];
  let randomNumberMax: number = 100;
  if (isBoss) {
    randomNumberMax = Constants.rareItemPossibility;
  }
  const randomNumber = Helpers.getRandomNumber(1, randomNumberMax);
  const possibility = possibilities.find((possibility) => randomNumber <= possibility);
  let rewardRairity: {
    [key: string]: number | Item;
  };
  if (possibility > Constants.commonItemPossibility) {
    return undefined;
  }
  if (possibility <= Constants.commonItemPossibility && possibility > Constants.uncommonItemPossibility) {
    rewardRairity = rewards.common;
  }
  if (possibility <= Constants.uncommonItemPossibility && possibility > Constants.rareItemPossibility) {
    rewardRairity = rewards.uncommon;
  }
  if (possibility <= Constants.rareItemPossibility && possibility > Constants.legendaryItemPossibility) {
    rewardRairity = rewards.rare;
  }
  if (possibility <= Constants.legendaryItemPossibility && possibility > Constants.epicItemPossibility) {
    rewardRairity = rewards.epic;
  }
  if (possibility <= Constants.epicItemPossibility && possibility > Constants.mythicItemPossibility) {
    rewardRairity = rewards.legendary;
  }
  if (possibility <= Constants.mythicItemPossibility) {
    rewardRairity = rewards.mythic;
  }
  if (rewardRairity) {
    return Helpers.getRandomElementFromArray(Object.values(rewardRairity));
  }
  return null;
};
