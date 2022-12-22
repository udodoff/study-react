import { PropTypes } from "prop-types"
import IButton from '@mui/material/Button';
import ITextField from '@mui/material/TextField';
import { useState, useEffect } from "react"
// import styles from './Form.module.css'
// import { Button } from "./Button"

export function Form({ addMessage }){
    const [text, setText] = useState("")
    
    const handleSubmit = (event) => {
        event.preventDefault()
        addMessage({author: "user", text: text})
        setText("")
    }

    useEffect(() => {
    
    }, [])

    return(
        <>
             <h1>Form</h1>   
             <form action="#" onSubmit={handleSubmit}>
                {/* <input type="text" value={text} onChange={(event) => setText(event.target.value)}/> */}
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