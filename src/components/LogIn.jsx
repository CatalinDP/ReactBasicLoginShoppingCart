import { useNavigate } from "react-router-dom";
import { useLoggedUsers } from "../hooks/useLoggedUsers";
import { useEffect } from "react";
import "./forms.css"

export function LogIn() {
  const navigate = useNavigate()
  const { logInUser, loginData, setLoginData, isLoggedIn } = useLoggedUsers()

  useEffect(()=> {
    if (isLoggedIn) return navigate("/dashboard")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section className="home-forms">
      <h2>Login</h2>
      <p>Welcome to my page, please Login!</p>
      <form>
        <input type="text" placeholder="Username" value={loginData.username} onChange={e => { setLoginData({...loginData, name: e.target.value}) }}></input>
        <input type="password" placeholder="Password" value={loginData.password} onChange={e => { setLoginData({...loginData, password: e.target.value}) }}></input>
        <button type="button" onClick={() => {if (logInUser()) return navigate("/dashboard")}}>Log In</button>
      </form>
      <button type="button" onClick={() => navigate("/register")}>Register</button>
    </section>
  )
}