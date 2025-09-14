import { useCart } from "../hooks/useCart"
import "./Cart.css"
import { useId } from "react"

export function Cart() {
    const { cart, removeFromCart } = useCart()
    let total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)
    const cartButtonCheckedId = useId()

    return (
        <>
            <input type="checkbox" id={cartButtonCheckedId} hidden></input>
            <label htmlFor={cartButtonCheckedId} className="show-cart">Carrito</label>
            <section className="cartItems-display">
                <span><h4>Coste total {total.toFixed(2)}€</h4></span>
                {
                    cart.map((item) => {
                        return (
                            <div key={item.id}>
                                <p>{item.nombre} --- {item.precio} -- {item.cantidad}</p><button type="button" className="delete-btn" onClick={() => { removeFromCart(item) }}>Delete from cart</button>
                            </div>
                        )
                    })
                }    
            </section>
        </>
    )
}