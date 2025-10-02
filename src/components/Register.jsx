import { useNavigate } from "react-router-dom"
import { useUsers } from "../hooks/useUsers.js"
import "./forms.css"

export function Register() {
    const {registerUser, newUser, setNewUser} = useUsers()
    const navigate = useNavigate()

    return (
        <section className="home-forms">
            <h2>Register</h2>
            <p>Please, fill this formular to create a new account</p>
            <form>
                <input type="text" placeholder="Username" value={newUser.username} onChange={e => {setNewUser(prevState => ({...prevState, username: e.target.value}))}}></input>
                <input type="password" placeholder="Password" value={newUser.password} onChange={e => {setNewUser(prevState => ({...prevState, password: e.target.value}))}} minLength={6}></input>
                <input type="password" placeholder="Confirm your password" value={newUser.passwordConfirm} onChange={e => {setNewUser(prevState => ({...prevState, passwordConfirm: e.target.value}))}}></input>
                <button type="button" onClick={() => {registerUser(newUser.password, newUser.passwordConfirm, newUser.username); navigate("/")}}>Registrarse</button>
                <button onClick={() => navigate("/")}>Volver al inicio de sesión</button>
            </form>
        </section>
    )
}