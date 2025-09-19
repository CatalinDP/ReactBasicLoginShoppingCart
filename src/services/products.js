
export async function getProducts() {
    try {
        const res = await fetch("http://localhost:4000/products")
        const data = res.json()
        return data
    } catch (err) {
        console.error(err)
    }
}