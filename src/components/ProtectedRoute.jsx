import { Navigate, NavigationType } from "react-router-dom";
import { useLoggedUsers } from "../hooks/useLoggedUsers.js";

export function ProtectedRoute ({children}) {
    const { isLoggedIn, userLogout } = useLoggedUsers()
    if (!isLoggedIn && !userLogout) {
        alert('Inicia sesión primero')
        return <Navigate to="/" replace></Navigate>
    }

    return children
}