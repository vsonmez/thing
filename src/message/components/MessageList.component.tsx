import React, { useCallback, useEffect, useState } from "react";
import useMessagesStore from "../../store/hooks/message/use-message-store";
import MessageListItemComponent from "./MessageListItem.component";

const MessageList = () => {
  const { messagesList } = useMessagesStore();
  const [cssClass, setCssClass] = useState<string>();
  const [clickedOnMessage, setClickedOnMessage] = useState(false);

  const onMessageClick = useCallback(() => {
    setClickedOnMessage(true);
    setCssClass("");
  }, [setClickedOnMessage]);

  useEffect(() => {
    setCssClass("");
    const timeOut = setTimeout(() => {
      setCssClass("opacity-30");
      setClickedOnMessage(false);
    }, 5000);
    return () => clearTimeout(timeOut);
  }, [messagesList, clickedOnMessage]);
  return (
    <ul onClick={onMessageClick} className={`bg-black/70 h-full bg-fixed overflow-auto ${cssClass} transition-opacity`}>
      {messagesList.map((message) => (
        <MessageListItemComponent key={message.id} message={message}></MessageListItemComponent>
      ))}
    </ul>
  );
};

export default React.memo(MessageList);
