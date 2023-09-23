import { useChat } from "@/contexts/chatContext";
import { useUser } from "@/contexts/userContext";

export const ChatMessages = () => {
    const chatCtx = useChat();
    const userCtx = useUser();

    return (
      <div className="flex flex-col gap-1 ">
      {chatCtx?.chat.map(item => (
        <div
        key={item.id}
        className={`border border-black/20 rounded-md p-2 text-sm
        ${item.user === userCtx?.user ? 
        'self-end text-black/50 text-right' : 
        'self-start text-black/50 text-left'}`}>
          <div className="font-bold">{item.user}</div>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
    )
}