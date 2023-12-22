import Trap from "./models/trap.type";

type TrapKeys = "crystalArrow" | "flameSpray";

const Traps: {
  [key in TrapKeys]: Trap;
} = {
  crystalArrow: {
    difficulty: 12,
    damage: 2,
  },
  flameSpray: {
    difficulty: 11,
    damage: 4,
  },
};
export default Traps;
