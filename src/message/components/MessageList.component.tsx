import React from "react";
import useMessagesStore from "../../store/hooks/message/use-message-store";
import MessageListItemComponent from "./MessageListItem.component";

const MessageList = () => {
  const { messagesList } = useMessagesStore();
  return (
    <ul className="bg-black/70 h-full">
      {messagesList.map((message) => (
        <MessageListItemComponent key={message.id} message={message}></MessageListItemComponent>
      ))}
    </ul>
  );
};

export default React.memo(MessageList);
