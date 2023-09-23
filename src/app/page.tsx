"use client"

import { ChatProvider } from "@/contexts/chatContext";
import { UserProvider } from "@/contexts/userContext";

const Page = () => {
  return (
    <div>
      <UserProvider>
        <ChatProvider>
          <h1>chatAUP</h1>
        </ChatProvider>
      </UserProvider>
    </div>
  )
}

export default Page;