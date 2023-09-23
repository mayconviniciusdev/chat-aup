import { Message } from "@/types/message";

type addActions = {
  type: 'add';
  payload: {user: string, text: string}
}

type chatActions = addActions;

export const ChatReducer = (state: Message[], action: chatActions) => {
  switch(action.type) {
    case 'add': 
    return[...state, {
      id: state.length,
      user: action.payload.user,
      text: action.payload.text
    }];

    default:
    return state;
  }
}