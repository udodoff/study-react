import { ADD_CHAT, DELETE_CHAT, ADD_MESSAGE } from "./actions"
const initialState = {
    default: [
      {
        author: 'user',
        text: 'one text'
      },
    ]
}

export const messageReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case ADD_CHAT:
            return{
                ...state,
                [payload]: []
            }
        case DELETE_CHAT:
            const chats = {...state}
            delete chats[payload]
            return chats
        case ADD_MESSAGE:
            return{
                ...state,
                [payload.chatName]: [
                    ...state[payload.chatName],
                    {
                        author: 'user',
                        text: payload.text
                    }
                ],
            }
        default:
            return state
    }
}