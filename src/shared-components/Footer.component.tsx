import React, { useCallback, useState } from "react";
import ButtonComponent from "./Button.component";
import ModalComponent from "./modal/Modal.component";
import InventoryComponent from "../inventory/components/Inventory.component";
import MarketComponent from "../market/components/Market.component";

const Footer = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedTab, setSelectedTab] = useState<"inventory" | "market">();

  const onChangeTab = useCallback((selectedTab: "inventory" | "market") => {
    setSelectedTab(selectedTab);
    setShowModal(true);
  }, []);
  const onClose = useCallback(() => {
    setShowModal(false);
  }, []);
  return (
    <>
      <footer className="flex gap-2">
        <ButtonComponent
          onClick={() => {
            onChangeTab("market");
          }}
          className="p-2 border-0"
        >
          <span>Market</span>
        </ButtonComponent>
        <ButtonComponent
          onClick={() => {
            onChangeTab("inventory");
          }}
          className="p-2 border-0"
        >
          <span>Inventory</span>
        </ButtonComponent>
      </footer>
      {showModal && (
        <ModalComponent title={String(selectedTab).toUpperCase()} onClose={onClose}>
          <>
            {selectedTab === "inventory" && <InventoryComponent></InventoryComponent>}
            {selectedTab === "market" && <MarketComponent></MarketComponent>}
          </>
        </ModalComponent>
      )}
    </>
  );
};

export default React.memo(Footer);
