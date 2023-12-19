import { type } from "os";

export type MessageTypes = "success" | "error" | "warning";
type Message = {
  id: string;
  message: string;
  created_at: string;
  type: MessageTypes;
};
export default Message;
