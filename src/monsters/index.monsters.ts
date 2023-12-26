import Monster from "./models/monster.type";

const monsters: {
  [key: string]: Monster;
} = {
  crystalFairy: {
    name: "Crystal Fairy",
    id: "crystalFairy",
    hp: 20,
    attack: 0,
    damage: 1,
    defense: 9,
    experience: 10,
  },
  voiletCrystalFungus: {
    name: "Violet Crystal Fungus",
    id: "voiletCrystalFungus",
    hp: 16,
    attack: 0,
    damage: 1,
    defense: 7,
    experience: 10,
  },
  poisonousCrystalMiniDragon: {
    name: "Poisonous Crystal Mini Dragon",
    id: "poisonousCrystalMiniDragon",
    hp: 20,
    attack: 1,
    damage: 1,
    defense: 8,
    experience: 10,
  },
  crystalisJunior: {
    name: "Crystalis Junior",
    id: "crystalisJunior",
    hp: 40,
    attack: 2,
    damage: 3,
    defense: 10,
    experience: 20,
  },
  prismara: {
    name: "Prismara",
    id: "prismara",
    hp: 40,
    attack: 2,
    damage: 3,
    defense: 10,
    experience: 20,
  },
  zephyra: {
    name: "Zephyra",
    id: "zephyra",
    hp: 40,
    attack: 2,
    damage: 3,
    defense: 10,
    experience: 20,
  },
  aerin: {
    name: "Aerin",
    id: "aerin",
    hp: 40,
    attack: 2,
    damage: 3,
    defense: 10,
    experience: 20,
  },
};
export default monsters;
