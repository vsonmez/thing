import { useCallback } from "react";
import DungeonStore from "../../dungeon.store";
import AppStore from "../../index.store";

const useDungeon = () => {
  const dispatch = AppStore.useAppDispatch();
  const eventAmount = AppStore.useAppSelector(DungeonStore.select.eventAmount);
  const trapAmount = AppStore.useAppSelector(DungeonStore.select.trapAmount);
  const monsterAmount = AppStore.useAppSelector(DungeonStore.select.monsterAmount);
  const secretAmount = AppStore.useAppSelector(DungeonStore.select.secretAmount);
  const bossAmount = AppStore.useAppSelector(DungeonStore.select.bossAmount);

  const resetDungeon = useCallback(
    (payload: DungeonStore.DungeonStoreType) => {
      dispatch(DungeonStore.actions.reset(payload));
    },
    [dispatch]
  );

  const decreaseEventAmount = useCallback(() => {
    dispatch(DungeonStore.actions.decreaseEventAmount());
  }, [dispatch]);

  const decreaseTrapAmount = useCallback(() => {
    dispatch(DungeonStore.actions.decreaseTrapAmount());
  }, [dispatch]);

  const decreaseMonsterAmount = useCallback(() => {
    dispatch(DungeonStore.actions.decreaseMonsterAmount());
  }, [dispatch]);

  const decreaseSecretAmount = useCallback(() => {
    dispatch(DungeonStore.actions.decreaseSecretAmount());
  }, [dispatch]);

  const decreaseBossAmount = useCallback(() => {
    dispatch(DungeonStore.actions.decreaseBossAmount());
  }, [dispatch]);

  return {
    /**
     * The eventAmount property is a number that represents the amount of events in the dungeon.
     */
    eventAmount,
    /**
     * The trapAmount property is a number that represents the amount of traps in the dungeon.
     */
    trapAmount,
    /**
     * The monsterAmount property is a number that represents the amount of monsters in the dungeon.
     */
    monsterAmount,
    /**
     * The secretPassageAmount property is a number that represents the amount of secret passages in the dungeon.
     */
    secretAmount,
    /**
     * The bossAmount property is a number that represents the amount of bosses in the dungeon.
     */
    bossAmount,
    /**
     * The decreaseEventAmount method is a function that sets the amount of events in the dungeon.
     */
    decreaseEventAmount,
    /**
     * The decreaseTrapAmount method is a function that sets the amount of traps in the dungeon.
     */
    decreaseTrapAmount,
    /**
     * The decreaseMonsterAmount method is a function that sets the amount of monsters in the dungeon.
     */
    decreaseMonsterAmount,
    /**
     * The decreaseSecretAmount method is a function that sets the amount of secret passages in the dungeon.
     */
    decreaseSecretAmount,
    /**
     * The decreaseBossAmount method is a function that sets the amount of bosses in the dungeon.
     */
    decreaseBossAmount,
    /**
     * The resetDungeon method is a function that resets the dungeon.
     */
    resetDungeon,
  };
};

export default useDungeon;
