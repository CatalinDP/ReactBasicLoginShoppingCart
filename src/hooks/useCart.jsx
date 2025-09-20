import { useContext } from "react";
import { CartContext } from "../context/cart";
import { addNewItem, deleteFromCart, deleteAll } from "../services/users";

export const useCart = () => {
    const context = useContext(CartContext)

    if (context === undefined) {
        throw new Error('Cart context must be used within a cart provider')
    }

    const {cart, setCart} = context

    const addNewItemToCart = (id, item) => {
        addNewItem(id, item, setCart)
    }

    const deleteItemFromCart = ( id, item) => {
        deleteFromCart(id, item, setCart)
    }

    const deleteAllFromCart= (id) => {
        deleteAll(id, setCart)
    }

    return {cart, setCart, addNewItemToCart, deleteItemFromCart, deleteAllFromCart}
}