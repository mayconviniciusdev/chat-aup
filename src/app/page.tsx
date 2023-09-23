"use client"

import { Chat } from "@/components/chat";
import { ChatProvider } from "@/contexts/chatContext";
import { UserProvider } from "@/contexts/userContext";

const Page = () => {
  return (
    <div className="flex flex-col h-screen justify-center mx-auto bg-white/90">
      <UserProvider>
        <ChatProvider>
          <h1 className="text-4xl py-4 text-center text-slate-500 text-opacity-60">chatAUP</h1>

          <Chat/>
        </ChatProvider>
      </UserProvider>
    </div>
  )
}

export default Page;