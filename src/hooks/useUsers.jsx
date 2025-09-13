import { useContext } from "react";
import { UsersContext } from "../context/users";

export function useUsers() {
    const usersContext = useContext(UsersContext)

    if (usersContext === undefined) {
        throw new Error('useUsers must be used within a UserProvider')
    }

    return usersContext
}