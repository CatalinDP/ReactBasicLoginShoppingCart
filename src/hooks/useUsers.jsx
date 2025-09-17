import {  useContext } from "react";
import { UsersContext } from "../context/users";

export function useUsers() {
    const usersContext = useContext(UsersContext)

    if (usersContext === undefined) {
        throw new Error('useUsers must be used within a UserProvider')
    }

    const {users, setUsers} = usersContext

    const registerUser = (password, passwordConfirm, username) => {
        if (password === passwordConfirm) {
            const existName = Object.values(users).find(u => u.name === username)
            if (!existName) {
                const newUserId = Object.keys(users).length
                const newUsersList = {...users, [newUserId]: {id: newUserId, name: username, password: password, cart: []}}
                setUsers(newUsersList)
                window.localStorage.setItem('users', JSON.stringify(Object.values(newUsersList)))
            } else {
                alert('El usuario ya existe')
            }
        } else {
            alert('Las contraseñas no coinciden')
        }
    }

    const saveUserCart = (currentUser, cart) => {
        console.log('Users', users)
        const currentUserId = currentUser.id
        const newUsers = {
            ...users,
            [currentUserId]: {
                ...users[currentUserId],
                cart: [...cart]
            }
        }
        setUsers(newUsers)
    }

    return {users, setUsers, registerUser, saveUserCart}
}