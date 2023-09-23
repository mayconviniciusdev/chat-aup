import { ChatReducer } from "@/reducer/chatReducer";
import { Message } from "@/types/message";
import { ReactNode, createContext, useContext, useReducer } from "react";

type chatContext = {
  chat: Message[];
  addMessage: (user: string, text: string) => void;
}

export const ChatContext = createContext<chatContext | null>(null)

export const ChatProvider = ({children}: {children: ReactNode}) => {
  const [chat, dispatch] = useReducer(ChatReducer, []);

  const addMessage = (user: string, text: string) => {
    dispatch({
      type: 'add',
      payload: {user, text}
    });
  }

  return (
    <ChatContext.Provider
    value={{chat, addMessage}}>
      {children}
    </ChatContext.Provider>
  )
}

export const useChat = () => useContext(ChatContext);