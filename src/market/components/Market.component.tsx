import React, { useCallback, useState } from "react";
import MarketArmorListComponent from "./MarketArmorList.component";
import MarketWeaponListComponent from "./MarketWeaponList.component";
import { useTranslation } from "react-i18next";
import ButtonComponent from "../../shared-components/Button.component";
import MarketConsumableListComponent from "./MarketConsumableList.component";
/**
 * It renders a header with the title "Market" and two buttons for selecting between "Armors" and "Weapons".
 *
 * The selected tab is stored in the selectedTab state variable, which is initially set to "armors".
 *
 * When a button is clicked, the onChangeTab function is called to update the selected tab state. Depending on the selected tab, it conditionally renders either the MarketArmorListComponent or the MarketWeaponListComponent.
 */
const Market: React.FC = () => {
  const { t } = useTranslation();
  const [selectedTab, setSelectedTab] = useState<"armors" | "weapons" | "consumables">("armors");

  const onChangeTab = useCallback((selectedTab: "armors" | "weapons" | "consumables") => {
    setSelectedTab(selectedTab);
  }, []);

  return (
    <div>
      <div className="flex gap-2">
        <ButtonComponent
          onClick={() => onChangeTab("armors")}
          className={`px-2 py-1 ${selectedTab === "armors" ? "bg-gray-300 text-black" : ""}`}
        >
          <>{t("Armors")}</>
        </ButtonComponent>
        <ButtonComponent
          onClick={() => onChangeTab("weapons")}
          className={`px-2 py-1 ${selectedTab === "weapons" ? "bg-gray-300 text-black" : ""}`}
        >
          <>{t("Weapons")}</>
        </ButtonComponent>
        <ButtonComponent
          onClick={() => onChangeTab("consumables")}
          className={`px-2 py-1 ${selectedTab === "consumables" ? "bg-gray-300 text-black" : ""}`}
        >
          <>{t("Consumables")}</>
        </ButtonComponent>
      </div>
      {selectedTab === "armors" && <MarketArmorListComponent></MarketArmorListComponent>}
      {selectedTab === "weapons" && <MarketWeaponListComponent></MarketWeaponListComponent>}
      {selectedTab === "consumables" && <MarketConsumableListComponent></MarketConsumableListComponent>}
    </div>
  );
};

export default React.memo(Market);
