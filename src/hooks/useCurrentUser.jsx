import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import { useUsers } from "./useUsers"
import { useLoggedUsers } from "./useLoggedUsers"



export function useCurrentUser() {
    const { users } = useUsers()
    const { isLoggedIn } = useLoggedUsers()
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {

        confetti()
        if (isLoggedIn) {
            const userCredentials = window.localStorage.getItem('userCredentials')
            if (userCredentials) {
                const userParsed = JSON.parse(userCredentials)
                const userF = users.find(
                    (u) => u.name === userParsed.user && u.password === userParsed.password
                )
                if (userF) setCurrentUser(userF)
            }
        }
        console.log(users)
    }, [isLoggedIn, users])

    return {currentUser}
}
