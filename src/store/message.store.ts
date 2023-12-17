import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import Message from "../message/models/message.type";
import { produce } from "immer";
import AppStore from "./index.store";
namespace MessageStore {
  const initialState: Message[] = [];
  const messageSlice = createSlice({
    initialState,
    name: "messages",
    reducers: {
      addMessage: (state, action: PayloadAction<{ message: string; type?: "success" | "error" }>) => {
        return produce(state, (draft) => {
          const date = new Date();
          const hours = date.getHours();
          const minutes = date.getMinutes();
          const seconds = date.getSeconds();
          const newMessage: Message = {
            id: Date.now().toString(),
            message: action.payload.message,
            created_at: `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(
              seconds
            ).padStart(2, "0")}`,
            type: action.payload.type,
          };
          draft.unshift(newMessage);
        });
      },
    },
  });
  export const actions = messageSlice.actions;
  export const reducer = messageSlice.reducer;
  export const select = {
    getMessages: (state: AppStore.RootState) => state.messages,
  };
}

export default MessageStore;
