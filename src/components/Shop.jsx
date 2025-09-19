import { useCart } from "../hooks/useCart"
import { Cart } from "./Cart"
import { useProducts } from "../hooks/useProducts"

export function Shop() {

    const { addToCart, clearCart} = useCart()
    const { products } = useProducts()
    return (
        <>
            <Cart/>
            <section className="shop-items" >
                    {
                        products.map((item) => {
                            return (
                            <div key={item.id}>
                                <p>{item.nombre} --- {item.precio}</p><button type="button" onClick={() => {addToCart(item)}}>Add to cart</button>
                            </div>
                            )
                        })
                    }
            </section>
            {/*Cambiar el botton de lugar*/}
            <span><button className="deleteAll-btn" type="button" onClick={clearCart}>Delete All</button></span> 
        </>
    )
}