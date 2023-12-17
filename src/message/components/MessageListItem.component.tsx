import React from "react";
import Message from "../models/message.type";

const MessageListItem = ({ message }: { message: Message }) => {
  return (
    <li key={message.id} className={`border-b border-gray-800 p-1 text-[14px] last:border-0 flex items-center `}>
      <span
        className={`${!message.type && "text-gray-400"} ${message.type === "error" && "text-red-500"} ${
          message.type === "success" && "text-green-500"
        }`}
      >
        {message.message}
      </span>
      <time className="ml-auto text-gray-400">{message.created_at}</time>
    </li>
  );
};

export default React.memo(MessageListItem);
