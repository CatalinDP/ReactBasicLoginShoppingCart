import { Cart } from "./Cart"
import { useProducts } from "../hooks/useProducts.js"
import { useCurrentUser } from "../hooks/useCurrentUser.js"
import { useCart } from "../hooks/useCart.js"
import { useFilters } from "../hooks/useFilters.js"

export function Shop() {
    const { products } = useProducts()
    const {currentUser} = useCurrentUser()
    const { addNewItemToCart } = useCart()
    const { filterProducts } = useFilters()
    const filteredProducts = filterProducts(products)

    return (
        <>
            <Cart/>
            <section className="shop-items" >
                    {
                        filteredProducts.map((item) => {
                            return (
                            <div key={item.id}>
                                <p>{item.nombre} --- {item.precio}</p><button type="button" onClick={() => {addNewItemToCart(currentUser.id, item)}}>Add to cart</button>
                            </div>
                            )
                        })
                    }
            </section>
            {/*Cambiar el botton de lugar*/}
            
        </>
    )
}