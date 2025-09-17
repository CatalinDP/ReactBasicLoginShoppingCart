import { useEffect, useState } from "react"
import confetti from "canvas-confetti"
import { useUsers } from "./useUsers"
import { useLoggedUsers } from "./useLoggedUsers"



export function useCurrentUser() {
    const { users, setUsers } = useUsers()
    const { isLoggedIn } = useLoggedUsers()
    const [currentUser, setCurrentUser] = useState(null)
    useEffect(() => {
        console.log('Users->', users)
        confetti()
        if (isLoggedIn) {
            const userCredentials = window.localStorage.getItem('userCredentials')
            if (userCredentials) {
                const userParsed = JSON.parse(userCredentials)
                const userF = Object.values(users).find(
                    (u) => u.name === userParsed.user && u.password === userParsed.password
                )
                if (userF) setCurrentUser(userF)
            }
        }
    }, [isLoggedIn, users])

    const cleanCurrentUserCart = () => {
        if (currentUser) {
            setUsers(prevState => ({
                ...prevState,
                [currentUser.id]: {
                    ...prevState[currentUser.id],
                    cart: []
                }
            }))
        }
    }

    useEffect(() => {
        if (currentUser) {
            setCart(users[currentUser.id]?.cart ?? [])
        } else {
            setCart([])
        }
    }, [currentUser, users])

    return { currentUser, cleanCurrentUserCart }
}
