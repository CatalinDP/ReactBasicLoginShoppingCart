import { useCart } from "../hooks/useCart.js"
import "./Cart.css"
import { useId } from "react"
import { useCurrentUser } from "../hooks/useCurrentUser.js"


export function Cart() {
    const { cart, deleteItemFromCart, deleteAllFromCart} = useCart()
    const  {currentUser} = useCurrentUser()

    let total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    const cartButtonCheckedId = useId()
    return (
        <>
            <input type="checkbox" id={cartButtonCheckedId} hidden></input>
            <label htmlFor={cartButtonCheckedId} className="show-cart">Carrito</label>
            <section className="cartItems-display">
                <span><h4>Coste total {total.toFixed(2)}€</h4></span>
                <span><button type="button" onClick={() => deleteAllFromCart(currentUser.id)}>Delete All</button></span> 
                {
                    
                    cart.map((item) => {
                        return (
                            <div key={item.id}>
                                <p>{item.nombre} | {item.precio}€ | Cantidad: {item.cantidad}</p><button type="button" className="delete-btn" onClick={() => { deleteItemFromCart(currentUser.id, item) }}>Delete from cart</button>
                            </div>
                        )
                    })
                }
                
            </section>
        </>
    )
}