import { useContext } from "react";
import { LoggedUserContext } from "../context/isUserLogged";

export function useLoggedUsers() {
    const logContext = useContext(LoggedUserContext)

    if (logContext === undefined){
        throw new Error('logContext must be used within a userLoggedProvider')
    }
    return logContext
}