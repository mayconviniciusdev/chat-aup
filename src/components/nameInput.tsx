import { useUser } from "@/contexts/userContext";
import { KeyboardEvent, useState } from "react"

export const NameInput = () => {
  const userCtx = useUser();
  const [nameInput, setNameInput] = useState('');

  const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.code.toLowerCase() === 'enter') {
      if(nameInput.trim() !== '' && nameInput !== 'bote') {
        userCtx?.setUser(nameInput.trim())
      }
    }
  }

  return (
    <div className="mx-auto">
      <div className="flex items-center text-lg">
        <input
        placeholder="Digite seu nome..."
        type="text"
        className="rounded-md p-4 outline-none text-black/50 drop-shadow-md"
        value={nameInput}
        onChange={e => setNameInput(e.target.value)}
        onKeyUp={handleKeyUpAction}/>
      </div>
    </div>
  )
}