import React, { useCallback, useState } from "react";
import Dungeon from "../../../../locations/models/dungeon.type";

import ModalComponent from "../../../../shared-components/modal/Modal.component";
import CombatComponent from "../../../../combat/Combat.component";

const DungeonMonster = ({ dungeon }: { dungeon: Dungeon }) => {
  const [showCombat, setShowCombat] = useState(true);

  const onCLoseCombat = useCallback(() => {
    setShowCombat(false);
  }, [setShowCombat]);

  if (showCombat) {
    return (
      <ModalComponent title="Combat" onClose={onCLoseCombat}>
        <CombatComponent dungeon={dungeon} />
      </ModalComponent>
    );
  }
};

export default React.memo(DungeonMonster);
