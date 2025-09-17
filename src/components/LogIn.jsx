import { useNavigate } from "react-router-dom";
import { useLoggedUsers } from "../hooks/useLoggedUsers";
import { useEffect } from "react";

export function LogIn() {
  const navigate = useNavigate()
  const { logInUser, loginData, setLoginData, isLoggedIn } = useLoggedUsers()

  useEffect(()=> {
    if (isLoggedIn) return navigate("/dashboard")
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <main>
      <form>
        <h1>Login</h1>
        <input type="text" placeholder="Username" value={loginData.username} onChange={e => { setLoginData({...loginData, name: e.target.value}) }}></input>
        <input type="password" placeholder="Password" value={loginData.password} onChange={e => { setLoginData({...loginData, password: e.target.value}) }}></input>
        <button type="button" onClick={() => {if (logInUser()) return navigate("/dashboard")}  } className="general-btns">Log In</button>
      </form>
      <button type="button" onClick={() => navigate("/register")} className="general-btns">Register</button>
    </main>
  )
}