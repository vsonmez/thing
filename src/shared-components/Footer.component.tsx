import React, { useCallback, useState } from "react";
import ButtonComponent from "./Button.component";
import ModalComponent from "./modal/Modal.component";
import InventoryComponent from "../inventory/components/Inventory.component";
import MarketComponent from "../market/components/Market.component";
import { useTranslation } from "react-i18next";
import CityListComponent from "../locations/components/CityList.component";
import DungeonListComponent from "../dungeons/components/DungeonList.component";
import marketImage from "../assets/images/menu-icons/market.jpeg";
import inventoryImage from "../assets/images/menu-icons/inventory.jpeg";
import citiesImage from "../assets/images/menu-icons/cityList.jpeg";
import dungeonsImage from "../assets/images/menu-icons/dungeonList.jpeg";
/**
 * This code is defining a functional component called Footer. It uses the useTranslation hook from a translation library to get the t function for translating text. It also uses the useState hook to manage the state of showModal and selectedTab variables.

The onChangeTab function is a callback that updates the selectedTab state and sets showModal to true. The onClose function is a callback that sets showModal to false.

The component renders a footer element with two buttons, one for "Market" and one for "Inventory and Equipments". When a button is clicked, the onChangeTab function is called with the corresponding tab name.

If showModal is true, the component renders a ModalComponent with a title based on the selected tab and two components (InventoryComponent and MarketComponent) based on the selected tab.
 */
const Footer = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"Inventory" | "Market" | "Cities" | "Dungeons">();

  const onChangeTab = useCallback((selectedTab: "Inventory" | "Market" | "Cities" | "Dungeons") => {
    setSelectedTab(selectedTab);
    setShowModal(true);
  }, []);
  const onClose = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <>
      <footer className="flex sm:gap-2 border-t border-gray-700 py-1 sm:p-2">
        <ButtonComponent
          onClick={() => {
            onChangeTab("Market");
          }}
          className="sm:p-2 border-0"
        >
          <>
            <span className="hidden sm:block">{t("Market")}</span>
            <img alt="" width={48} src={marketImage} className="sm:hidden" />
          </>
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            onChangeTab("Inventory");
          }}
          className="sm:p-2 border-0"
        >
          <>
            <span className="hidden sm:block">{t("Inventory And Equipments")}</span>
            <img alt="" width={48} src={inventoryImage} className="sm:hidden" />
          </>
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            onChangeTab("Cities");
          }}
          className="sm:p-2 border-0"
        >
          <>
            <span className="hidden sm:block">{t("Cities")}</span>
            <img alt="" width={48} src={citiesImage} className="sm:hidden" />
          </>
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            onChangeTab("Dungeons");
          }}
          className="sm:p-2 border-0"
        >
          <>
            <span className="hidden sm:block">{t("Dungeons")}</span>
            <img alt="" width={48} src={dungeonsImage} className="sm:hidden" />
          </>
        </ButtonComponent>
      </footer>
      {showModal && (
        <ModalComponent
          title={t(selectedTab === "Inventory" ? "Inventory And Equipments" : selectedTab)}
          onClose={onClose}
        >
          <>
            {selectedTab === "Inventory" && <InventoryComponent></InventoryComponent>}
            {selectedTab === "Market" && <MarketComponent></MarketComponent>}
            {selectedTab === "Cities" && <CityListComponent></CityListComponent>}
            {selectedTab === "Dungeons" && <DungeonListComponent></DungeonListComponent>}
          </>
        </ModalComponent>
      )}
    </>
  );
};

export default React.memo(Footer);
