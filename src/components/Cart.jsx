import { useCart } from "../hooks/useCart"

export function Cart() {
    const { cart, removeFromCart } = useCart()
    let total = cart.reduce((acc, item) => acc + item.precio * item.cantidad, 0)

    return (
        <>
            <span>
                <h1>Shopping cart</h1>
            </span>
            <section className="cartItems-display">
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
            <span><h4>Coste total {total.toFixed(2)}€</h4></span>
        </>
    )
}