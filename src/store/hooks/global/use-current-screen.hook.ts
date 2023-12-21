import { useCallback } from "react";
import GlobalStore from "../../global.store";
import AppStore from "../../index.store";
/**
 * This code defines a custom hook called useCurrentScreen in TypeScript. It uses the useAppDispatch and useAppSelector hooks from the AppStore to get the current screen value from the global store. It also defines a setCurrentScreen function that dispatches an action to update the current screen in the global store. Finally, it returns an object with the currentScreen value and the setCurrentScreen function.
 */
const useCurrentScreen = () => {
  const dispatch = AppStore.useAppDispatch();
  const currentScreen = AppStore.useAppSelector(GlobalStore.select.currentScreen);

  const setCurrentScreen = useCallback(
    (currentScreen: "message" | "dungeon") => {
      dispatch(GlobalStore.actions.setCurrentScreen(currentScreen));
    },
    [dispatch]
  );

  return {
    /** Get current screen */
    currentScreen,
    /** Set current screen */
    setCurrentScreen,
  };
};

export default useCurrentScreen;
