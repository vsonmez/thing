import DungeonComponent from "./dungeons/components/dungeon/Dungeon.component";
import MessageListComponent from "./message/components/MessageList.component";
import FooterComponent from "./shared-components/Footer.component";
import HeaderComponent from "./shared-components/Header.component";
import useCharacterLocation from "./store/hooks/character/use-character-location.hook";
import useCurrentScreen from "./store/hooks/global/use-current-screen.hook";

const App = () => {
  const { currentScreen } = useCurrentScreen();
  const { characterLocation } = useCharacterLocation();

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className={`overflow-auto h-full content ${characterLocation}`}>
        {currentScreen === "message" && <MessageListComponent></MessageListComponent>}
        {currentScreen === "dungeon" && <DungeonComponent></DungeonComponent>}
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
};
export default App;
