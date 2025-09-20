import {  useContext } from "react";
import { UsersContext } from "../context/users";
import { createNewUser } from "../services/users";

export function useUsers() {
    const usersContext = useContext(UsersContext)

    if (usersContext === undefined) {
        throw new Error('useUsers must be used within a UserProvider')
    }

    const {users, newUser, setNewUser, loadUsers} = usersContext


    const registerUser = (password, passwordConfirm, username) => {
        if (password === passwordConfirm) {
            const id = users.length + 1
            const user = {id: id, name: username, password: password}
            createNewUser(user)
            loadUsers()
        }
    }


    return {users, newUser, setNewUser, registerUser, loadUsers}
}