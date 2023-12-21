import React, { useCallback, useState } from "react";
import Dungeon from "../../../locations/models/dungeon.type";
import DungeonImageComponent from "./DungeonImage.component";
import ButtonComponent from "../../../shared-components/Button.component";
import { useTranslation } from "react-i18next";
import IconInfoComponent from "../../../assets/images/svg-icons/IconInfo.component";
import useCurrentScreen from "../../../store/hooks/global/use-current-screen.hook";
import useCharacterIsInDungeon from "../../../store/hooks/character/use-character-is-in-dungeon.hook";
import useCharacterCurrentDungeon from "../../../store/hooks/character/use-character-current-dungeon.hook";

const DungeonListItem = ({ dungeon }: { dungeon: Dungeon }) => {
  const { setCharacterIsInDungeon } = useCharacterIsInDungeon();
  const { setCurrentDungeon } = useCharacterCurrentDungeon();
  const { setCurrentScreen } = useCurrentScreen();
  const { t, i18n } = useTranslation();
  const [isShowDetail, setIsShowDetail] = useState<boolean>(false);

  const toggleShowDetail = useCallback(() => {
    setIsShowDetail(!isShowDetail);
  }, [isShowDetail, setIsShowDetail]);

  const onEnterDungeon = useCallback(() => {
    setCurrentScreen("dungeon");
    setCharacterIsInDungeon(true);
    setCurrentDungeon(dungeon.id);
  }, [setCurrentScreen, setCharacterIsInDungeon, setCurrentDungeon, dungeon]);
  return (
    <li key={dungeon.id} className="relative flex overflow-hidden">
      <DungeonImageComponent dungeonID={dungeon.id}></DungeonImageComponent>
      <div className={`absolute right-[1px] bottom-[1px] left-[1px] bg-black/50 p-2`}>
        <div className="flex items-center">
          <span className="block">{dungeon.name}</span>
          <ButtonComponent className="ml-auto border-0" onClick={toggleShowDetail}>
            <IconInfoComponent></IconInfoComponent>
          </ButtonComponent>
        </div>
        {isShowDetail && (
          <>
            <small>{i18n.language === "en" ? dungeon.description.en : dungeon.description.tr}</small>
            <small className="block my-1 text-orange-300">{t("Dungeon Travel Info")}</small>
          </>
        )}
        <div className="mt-1">
          <ButtonComponent onClick={onEnterDungeon}>
            <span>{t("Enter the dungeon")}</span>
          </ButtonComponent>
        </div>
      </div>
    </li>
  );
};

export default React.memo(DungeonListItem);
