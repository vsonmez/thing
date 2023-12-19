import { useCallback } from "react";
import AppStore from "../../index.store";
import MessageStore from "../../message.store";
import { useTranslation } from "react-i18next";
import { MessageTypes } from "../../../message/models/message.type";
/**
 * This code snippet defines a custom hook called useMessagesStore, which is used to access and modify messages in the application state. It uses the useAppDispatch and useAppSelector hooks from the AppStore to get the dispatch function and select messages from the state. It also defines an addMessage function that dispatches an action to add a new message. The hook returns an object with the messages array and the addMessage function.
 */
const useMessagesStore = () => {
  const { t } = useTranslation();
  const dispatch = AppStore.useAppDispatch();
  const messagesList = AppStore.useAppSelector(MessageStore.select.getMessages);

  const addMessage = useCallback(
    (message: string, type?: MessageTypes) => {
      dispatch(
        MessageStore.actions.addMessage({
          type,
          message: t(message),
        })
      );
    },
    [dispatch, t]
  );

  return {
    /** Messages List */
    messagesList,
    /** Add Message to Message List */
    addMessage,
  };
};

export default useMessagesStore;
