import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { signUp } from "../services/firebase";

import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export function SignUp(){
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
            await signUp(inputs.email, inputs.password)
            navigate('/signin')
        } catch (error) {
            setError(error.message)
            setInputs({email: '', password: ''})
        } finally{
            setLoading(false)
        }

    }

    return(
        <>
            <p>SignUp</p>
            <form action="#" onSubmit={handleSubmit}>
                <p>Email</p>
                <input 
                    type="email" 
                    name="email" 
                    value={inputs.email} 
                    onChange={(event) => setInputs((prev) => ({...prev, [event.target.name]: event.target.value}))}/>
                <p>Password</p>
                <input 
                    type="text" 
                    name="password" 
                    value={inputs.password} 
                    onChange={(event) => setInputs((prev) => ({...prev, [event.target.name]: event.target.value}))}/>
                <button type="submit">Sign up</button>
            </form>
            
            {loading && 
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '15vh' }}>
                 <CircularProgress />
            </Box>}


            {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    )
}