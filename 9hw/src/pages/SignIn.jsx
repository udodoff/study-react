import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import { signIn } from "../services/firebase";
import { auth } from "../store/profile/actions";


export function SignIn(){
    const [inputs, setInputs] = useState({email: '', password: ''})
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = async (event) => {
        event.preventDefault()
        setError('')
        setLoading(true)
        try {
            await signIn(inputs.email, inputs.password)
            dispatch(auth(true))
            navigate('/chats')
        } catch (error) {
            setError(error.message)
            setInputs({email: '', password: ''})
        } finally{
            setLoading(false)
        }
    }

    return(
        <>
            <p>SignIn</p>
            <form action="#" onSubmit={handleSubmit}>
                <p>Email</p>
                <input 
                    type="text" 
                    name="email" 
                    value={inputs.email} 
                    onChange={(event) => setInputs((prev) => ({...prev, [event.target.name]: event.target.value}))}/>
                <p>Password</p>
                <input 
                    type="text" 
                    name="password" 
                    value={inputs.password} 
                    onChange={(event) => setInputs((prev) => ({...prev, [event.target.name]: event.target.value}))}/>
                <button type="submit">Login</button>
            </form>

            {loading && 
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15vh' }}>
                 <CircularProgress />
            </Box>}
            {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    )
}