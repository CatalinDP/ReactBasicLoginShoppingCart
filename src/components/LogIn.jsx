import { useState } from "react";

import { useNavigate } from "react-router-dom";

export function LogIn({ users, onLogin }) {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const navigate = useNavigate()
  const logInUser = () => {
    const userFound = users.find((u) => u.name === username && u.password === password)
    if (userFound) {
      const login = true;
      onLogin(login)
      navigate("/dashboard")
      window.localStorage.setItem('logState', JSON.stringify(login))
      window.localStorage.setItem('userCredentials', JSON.stringify({ user: username, password: password }))
    } else {
      alert('Error en las credenciales, intentalo de nuevo')
      setUsername("")
      setPassword("")
    }

  }

  return (
    <main>
      <form>
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={username} onChange={e => { setUsername(e.target.value) }}></input>
        <input type="password" placeholder="Password" value={password} onChange={e => { setPassword(e.target.value) }}></input>
        <button type="button" onClick={logInUser} className="general-btns">Log In</button>
      </form>
      <button type="button" onClick={() => navigate("/register")} className="general-btns">Register</button>
    </main>
  )
}