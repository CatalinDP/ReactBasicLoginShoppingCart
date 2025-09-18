
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

