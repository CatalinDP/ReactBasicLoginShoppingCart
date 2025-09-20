
export async function getUsers() {
    try {
        const res = await fetch("http://localhost:4000/users")
        const data = res.json()
        return data
    } catch (err) {
        console.error(err)
    }
}

    export async function createNewUser(user) {
        try {
            const res = await fetch("http://localhost:4000/users", {
                method: "POST",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({id: user.id, name: user.name, password: user.password, cart: []})
            })
            const data = await res.json()
            console.log('User created', data)
        } catch (err) {
            console.error(err)
        }
    }

    export async function addNewItem(id, item, setCart) {
        try {
            const resUser = await fetch(`http://localhost:4000/users/${id}`)
            const dataUser = await resUser.json()
            const newCart = () => {
                const userCart = dataUser.cart
                if (userCart.length > 0) {
                    const itemIndex = userCart.findIndex(element => element.id === item.id)
                    if (itemIndex >= 0) {
                        return userCart.map( (element, i) => {
                            if (itemIndex === i) {
                                return {
                                    ...element,
                                    cantidad: element.cantidad + 1
                                }       
                            }
                            return element
                        }) 
                    } else {
                            return [...userCart, {...item, cantidad: 1}]
                        }
                } else {
                    return [{...item, cantidad: 1}]
                }
            }

            const updatedCart = newCart()
            setCart(updatedCart)
            
            const res = await fetch(`http://localhost:4000/users/${id}`, {
                method: "PATCH",
                headers: {"Content-type": "application/json"},
                body: JSON.stringify({cart: updatedCart})
            })
            if (!res.ok) {
                console.error("Error:", res.status, res.statusText)
                return null
            }

        } catch (error) {
            console.log(error)
        }
    }

    export async function deleteFromCart(id, item, setCart) {
        const userRes = await fetch(`http://localhost:4000/users/${id}`)
        const dataUser = await userRes.json()
        const newCart = () => {
            const userCart = dataUser.cart
            
            const itemIndex = userCart.findIndex(element => element.id === item.id)
            
            const reducedCart = userCart.map((element, i) => {
                if (i === itemIndex) {
                    return {
                        ...element, 
                        cantidad: element.cantidad - 1
                    }
                }
                return element
            })
            return reducedCart.filter(element => element.cantidad > 0 )
        }
        const updatedCart = newCart()
        setCart(updatedCart)
        const res = await fetch(`http://localhost:4000/users/${id}`, {
            method: "PATCH",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({cart: updatedCart})
        })
        if (res.ok) {
            console.log("Objeto eliminado")
        } else {
            console.error("Error al eliminar el usuario")
        }  
    }

    export async function deleteAll(id, setCart) {
        setCart([])
        const res = await fetch(`http://localhost:4000/users/${id}`, {
            method: "PATCH",
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({cart: []})
        })
        if (res.ok) {
            console.log("Objetos eliminado")
        } else {
            console.error("Error al eliminar el usuario")
        }  
    }

