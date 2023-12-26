import React, { useCallback, useState } from "react";
import Dungeon from "../../../../locations/models/dungeon.type";
import ModalComponent from "../../../../shared-components/modal/Modal.component";
import CombatComponent from "../../../../combat/components/Combat.component";
import { useTranslation } from "react-i18next";

const DungeonBoss = ({ dungeon }: { dungeon: Dungeon }) => {
  const [showCombat, setShowCombat] = useState(true);
  const { t } = useTranslation();
  const onCLoseCombat = useCallback(() => {
    setShowCombat(false);
  }, [setShowCombat]);
  if (showCombat) {
    return (
      <ModalComponent title={t("Combat")} onClose={onCLoseCombat}>
        <CombatComponent dungeon={dungeon} onClose={onCLoseCombat} isBoss={true}></CombatComponent>
      </ModalComponent>
    );
  }
};

export default React.memo(DungeonBoss);
