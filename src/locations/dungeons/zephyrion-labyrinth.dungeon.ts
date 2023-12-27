import movingWalls from "../../dungeons/dungeon-events/moving-walls.event";
import Traps from "../../dungeons/traps/index.traps";
import chests from "../../items/chests.items";
import Items from "../../items/index.items";
import potions from "../../items/potions.items";
import monsters from "../../monsters/index.monsters";
import Dungeon from "../models/dungeon.type";

const zephyrionLabyrinth: Dungeon = {
  name: "Zephyrion Labyrinth",
  id: "zephyrionLabyrinth",
  description: {
    tr: "Büyülü koridorlar ve tuzaklarla dolu labirent, sihirli kristallerle aydınlatılmış.",
    en: "A maze filled with magical corridors and traps, illuminated by enchanted crystals.",
  },
  monsters: {
    list: [
      { ...monsters.voiletCrystalFungus },
      { ...monsters.poisonousCrystalMiniDragon },
      { ...monsters.crystalFairy },
    ],
    amount: 32,
    possibility: 100,
    boss: [{ ...monsters.crystalisJunior }, { ...monsters.prismara }, { ...monsters.zephyra }, { ...monsters.aerin }],
    bossAmount: 1,
  },
  traps: {
    list: [Traps.crystalArrow, Traps.flameSpray],
    amount: 12,
    possibility: 20,
  },
  events: {
    list: [movingWalls()],
    possibility: 0,
    amount: 3,
  },
  secrets: {
    list: [
      {
        ...chests.commonChest,
      },
    ],
    amount: 3,
    possibility: 4,
  },
  rewards: {
    common: {
      gold: 5,
      healingHerb: {
        ...potions.healingHerb,
        quantity: 1,
      },
      crystalPieces: {
        ...Items.miscellaneous.crystalPieces,
      },
      bread: {
        ...Items.consumables.bread,
      },
    },
    uncommon: {
      daggerUncommon: {
        ...Items.weapons.daggerUncommon,
      },
      paddedArmorUncommon: {
        ...Items.armors.paddedArmorUncommon,
      },
    },
    rare: {
      daggerRare: {
        ...Items.weapons.daggerRare,
      },
      paddedArmorRare: {
        ...Items.armors.paddedArmorRare,
      },
    },
    legendary: {
      daggerLegendary: {
        ...Items.weapons.daggerLegendary,
      },
      paddedArmorLegendary: {
        ...Items.armors.paddedArmorLegendary,
      },
    },
    epic: {
      daggerEpic: {
        ...Items.weapons.daggerEpic,
      },
      paddedArmorEpic: {
        ...Items.armors.paddedArmorEpic,
      },
    },
    mythic: {
      daggerMythic: {
        ...Items.weapons.daggerMythic,
      },
      paddedArmorMythic: {
        ...Items.armors.paddedArmorMythic,
      },
    },
  },
};

export default zephyrionLabyrinth;
