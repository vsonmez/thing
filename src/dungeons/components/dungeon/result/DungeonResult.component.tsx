import React from "react";
import DungeonExploringResultKeys from "../../../models/dungeon-exploring-result-keys.type";
import Dungeon from "../../../../locations/models/dungeon.type";
import DungeonBossComponent from "./DungeonBoss.component";
import DungeonEventComponent from "./DungeonEvent.component";
import DungeonMonsterComponent from "./DungeonMonster.component";
import DungeonSecretComponent from "./DungeonSecret.component";
import DungeonTrapComponent from "./DungeonTrap.component";

const DungeonResult = ({ resultKey, dungeon }: { resultKey: DungeonExploringResultKeys; dungeon: Dungeon }) => {
  const componentMap = {
    event: DungeonEventComponent,
    monster: DungeonMonsterComponent,
    boss: DungeonBossComponent,
    trap: DungeonTrapComponent,
    secret: DungeonSecretComponent,
  };

  const Component = componentMap[resultKey];
  return <Component dungeon={dungeon} />;
};

export default React.memo(DungeonResult);
