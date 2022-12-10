import { useEffect, useState } from "react"
import { Form } from "./components/Form"
import { MessageList } from "./components/MessageList"
import { ChatList } from "./components/ChatList"
import Box from '@mui/material/Box';
import { display } from "@mui/system";

export function App(){
    const [messages, setMessages] = useState([])
    const [chats, setChat] = useState([{id: 1, name: "Mashka"}, {id: 2, name: "Sashka"}, {id: 3, name: "Optimus Prime"},])

    const addMessage = (newMessage) => {
        setMessages([...messages, newMessage])
    }
    
    useEffect(() => {
        if(messages.length === 0){
            return
        }
        if(messages[messages.length - 1].author === "admin"){
            const timeout = setTimeout(() => {
                addMessage({
                    author: "bot",
                    text: "im bot"
                })
            }, 1500);
        
        return() => {
            clearTimeout(timeout)
        }}
    }, [messages])

    return (
        <>
            <h1>Welcome to chat!</h1>
            
            
            <Box sx={{display: "flex"}}>
            <ChatList/>
            <Box>
            <MessageList messages = {messages}/>
            <Form addMessage = {addMessage}/>
            </Box>
            </Box>
            
        </>
    )
}
