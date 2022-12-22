import { ThemeContext } from "../utils/ThemeContext"
import { useContext, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
// import * as types from '../store/profile/types'
import { selectName,selectVisible } from "../store/profile/selectors"
import { changeName, tooggleProfile } from "../store/profile/actions"

export function ProfilePage(){
    const {theme, toggleTheme} = useContext(ThemeContext)
    const dispatch = useDispatch()

    const name = useSelector(selectName)
    const visible = useSelector(selectVisible)

    const [value, setValue] = useState('')
    
    

    


    const handleChange = () => {
        dispatch(changeName(value))
        setValue('')
    }

    return(
        <>
            <h1>Profile Page</h1>
            <p>{theme === 'light' ? 'Светлая' : 'Темная'}</p>
            <button onClick={toggleTheme}>Change Theme</button>
            <hr />
            <h2>{name}</h2>
            <input type="checkbox" checked={visible} readOnly />
            <button onClick={() => dispatch(tooggleProfile())}>Change</button>
            <br />
            <input
             type="text"
             value={value}
             onChange={(e) => setValue(e.target.value)} />
            <button onClick={handleChange}>Change name</button>
        </>
    )
}
