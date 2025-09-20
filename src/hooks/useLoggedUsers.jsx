import { useContext, useState, useEffect } from "react";
import { LoggedUserContext } from "../context/isUserLogged";
import { useUsers } from "./useUsers";
import { useNavigate } from "react-router-dom";

export function useLoggedUsers() {
  const logContext = useContext(LoggedUserContext)

  if (logContext === undefined) {
    throw new Error('logContext must be used within a userLoggedProvider')
  }

  const { isLoggedIn, setLogIn, userLogout, setUserLogout } = logContext
  const { users, loadUsers } = useUsers()

  useEffect(() => {
    
    const userCredentials = JSON.parse(window.localStorage.getItem('userCredentials'))
    if (isLoggedIn && userCredentials) {
      const userExist = users.some(u => u.name === userCredentials.user && u.password === userCredentials.password)
      if (userExist) return setLogIn(true)
      else {
        window.localStorage.removeItem('logState')
        window.localStorage.removeItem('userCredentials')
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [users]);

  const [loginData, setLoginData] = useState({
    name: "", password: ""
  })

  const navigate = useNavigate()

  const logInUser = () => {
    console.log("users -->>", users)
    loadUsers()
    const userFound = users.find((u) => u.name === loginData.name && u.password === loginData.password)
    if (userFound) {
      const login = true;
      setLogIn(login)
      setUserLogout(false)
      window.localStorage.setItem('logState', JSON.stringify(login))
      window.localStorage.setItem('userCredentials', JSON.stringify({ user: loginData.name, password: loginData.password }))
      return true
    } else {
      alert('Error en las credenciales, intentalo de nuevo')
      setLoginData({ name: "", password: "" })
      return false
    }
  }

  const logOut = () => {
    navigate("/", { replace: true })
    setUserLogout(true)
    setLogIn(false)
    window.localStorage.removeItem('logState')
    window.localStorage.removeItem('userCredentials')
    return true

  }
  return { isLoggedIn, setLogIn, logOut, logInUser, loginData, setLoginData, userLogout, setUserLogout }
}