    import { createContext, useState } from "react"

    export const UsersContext = createContext()

    export function UsersProvider ( {children}) {
        const [users, setUsers] = useState(() => {
        const usersFromStorage = window.localStorage.getItem('users')
        const usersParsed = JSON.parse(usersFromStorage)
        if (usersParsed) return usersParsed
        return [{ id: 1, name: 'Carlos', password: '1234' }]
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