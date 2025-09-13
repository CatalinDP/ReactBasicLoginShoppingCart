import { useContext } from "react";
import { CartContext } from "../context/cart";

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('Cart context must be used within a cart provider')
    }

    return context
}