import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useUsers } from "../hooks/useUsers"
import { useId } from "react"

export function Register() {
    const {users, setUsers} = useUsers()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const navigate = useNavigate()
    const userId = useId()

    const registerUser = () => {
        if (password === passwordConfirm) {
            const existName = users.find(u => u.name === username)
            if (!existName) {
                const newUsersList = [...users, {id: userId, name: username, password: password}]
                setUsers(newUsersList)
                window.localStorage.setItem('users', JSON.stringify(newUsersList))
                navigate("/")
            } else {
                alert('El usuario ya existe')
            }
        } else {
            alert('Las contraseñas no coinciden')
        }
    }

    return (
        <main>
            <form>
                <h1>Login</h1>
                <input type="text" placeholder="Username" value={username} onChange={e => {setUsername(e.target.value)}}></input>
                <input type="password" placeholder="Password" value={password} onChange={e => {setPassword(e.target.value)}} minLength={6}></input>
                <input type="password" placeholder="Confirm your password" value={passwordConfirm} onChange={e => {setPasswordConfirm(e.target.value)}}></input>
                <button type="button" onClick={registerUser}>Registrarse</button>
                <button onClick={() => navigate("/")}>Volver al inicio de sesión</button>
            </form>
        </main>
    )
}