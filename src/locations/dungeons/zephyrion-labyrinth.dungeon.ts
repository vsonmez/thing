import movingWalls from "../../dungeons/dungeon-events/moving-walls.event";
import Traps from "../../dungeons/traps/index.traps";
import chests from "../../items/chests.items";
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
    list: [{ ...monsters.voiletCrystalFungus }, { ...monsters.poisonousCrystalMiniDragon }],
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
    possibility: 6,
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
      gold: 2,
    },
    uncommon: {},
    rare: {},
    legendary: {},
    epic: {},
    mythic: {},
  },
};

export default zephyrionLabyrinth;
