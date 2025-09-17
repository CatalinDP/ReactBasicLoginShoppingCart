import { createContext, useState } from "react";

export const LoggedUserContext = createContext()

export function LoggedUserProvider({ children }) {
    const [isLoggedIn, setLogIn] = useState(() => {
        const logState = JSON.parse(window.localStorage.getItem('logState'))
        return logState ?? false
    })
    const [userLogout, setUserLogout] = useState(false)
     
    return (
        <LoggedUserContext.Provider value={{
            isLoggedIn,
            setLogIn,
            userLogout, 
            setUserLogout
        }}>
            {children}
        </LoggedUserContext.Provider>
    )
}

