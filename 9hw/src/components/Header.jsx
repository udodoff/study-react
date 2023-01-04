import styles from './Header.module.css'
import { Outlet, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useNavigate } from 'react-router-dom'
import { logOut } from '../services/firebase'


export function Header(){
    const navigate = useNavigate()
    const isAuth = useSelector((store) => store.profile.isAuth)
    const handleLogin = () => {
        navigate('/signin')
    }
    const handleSignUp = () => {
        navigate('/signup')
    }
    const handleLogout = async () => {
        await logOut()
    }


    return(
        <>
            <nav className={styles.header}>
                <ul>
                    <li>
                        <NavLink to="/" style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>Main</NavLink>
                    </li>
                    <li>
                        <NavLink to="/profile" style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>Profile</NavLink>
                    </li>
                    <li>
                        <NavLink to="/chats" style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>Chats</NavLink>
                    </li>
                    <li>
                        <NavLink to="/articles" style={({isActive}) =>({color: isActive ? 'green' : 'blue'})}>Articles</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/signin" style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>SignIn</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" style={({isActive}) =>({color: isActive ? 'green' : 'blue'})}>SignUp</NavLink>
                    </li> */}
                </ul>
                {!isAuth && (
                    <>
                    <button onClick={handleLogin}>Login</button>
                    <button onClick={handleSignUp}>Sign up</button>
                    </>
                )}
                {isAuth && (
                    <>
                    <button onClick={handleLogout}>Logout</button>

                    </>
                )}
                
                
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}