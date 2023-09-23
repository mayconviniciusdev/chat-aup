import { useChat } from "@/contexts/chatContext";
import { KeyboardEvent, useState } from "react";

type Props = {name: string;}

export const ChatInput = ({name}: Props) => {
	const chatCtx = useChat();
	const [textInput, setTextInput] = useState('');

	const handleKeyUpAction = (event: KeyboardEvent<HTMLInputElement>) => {
		if(event.code.toLowerCase() === 'enter') {
			if(textInput.trim() !== '') {
					chatCtx?.addMessage(name, textInput.trim());
					setTextInput('')
				}
		}
	}

	return (
		<input 
    type="text"
    className="w-full bg-transparent white/60 text-black/50 text-md outline-none"
    placeholder={`${name}, digite sua mensagem (e aparte entre)`}
    value={textInput}
    onChange={e => setTextInput(e.target.value)}
    onKeyUp={handleKeyUpAction}/>
	)
}