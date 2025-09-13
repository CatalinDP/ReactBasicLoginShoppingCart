import { useState } from "react"
import { useCart } from "../hooks/useCart"
import { Cart } from "./Cart"
import {products as initialProducts} from "../mocks/products.json"
import { useFilters } from "../hooks/useFilters"

export function Shop() {

    const { addToCart, clearCart} = useCart()
    const [products] = useState(initialProducts)
    const {filterProducts} = useFilters()
    const filteredProducts = filterProducts(products)

    return (
        <>
            <section className="shop-items" >
                    {
                        filteredProducts.map((item) => {
                            return (
                            <div key={item.id}>
                                <p>{item.nombre} --- {item.precio}</p><button type="button" onClick={() => {addToCart(item)}}>Add to cart</button>
                            </div>
                            )
                        })
                    }
            </section>
            <Cart/>
            <span><button className="deleteAll-btn" type="button" onClick={clearCart}>Delete All</button></span>
        </>
    )
}