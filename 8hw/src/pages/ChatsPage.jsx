import { useParams, Navigate } from 'react-router-dom'
import { Form } from "../components/Form"
import { MessageList } from "../components/MessageList"
import { ChatList } from "../components/ChatList"
import { selectMessage } from "../store/messages/selectors"
import { useSelector } from "react-redux"
// import Box from '@mui/material/Box';
// import styles from '../components/MainPage.module.css'

export function ChatsPage(){
    const {chatId} = useParams()
    const messages = useSelector(selectMessage)
    
    

    if(chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }
    return (
        <>
            <h1>Welcome to chat!</h1>
            <ChatList/>
            <Form />
            <MessageList messages={chatId ? messages[chatId] : []} />
        </>
    )
}
