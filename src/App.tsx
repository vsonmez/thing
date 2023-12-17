import FooterComponent from "./shared-components/Footer.component";
import HeaderComponent from "./shared-components/Header.component";

const App = () => {
  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className="overflow-auto h-full">
        {/* <MarketComponent></MarketComponent>
        <InventoryComponent></InventoryComponent> */}
      </div>
      <FooterComponent></FooterComponent>
    </>
  );
};
export default App;
