import React from "react";
import Dungeon from "../../locations/models/dungeon.type";
import DungeonImageComponent from "./DungeonImage.component";
import ButtonComponent from "../../shared-components/Button.component";
import { useTranslation } from "react-i18next";

const DungeonListItem = ({ dungeon }: { dungeon: Dungeon }) => {
  const { t, i18n } = useTranslation();
  return (
    <li key={dungeon.id} className="relative flex items-center justify-center">
      <DungeonImageComponent dungeonID={dungeon.id}></DungeonImageComponent>
      <div className={`w-full absolute bg-black/50 p-2 `}>
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
  );
};

export default React.memo(DungeonListItem);
