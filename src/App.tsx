import MessageListComponent from "./message/components/MessageList.component";
import FooterComponent from "./shared-components/Footer.component";
import HeaderComponent from "./shared-components/Header.component";

const App = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="overflow-auto h-full">
        <MessageListComponent></MessageListComponent>
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
};
export default App;
