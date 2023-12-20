import React, { useRef } from "react";
import useCharacterLocation from "../../store/hooks/character/use-character-location.hook";
import Locations from "../../locations/index.locations";
import DungeonImageComponent from "./DungeonImage.component";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../shared-components/Button.component";

const DungeonList = () => {
  const { i18n, t } = useTranslation();
  const { characterLocation } = useCharacterLocation();
  const dungeonList = useRef(Object.values(Locations[characterLocation]?.dungeons || {}));
  return (
    <ul className="flex flex-col gap-4">
      {dungeonList.current.length > 0 ? (
        dungeonList.current?.map((dungeon) => (
          <li key={dungeon.id} className="flex gap-2 items-center">
            <DungeonImageComponent dungeonID={dungeon.id}></DungeonImageComponent>
            <div className="w-full">
              <span className="block">{dungeon.name}</span>
              <small>{i18n.language === "en" ? dungeon.description.en : dungeon.description.tr}</small>
              <small className="block my-1 text-orange-300">{t("Dungeon Travel Info")}</small>
              <div className="mt-1">
                <ButtonComponent onClick={() => {}}>
                  <span>{t("Enter the dungeon")}</span>
                </ButtonComponent>
              </div>
            </div>
          </li>
        ))
      ) : (
        <li>{t("No dungeons found")}</li>
      )}
    </ul>
  );
};

export default React.memo(DungeonList);
