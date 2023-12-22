import React from "react";
import Message from "../models/message.type";
/**
 * This code snippet defines a functional component called MessageListItem that takes a prop called message. It renders a list item (li) with a border, padding, and text styling. The content of the list item includes a span element that displays the message.message value and a time element that displays the message.created_at value. The class name of the span element is dynamically set based on the message.type value, which determines the text color. The key prop is set to message.id to help React efficiently update the list.
 */
const MessageListItem = ({ message }: { message: Message }) => {
  return (
    <li key={message.id} className="border-b border-black p-1 text-[14px] last:border-0 flex items-center">
      <span
        className={`${!message.type && "text-gray-400"} ${message.type === "error" && "text-red-500"} ${
          message.type === "success" && "text-green-500"
        } ${message.type === "warning" && "text-yellow-500"}`}
      >
        {message.message}
      </span>
      <time className="ml-auto text-gray-400">{message.created_at}</time>
    </li>
  );
};

export default React.memo(MessageListItem);
