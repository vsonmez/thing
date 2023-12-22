import DungeonExploringResultKeys from "../dungeons/models/dungeon-exploring-result-keys.type";
import Dungeon from "../locations/models/dungeon.type";
import DungeonStore from "../store/dungeon.store";
import getRandomNumber from "./get-random-number.helper";

const getDungeonExploringResult = (amounts: DungeonStore.DungeonStoreType, dungeon: Dungeon) => {
  const trapsAmount = amounts.trapAmount;
  const monstersAmount = amounts.monsterAmount;
  const eventsAmount = amounts.eventAmount;
  const secretValue = amounts.secretAmount;

  if (monstersAmount <= 0) {
    return "boss";
  }

  const possibilities = [
    {
      key: "trap",
      value: trapsAmount > 0 ? dungeon.traps.possibility : 0,
    },
    {
      key: "monster",
      value: monstersAmount > 0 ? dungeon.monsters.possibility : 0,
    },
    {
      key: "event",
      value: eventsAmount > 0 ? dungeon.events.possibility : 0,
    },
    {
      key: "secret",
      value: secretValue > 0 ? dungeon.secrets.possibility : 0,
    },
  ];
  possibilities.sort((a, b) => {
    if (a.value > b.value) {
      return 1;
    }
    if (a.value < b.value) {
      return -1;
    }
    return 0;
  });

  const random = getRandomNumber();

  const resultKey = possibilities.find((possibility) => random <= possibility.value);

  return resultKey.key as DungeonExploringResultKeys;
};

export default getDungeonExploringResult;
