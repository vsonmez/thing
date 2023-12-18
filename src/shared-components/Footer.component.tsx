import React, { useCallback, useState } from "react";
import ButtonComponent from "./Button.component";
import ModalComponent from "./modal/Modal.component";
import InventoryComponent from "../inventory/components/Inventory.component";
import MarketComponent from "../market/components/Market.component";
import { useTranslation } from "react-i18next";
import CityListComponent from "../locations/components/CityList.component";
/**
 * This code is defining a functional component called Footer. It uses the useTranslation hook from a translation library to get the t function for translating text. It also uses the useState hook to manage the state of showModal and selectedTab variables.

The onChangeTab function is a callback that updates the selectedTab state and sets showModal to true. The onClose function is a callback that sets showModal to false.

The component renders a footer element with two buttons, one for "Market" and one for "Inventory and Equipments". When a button is clicked, the onChangeTab function is called with the corresponding tab name.

If showModal is true, the component renders a ModalComponent with a title based on the selected tab and two components (InventoryComponent and MarketComponent) based on the selected tab.
 */
const Footer = () => {
  const { t } = useTranslation();
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"Inventory" | "Market" | "Cities">();

  const onChangeTab = useCallback((selectedTab: "Inventory" | "Market" | "Cities") => {
    setSelectedTab(selectedTab);
    setShowModal(true);
  }, []);
  const onClose = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <>
      <footer className="flex gap-2 border-t border-gray-700 p-2">
        <ButtonComponent
          onClick={() => {
            onChangeTab("Market");
          }}
          className="p-2 border-0"
        >
          <span>{t("Market")}</span>
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            onChangeTab("Inventory");
          }}
          className="p-2 border-0"
        >
          <span>{t("Inventory And Equipments")}</span>
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            onChangeTab("Cities");
          }}
          className="p-2 border-0"
        >
          <span>{t("Cities")}</span>
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
          </>
        </ModalComponent>
      )}
    </>
  );
};

export default React.memo(Footer);
