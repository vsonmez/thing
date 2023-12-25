import { useCallback, useEffect, useRef, useState } from "react";
import DungeonComponent from "./dungeons/components/dungeon/Dungeon.component";
import MessageListComponent from "./message/components/MessageList.component";
import FooterComponent from "./shared-components/Footer.component";
import HeaderComponent from "./shared-components/Header.component";
import useCharacterLocation from "./store/hooks/character/use-character-location.hook";
import useCurrentScreen from "./store/hooks/global/use-current-screen.hook";
import useMessagesStore from "./store/hooks/message/use-message-store";
import useCharacterCurrentDungeon from "./store/hooks/character/use-character-current-dungeon.hook";
import { useTranslation } from "react-i18next";
import ModalComponent from "./shared-components/modal/Modal.component";
import useTimer from "./hooks/use-timer.hook";
import useCharacterHealth from "./store/hooks/character/use-character-health.hook";

const App = () => {
  const initialLanguage = useRef(localStorage.getItem("language") || navigator.language);
  const [isShowWarning, setIsShowWarning] = useState(true);
  const { currentScreen } = useCurrentScreen();
  const { characterLocation } = useCharacterLocation();
  const { currentDungeon } = useCharacterCurrentDungeon();
  const { addMessage } = useMessagesStore();
  const { i18n, t } = useTranslation();
  const { startTimer, timerTime, timerIsRuning, setTime } = useTimer(30);
  const { characterCurrentHealth, characterMaxHealth, increaseCharacterHealth, renewCharacter } = useCharacterHealth();

  const toggleWarning = useCallback(() => {
    setIsShowWarning(!isShowWarning);
  }, [isShowWarning, setIsShowWarning]);
  useEffect(() => {
    i18n.changeLanguage(initialLanguage.current, () => {
      addMessage("Welcome message", "success");
      addMessage("Welcome warning", "warning");
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (characterCurrentHealth < characterMaxHealth && !timerIsRuning) {
      setTime(30);
      startTimer();
    }
    // eslint-disable-next-line
  }, [characterCurrentHealth, timerIsRuning]);

  useEffect(() => {
    if (timerTime <= 0) {
      increaseCharacterHealth(1);
    }
    // eslint-disable-next-line
  }, [timerTime]);

  useEffect(() => {
    if (characterCurrentHealth < 1) {
      addMessage("You have died", "error");
      renewCharacter();
    }
    // eslint-disable-next-line
  }, [characterCurrentHealth]);

  return (
    <>
      <HeaderComponent></HeaderComponent>
      <div className={`overflow-auto h-full content ${currentDungeon || characterLocation}`}>
        {currentScreen === "message" && <MessageListComponent></MessageListComponent>}
        {currentScreen === "dungeon" && <DungeonComponent></DungeonComponent>}
      </div>
      <FooterComponent></FooterComponent>
      {isShowWarning && (
        <ModalComponent title={t("Warning")} onClose={toggleWarning}>
          <div className="bg-white rounded p-3 text-center text-[24px] text-red-500">{t("When yo die")}</div>
        </ModalComponent>
      )}
    </>
  );
};
export default App;
