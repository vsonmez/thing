import { type } from "os";

type Message = {
  id: string;
  message: string;
  created_at: string;
  type: "success" | "error";
};
export default Message;
