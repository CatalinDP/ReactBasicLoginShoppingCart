import { useState } from "react";

export function ShoppingCart() {
    const [cart, setCart] = useState([])

    const addItem = (item) => {
        setCart(() => {
            const index = cart.findIndex((u) => u.id === item.id)
            if (index !== -1) {
                const newItem = [...cart]
                newItem[index] = {...newItem[index], cantidad: newItem[index].cantidad + 1}
                return newItem
            }
            const newItem = [...cart, {...item, cantidad: item.cantidad + 1}]
            return newItem
        })
    }

    const delItem = (item) => {
        const newCart = cart.map(cartItem => cartItem.id === item.id ? {...item, cantidad: item.cantidad - 1 } : cartItem)
                .filter(itemF => itemF.cantidad > 0)
            console.log("newCART", newCart)
            setCart(newCart)
        
    }

    const delAllItems = () => {
        setCart([])
    }

    return {addItem, delItem, cart, delAllItems}
}