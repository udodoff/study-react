import { PropTypes } from "prop-types"
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux";
import { addMessage, addMessageWithReply } from "../store/messages/actions";
import { useParams } from "react-router-dom";
import { push, set, remove } from "firebase/database";
import { getMessageListById } from "../services/firebase";

export function Form(){
    const [text, setText] = useState("")
    const dispatch = useDispatch()
    const {chatId} = useParams()

    const handleSubmit = (event) => {
        event.preventDefault()
        
        dispatch(addMessageWithReply(chatId, {
            author: 'user',
            text
        }))
        setText("")
        push(getMessageListById(chatId), {
            author: 'user',
            text
        })
    }

    useEffect(() => {
    
    }, [])

    return(
        <>
             <h1>Form</h1>   
             <form action="#" onSubmit={handleSubmit}>
                <ITextField id="standard-basic" autoFocus value={text} onChange={(event) => setText(event.target.value)} label="Input message" variant="standard" sx={{
                    marginTop: 2,
                    marginBottom: 4.3
                  }}
                 />
                <IButton 
                variant="contained" 
                sx={{
                    height: 30,
                    marginLeft: 2,
                    marginTop: 4.3
                  }}
                type="submit">
                    Отправить
                </IButton>
             </form>
        </>
    )
}
Form.propTypes = {
    addMessage: PropTypes.func
}