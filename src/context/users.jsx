    import { createContext, useState } from "react"

    export const UsersContext = createContext()

    export function UsersProvider ( {children}) {
        const [users, setUsers] = useState(() => {
            const usersFromStorage = window.localStorage.getItem('users')
            const usersParsed = JSON.parse(usersFromStorage)
            if (usersParsed) return usersParsed
            return {}
    })

    return (
        <UsersContext.Provider
        value={{
            users,
            setUsers
        }}
        >
            {children}
        </UsersContext.Provider>
    )
    }