import { useUser } from "@/contexts/userContext"
import { NameInput } from "./nameInput";
import { ChatInput } from "./chatInput";
import { ChatMessages } from "./chatMessages";

export const Chat = () => {
  const userCtx = useUser();

  if(!userCtx) return null;
  if(!userCtx.user) return <NameInput/>

  return (
    <div className="mx-auto w-1/2">
      <h2 className="py-2 text-slate-500">Abaixo, histórico da conversa:</h2>
      <div className="border border-black/20 rounded-md">
        <div className="h-96 p-3 overflow-y-scroll break-words">
          <ChatMessages/>
        </div>

        <div className="border-t bg-white/50 border-black/20 p-4">
          <ChatInput name={userCtx.user}/>
        </div>

        <div className="border-t bg-white/50 border-black/20 p-4">
          <ChatInput name={'chatAUP'}/>
        </div>
    </div>
  </div>
  )
}