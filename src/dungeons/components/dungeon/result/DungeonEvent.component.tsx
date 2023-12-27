import React, { useCallback, useEffect, useRef, useState } from "react";
import useDungeonLog from "../../../../store/hooks/dungeon/use-dungeon-log.hook";
import { useTranslation } from "react-i18next";
import Dungeon from "../../../../locations/models/dungeon.type";
import Helpers from "../../../../helpers/index.helpers";
import useDungeon from "../../../../store/hooks/dungeon/use-dungeon.store";
import CombatComponent from "../../../../combat/components/Combat.component";
import ModalComponent from "../../../../shared-components/modal/Modal.component";

const DungeonEvent = ({ dungeon }: { dungeon: Dungeon }) => {
  const [eventType, setEventType] = useState("");
  const { decreaseEventAmount } = useDungeon();
  const { addDungeonLog } = useDungeonLog();
  const { t } = useTranslation();
  const event = useRef(Helpers.getRandomElementFromArray(dungeon.events.list));

  const onCLoseCombat = useCallback(() => {
    setEventType("");
  }, [setEventType]);

  useEffect(() => {
    decreaseEventAmount();
    addDungeonLog(`${t(event.current.message)}`, "error");
    switch (event.current.event) {
      case "monsterEvent":
        setEventType("monsterEvent");
        break;
      default:
        break;
    }
    // eslint-disable-next-line
  }, []);

  return (
    <>
      {eventType === "monsterEvent" && (
        <ModalComponent title={t("Combat")} onClose={onCLoseCombat} hideCloseButton={true}>
          <CombatComponent
            dungeon={dungeon}
            onClose={onCLoseCombat}
            eventMoster={event.current.monster}
          ></CombatComponent>
        </ModalComponent>
      )}
    </>
  );
};

export default React.memo(DungeonEvent);
