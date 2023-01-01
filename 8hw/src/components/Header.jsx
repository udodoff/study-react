import styles from './Header.module.css'
import { Outlet, NavLink } from 'react-router-dom'
export function Header(){
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
                    <li>
                        <NavLink to="/signin" style={({isActive}) => ({color: isActive ? 'green' : 'blue'})}>Signin</NavLink>
                    </li>
                    <li>
                        <NavLink to="/signup" style={({isActive}) =>({color: isActive ? 'green' : 'blue'})}>Signup</NavLink>
                    </li>
                </ul>
            </nav>
            <main>
                <Outlet/>
            </main>
        </>
    )
}