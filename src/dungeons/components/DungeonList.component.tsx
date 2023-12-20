import React, { useRef } from "react";
import useCharacterLocation from "../../store/hooks/character/use-character-location.hook";
import Locations from "../../locations/index.locations";
import { useTranslation } from "react-i18next";
import DungeonListItemComponent from "./DungeonListItem.component";

const DungeonList = () => {
  const { t } = useTranslation();
  const { characterLocation } = useCharacterLocation();
  const dungeonList = useRef(Object.values(Locations[characterLocation]?.dungeons || {}));
  return (
    <ul className="flex flex-col gap-4">
      {dungeonList.current.length > 0 ? (
        dungeonList.current?.map((dungeon) => (
          <DungeonListItemComponent key={dungeon.id} dungeon={dungeon}></DungeonListItemComponent>
        ))
      ) : (
        <li>{t("No dungeons found")}</li>
      )}
    </ul>
  );
};

export default React.memo(DungeonList);
