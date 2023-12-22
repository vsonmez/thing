import movingWalls from "../../dungeons/dungeon-events/moving-walls.event";
import Traps from "../../dungeons/traps/index.traps";
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
  },
  traps: {
    list: [Traps.crystalArrow, Traps.flameSpray],
    amount: 12,
    possibility: 20,
  },
  events: {
    list: [movingWalls()],
    possibility: 6,
    amount: 5,
  },
  secrets: {
    list: [],
    amount: 3,
    possibility: 4,
  },
};

export default zephyrionLabyrinth;
