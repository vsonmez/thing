import { useCallback } from "react";
import GlobalStore from "../../global.store";
import AppStore from "../../index.store";
/**
 * This code snippet defines a custom React hook called useIsBusy that can be used to manage the busy state of a component. It uses the useAppDispatch and useAppSelector hooks from the AppStore to access the Redux store and retrieve the isBusy state value from the GlobalStore.

The setIsBusy function is a memoized callback that takes a boolean value and dispatches an action to update the isBusy state in the store.

The hook returns an object with two properties: isBusy, which represents the current busy state, and setIsBusy, which is a function to update the busy state.
 */
const useIsBusy = () => {
  const dispatch = AppStore.useAppDispatch();
  const isBusy = AppStore.useAppSelector(GlobalStore.select.isBusy);

  const setIsBusy = useCallback(
    (isBusy: boolean) => {
      dispatch(GlobalStore.actions.setIsBusy(isBusy));
    },
    [dispatch]
  );

  return {
    /** Is busy status of character */
    isBusy,
    /** Set is busy status of character */
    setIsBusy,
  };
};

export default useIsBusy;
