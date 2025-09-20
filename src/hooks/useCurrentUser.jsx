import { useEffect, useState } from "react"
import { useUsers } from "./useUsers"
import { useLoggedUsers } from "./useLoggedUsers"
import { useCart } from "./useCart"
import confetti from "canvas-confetti"

export function useCurrentUser() {
    const { users } = useUsers()
    const { setCart} = useCart()
    const { isLoggedIn } = useLoggedUsers()

    const [currentUser, setCurrentUser] = useState(null)
    const [prevLoggedIn, setPrevLoggedId] = useState(false)

    useEffect(() => {

        if (isLoggedIn && !prevLoggedIn) {
            confetti()
            const userCredentials = window.localStorage.getItem('userCredentials')
            if (userCredentials) {
                const userParsed = JSON.parse(userCredentials)
                const userF = users.find(
                    (u) => u.name === userParsed.user && u.password === userParsed.password
                )
                if (userF) {
                    setCurrentUser( userF)
                    setCart(userF.cart ?? [])
                }
            }
        }
        setPrevLoggedId(isLoggedIn)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoggedIn, users, prevLoggedIn])

    return { currentUser }
}
