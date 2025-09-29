import { useEffect, useState } from "react";
import { getProducts } from "../services/products";

export function useProducts () {
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function loadProducts() {
            const products = await getProducts()
             setProducts(products)
             console.log('Productos cargaados')
        }
        loadProducts()
    }, [])

    return { products }
}