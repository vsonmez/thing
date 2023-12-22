import Trap from "./models/trap.type";

type TrapKeys = "crystalArrow" | "flameSpray";

const Traps: {
  [key in TrapKeys]: Trap;
} = {
  crystalArrow: {
    name: "Crystal Arrow",
    difficulty: 12,
    damage: 1,
  },
  flameSpray: {
    name: "Flame Spray",
    difficulty: 11,
    damage: 2,
  },
};
export default Traps;
