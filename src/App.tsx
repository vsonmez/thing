import { useEffect, useRef } from "react";
import DungeonComponent from "./dungeons/components/dungeon/Dungeon.component";
import MessageListComponent from "./message/components/MessageList.component";
import FooterComponent from "./shared-components/Footer.component";
import HeaderComponent from "./shared-components/Header.component";
import useCharacterLocation from "./store/hooks/character/use-character-location.hook";
import useCurrentScreen from "./store/hooks/global/use-current-screen.hook";
import useMessagesStore from "./store/hooks/message/use-message-store";
import useCharacterCurrentDungeon from "./store/hooks/character/use-character-current-dungeon.hook";
import { useTranslation } from "react-i18next";
import CreateCharacterComponent from "./character/components/CreateCharacter.component";
import useCharacterName from "./store/hooks/character/use-character-name.hook";
import HealthRegenerationComponent from "./shared-components/HealthRegeneration.component";
import CalculateIdleTimeComponent from "./shared-components/CalculateIdleTime.component";

const App = () => {
  const initialLanguage = useRef(localStorage.getItem("language") || navigator.language);
  const { characterName } = useCharacterName();
  const { currentScreen } = useCurrentScreen();
  const { characterLocation } = useCharacterLocation();
  const { currentDungeon } = useCharacterCurrentDungeon();
  const { addMessage } = useMessagesStore();
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(initialLanguage.current, () => {
      addMessage("Welcome message", "success");
      addMessage("Welcome warning", "warning");
    });
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CalculateIdleTimeComponent></CalculateIdleTimeComponent>
      <HealthRegenerationComponent></HealthRegenerationComponent>
      <HeaderComponent></HeaderComponent>
      <div className={`overflow-auto h-full content ${currentDungeon || characterLocation}`}>
        {currentScreen === "message" && <MessageListComponent></MessageListComponent>}
        {currentScreen === "dungeon" && <DungeonComponent></DungeonComponent>}
      </div>
      <FooterComponent></FooterComponent>
      {!characterName && <CreateCharacterComponent></CreateCharacterComponent>}
    </>
  );
};
export default App;
