import { createContext, useState } from "react"
import { getUsers } from "../services/users"
import { useEffect } from "react"

export const UsersContext = createContext()
export function UsersProvider({ children }) {
    const [newUser, setNewUser] = useState({ username: "", password: "", passwordConfirm: "" })

    const [users, setUsers] = useState([])

    async function loadUsers() {
        try {
            const data = await getUsers()
            setUsers(data)
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        loadUsers()
    }, [])

    return (
        <UsersContext.Provider
            value={{
                users,
                setUsers,
                newUser,
                setNewUser,
                loadUsers
            }}
        >
            {children}
        </UsersContext.Provider>
    )
}