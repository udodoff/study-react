import { useEffect, useState } from "react"
import { useParams, Navigate } from 'react-router-dom'
import { Form } from "../components/Form"
import { MessageList } from "../components/MessageList"
import { ChatList } from "../components/ChatList"
// import Box from '@mui/material/Box';
// import styles from '../components/MainPage.module.css'

export function ChatsPage({onAddChat, onAddMessage, messages, chats}){
    const {chatId} = useParams()
    
    
    useEffect(() => {
        if (chatId && 
            messages[chatId]?.length > 0 && 
            messages[chatId][messages[chatId].length - 1].author === 'user'
          ) {
          const timeout = setTimeout(() => {
            onAddMessage(chatId, {
              author: 'bot',
              text: 'Im BOT'
            })
          }, 1500)
    
          return () => {
            clearTimeout(timeout)
          }
        }
    }, [messages, chatId])

    const handleAddMessage = (massage) => {
        if (chatId) {
          onAddMessage(chatId, massage)
        }
    }
    if(chatId && !messages[chatId]) {
        return <Navigate to="/chats" replace />
    }
    return (
        <>
            <h1>Welcome to chat!</h1>
            <ChatList chats={chats} onAddChat={onAddChat} />
            <Form addMessage={handleAddMessage} />
            <MessageList messages={chatId ? messages[chatId] : []} />
        </>
    )
}
