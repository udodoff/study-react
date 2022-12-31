import {Route, Routes} from 'react-router-dom'
import { useState } from "react"
import { Provider } from "react-redux"
import { PersistGate } from 'redux-persist/integration/react'

import { Header } from "./components/Header"
import { MainPage } from "./pages/MainPage"
import { ProfilePage } from "./pages/ProfilePage"
import { ChatsPage } from "./pages/ChatsPage"
import { ChatList } from "./components/ChatList"
import { defaultContext, ThemeContext } from "./utils/ThemeContext" 
import { store, persistor } from "./store"

export function App(){
    const [theme, setTheme] = useState(defaultContext.theme)
    
    const toggleTheme = () =>{
      setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return(
        <>
            <Provider store={store}>
              <PersistGate persistor={persistor}>
                <ThemeContext.Provider value={{
                  theme, toggleTheme
                }}>
                  <Routes>
                      <Route path="/" element={<Header/>}>
                          <Route index element={<MainPage/>}/>
                          <Route path="profile" element={<ProfilePage/>}/>
                          <Route path="chats">
                              <Route index element={<ChatList  />} />
                              <Route 
                                  path=":chatId" 
                                  element={<ChatsPage 
                                  />} 
                              />
                          </Route>
                      </Route>
                      <Route path="*" element={<h2>404 Page not FOUND</h2>} />
                  </Routes>
                </ThemeContext.Provider>
              </PersistGate>
            </Provider>
        </>
    )
}