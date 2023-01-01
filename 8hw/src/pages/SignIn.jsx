import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { auth } from "../store/profile/actions";

export function SignIn(){
    const [inputs, setInputs] = useState({login: '', password: ''})
    const [error, setError] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (event) => {
        event.preventDefault()
        if(inputs.login === 'rus' && inputs.password === 'ud'){
            dispatch(auth(true))
            navigate('/')
        }else{
            setError('Login or password are failed')
            setInputs({login: '', password: ''})
        }
    }

    return(
        <>
            <p>SignIn</p>
            <form action="#" onSubmit={handleSubmit}>
                <p>Login</p>
                <input 
                    type="text" 
                    name="login" 
                    value={inputs.login} 
                    onChange={(event) => setInputs((prev) => ({...prev, [event.target.name]: event.target.value}))}/>
                <p>Password</p>
                <input 
                    type="text" 
                    name="password" 
                    value={inputs.password} 
                    onChange={(event) => setInputs((prev) => ({...prev, [event.target.name]: event.target.value}))}/>
                <button type="submit">Login</button>
            </form>
            {error && <p style={{color: 'red'}}>{error}</p>}
        </>
    )
}