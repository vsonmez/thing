import MessageListComponent from "./message/components/MessageList.component";
import FooterComponent from "./shared-components/Footer.component";
import HeaderComponent from "./shared-components/Header.component";
import useCharacterLocation from "./store/hooks/character/use-character-location.hook";

const App = () => {
  const { characterLocation } = useCharacterLocation();

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className={`overflow-auto h-full content ${characterLocation}`}>
        <MessageListComponent></MessageListComponent>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
};
export default App;
