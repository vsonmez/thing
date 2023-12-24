import { useEffect } from "react";
import DungeonComponent from "./dungeons/components/dungeon/Dungeon.component";
import MessageListComponent from "./message/components/MessageList.component";
import FooterComponent from "./shared-components/Footer.component";
import HeaderComponent from "./shared-components/Header.component";
import useCharacterLocation from "./store/hooks/character/use-character-location.hook";
import useCurrentScreen from "./store/hooks/global/use-current-screen.hook";
import useMessagesStore from "./store/hooks/message/use-message-store";
import useCharacterCurrentDungeon from "./store/hooks/character/use-character-current-dungeon.hook";
import { useTranslation } from "react-i18next";

const App = () => {
  const { currentScreen } = useCurrentScreen();
  const { characterLocation } = useCharacterLocation();
  const { currentDungeon } = useCharacterCurrentDungeon();
  const { addMessage } = useMessagesStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(navigator.language, () => {
      addMessage("Welcome message", "success");
      addMessage("Welcome warning", "warning");
    });
  }, []);

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className={`overflow-auto h-full content ${currentDungeon || characterLocation}`}>
        {currentScreen === "message" && <MessageListComponent></MessageListComponent>}
        {currentScreen === "dungeon" && <DungeonComponent></DungeonComponent>}
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
};
export default App;
