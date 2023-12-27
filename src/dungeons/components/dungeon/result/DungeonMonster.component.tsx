import React, { useCallback, useState } from "react";
import Dungeon from "../../../../locations/models/dungeon.type";

import ModalComponent from "../../../../shared-components/modal/Modal.component";
import CombatComponent from "../../../../combat/components/Combat.component";
import { useTranslation } from "react-i18next";

const DungeonMonster = ({ dungeon }: { dungeon: Dungeon }) => {
  const { t } = useTranslation();
  const [showCombat, setShowCombat] = useState(true);

  const onCLoseCombat = useCallback(() => {
    setShowCombat(false);
  }, [setShowCombat]);

  if (showCombat) {
    return (
      <ModalComponent title={t("Combat")} onClose={onCLoseCombat} hideCloseButton={true}>
        <CombatComponent dungeon={dungeon} onClose={onCLoseCombat}></CombatComponent>
      </ModalComponent>
    );
  }
};

export default React.memo(DungeonMonster);
