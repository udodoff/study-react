import {Route, Routes} from 'react-router-dom'
import { useEffect, useState } from "react"
import { PersistGate } from 'redux-persist/integration/react'
import { firebaseAuth, messagesRef } from './services/firebase'
import { Header } from "./components/Header"
import { MainPage } from "./pages/MainPage"
import { ProfilePage } from "./pages/ProfilePage"
import { ChatsPage } from "./pages/ChatsPage"
import { ChatList } from "./components/ChatList"
import { defaultContext, ThemeContext } from "./utils/ThemeContext" 
import { onValue } from 'firebase/database'
import { useDispatch } from 'react-redux'
import { persistor } from "./store"
import { Articles } from './pages/Articles'
import { SignIn } from './pages/SignIn'
import { SignUp } from './pages/SignUp'
import { PrivateRoute } from './utils/PrivateRoute'
import { PublicRoute } from './utils/PublicRoute'

import { auth } from './store/profile/actions'
import { object } from 'prop-types'
export function App(){
    const [theme, setTheme] = useState(defaultContext.theme)
    const [chats, setChats] = useState([])

    const [messageDB, setMessageDB] = useState({})
    const dispatch = useDispatch()
    const toggleTheme = () =>{
      setTheme(theme === 'light' ? 'dark' : 'light')
    }

    useEffect(() => {
      const unsubscribe = firebaseAuth.onAuthStateChanged((user) => {
        if(user){
          dispatch(auth(true))
        }else{
          dispatch(auth(false))
        }
      })
      return unsubscribe
    }, [])

    useEffect(() => {
      onValue(messagesRef, (snapshot) => {
        const data = snapshot.val()

        const newChats = Object.entries(data).map((item) => ({
          name: item[0],
          messages: item[1].messageList
        }))


        setMessageDB(data)
        setChats(newChats)
      })
    }, [])
    return(
        <>
              <PersistGate persistor={persistor}>
                <ThemeContext.Provider value={{
                  theme, toggleTheme
                }}>
                  <Routes>
                      <Route path="/" element={<Header/>}>
                          <Route index element={<MainPage/>}/>
                          <Route path="profile" element={<ProfilePage/>}/>
                          {/* <Route path="chats">
                              <Route index element={<ChatList  />} />
                              <Route 
                                  path=":chatId" 
                                  element={<ChatsPage 
                                  />} 
                              />
                          </Route> */}
                          <Route path='chats' element={<PrivateRoute/>}>
                            <Route index element={<ChatList chats={chats} messageDB={messageDB}/>}/>
                            <Route path=':chatId' element={<ChatsPage chats={chats} messageDB={messageDB}/>}/>
                          </Route>
                          <Route path="articles" element={<Articles/>}/>
                          <Route path="signin" element={<PublicRoute component={<SignIn/>}/>}/>
                          <Route path="signup" element={<SignUp/>}/>
                      </Route>
                      <Route path="*" element={<h2>404 Page not FOUND</h2>} />
                  </Routes>
                </ThemeContext.Provider>
              </PersistGate>
            
        </>
    )
}