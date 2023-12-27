import React from "react";
import useMessagesStore from "../../store/hooks/message/use-message-store";
import MessageListItemComponent from "./MessageListItem.component";

const MessageList = () => {
  const { messagesList } = useMessagesStore();

  return (
    <details className="h-full" open>
      <summary className="bg-black/70 px-1 border-b border-gray-400">Message List</summary>
      <ul className="bg-black/70 h-[calc(100%-25px)] bg-fixed overflow-auto">
        {messagesList.map((message) => (
          <MessageListItemComponent key={message.id} message={message}></MessageListItemComponent>
        ))}
      </ul>
    </details>
  );
};

export default React.memo(MessageList);
