import { createContext, useEffect, useReducer } from "react";
import { cartReducer, CART_ACTION_TYPES } from "../reducers/cart";
import { useCurrentUser } from "../hooks/useCurrentUser";
import { useLoggedUsers } from "../hooks/useLoggedUsers";

export const CartContext = createContext()

function useCartReducer () {
    const {currentUser} = useCurrentUser()
    const {isLoggedIn} = useLoggedUsers()

    const [state, dispatch] = useReducer(cartReducer, [])

    useEffect(()=> {
        if (currentUser!== null && isLoggedIn) {
            return setCart
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentUser])

    const addToCart = product => dispatch({
        type: CART_ACTION_TYPES.ADD_TO_CART,
        payload: product
    })

    const removeFromCart = product => dispatch({
        type: CART_ACTION_TYPES.REMOVE_FROM_CART,
        payload: product
    })

    const clearCart = () => dispatch({
        type: CART_ACTION_TYPES.CLEAR_CART
    })

    const setCart = () => dispatch({
        type: CART_ACTION_TYPES.SET_CART,
        payload: currentUser.cart
    })

    return {addToCart, state, removeFromCart, clearCart, setCart}

}

export function CartProvider({children}) {
    
    const { state, addToCart, removeFromCart, clearCart } = useCartReducer()
    return (
        <CartContext.Provider
        value={{
            cart: state,
            addToCart,
            removeFromCart,
            clearCart
        }}
        >
            {children}
        </CartContext.Provider>
    )
}