import React from "react";
import Dungeon from "../../locations/models/dungeon.type";
import DungeonImageComponent from "./DungeonImage.component";
import ButtonComponent from "../../shared-components/Button.component";
import { useTranslation } from "react-i18next";

const DungeonListItem = ({ dungeon }: { dungeon: Dungeon }) => {
  const { t, i18n } = useTranslation();
  console.log(i18n.language);
  console.log(dungeon.name);
  console.log(dungeon.description[i18n.language]);
  return (
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
  );
};

export default React.memo(DungeonListItem);
