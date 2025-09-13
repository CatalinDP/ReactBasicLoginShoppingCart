import { createContext, useState } from "react";
import { useUsers } from "../hooks/useUsers";

export const LoggedUserContext = createContext()

export function LoggedUserProvider({ children }) {
    const { users } = useUsers()
    const [isLoggedIn, setLogIn] = useState(() => {
        const logStateFromStorage = window.localStorage.getItem('logState')
        const logStateParsed = JSON.parse(logStateFromStorage)
        if (logStateParsed) {
            const userCredentials = window.localStorage.getItem('userCredentials')
            const userParsed = JSON.parse(userCredentials)
            const userExist = users.some(u => u.name === userParsed.user && u.password === userParsed.password)
            if (userExist) return logStateParsed ?? false
            else {
                window.localStorage.removeItem('logState')
                window.localStorage.removeItem('userCredentials')
            }
        }
        return false
    })

    const logOut = () => {
      window.localStorage.removeItem('logState')
      window.localStorage.removeItem('userCredentials')
      const logOut = false;
      setLogIn(logOut)
    }

    return (
        <LoggedUserContext.Provider value={{
            isLoggedIn,
            setLogIn,
            logOut
        }}>
            {children}
        </LoggedUserContext.Provider>
    )
}

