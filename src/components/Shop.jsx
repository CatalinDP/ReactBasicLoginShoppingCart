import { useState } from "react"
import { ShoppingCart } from "./Cart"

export function Shop() {
    const [items] = useState([
        { id: 1, nombre: "Teclado mecánico", precio: 59.99, cantidad: 0 },
        { id: 2, nombre: "Ratón inalámbrico", precio: 24.50, cantidad: 0 },
        { id: 3, nombre: "Monitor 24'' Full HD", precio: 149.00, cantidad: 0 },
        { id: 4, nombre: "Auriculares gaming", precio: 39.90, cantidad: 0 },
        { id: 5, nombre: "Alfombrilla XL", precio: 12.00, cantidad: 0 },
        { id: 6, nombre: "Disco SSD 1TB", precio: 89.99, cantidad: 0 },
        { id: 7, nombre: "Silla ergonómica", precio: 199.00, cantidad: 0 },
        { id: 8, nombre: "Webcam HD", precio: 34.75, cantidad: 0 },
        { id: 9, nombre: "Micrófono USB", precio: 45.00, cantidad: 0 },
        { id: 10, nombre: "Hub USB-C", precio: 29.99, cantidad: 0 }
    ])

    const {addItem, delItem, cart, delAllItems} = ShoppingCart()

    let total = 0
    return (
        <>
            <section className="shop-items" >
                    {
                        items.map((item) => {
                            return (
                            <div key={item.id}>
                                <p>{item.nombre} --- {item.precio}</p><button type="button" onClick={() => {addItem(item)}}>Add to cart</button>
                            </div>
                            )
                        })
                    }
            </section>
            <span>
                <h1>Shopping cart</h1>
            </span>
            <span><button className="deleteAll-btn" type="button" onClick={delAllItems}>Delete All</button></span>
            <section className="cartItems-display">
                {
                    cart.map((item) => {
                        total += (item.precio * item.cantidad)
                            return (
                            <div key={item.id}>
                                <p>{item.nombre} --- {item.precio} -- {item.cantidad}</p><button type="button" className="delete-btn" onClick={() => {delItem(item)}}>Delete from cart</button>
                            </div>
                            )
                        })
                }
            </section> 
            <span><h4>Coste total {total.toFixed(2)}€</h4></span>
        </>
    )
}