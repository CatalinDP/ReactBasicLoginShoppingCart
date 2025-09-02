import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import './App.css'
import { LogIn } from './components/Login'
import { Dashboard } from './components/Dashboard'
import confetti from 'canvas-confetti'
import { Register } from './components/Register'

function App() {
  const navigate = useNavigate()

  const [users, setUsers] = useState(() => {
    const usersFromStorage = window.localStorage.getItem('users')
    const usersParsed = JSON.parse(usersFromStorage)
    if (usersParsed) return usersParsed
    return [{ id: 1, name: 'Carlos', password: '1234' }]
  })

  const [currentUser, setCurrentUser] = useState(null)

  const [isLoggedIn, setLogIn] = useState(() => {
    const logStateFromStorage = window.localStorage.getItem('logState')
    const logStateParsed = JSON.parse(logStateFromStorage)
    if (logStateParsed) {
      const userCredentials = window.localStorage.getItem('userCredentials')
      const userParsed = JSON.parse(userCredentials)
      const userExist = users.some(u => u.name === userParsed.user && u.password === userParsed.password)
      if (userExist) return logStateParsed ?? false
        else {
        window.localStorage.removeItem('logState')
        window.localStorage.removeItem('userCredentials')
      }
    }
    return false
  })

  useEffect(() => {
    confetti()
    if (isLoggedIn) {
      const userCredentials = window.localStorage.getItem('userCredentials')
      if (userCredentials) {
        const userParsed = JSON.parse(userCredentials)
        const userF = users.find(
          (u) => u.name === userParsed.user && u.password === userParsed.password
        )
        if (userF) setCurrentUser(userF)
      }
    }
    console.log(users)
  }, [isLoggedIn, users])


  const logOut = () => {
    window.localStorage.removeItem('logState')
    window.localStorage.removeItem('userCredentials')
    const logOut = false;
    setLogIn(logOut)
    navigate("/")
  }

  return (
    <main>
      <Routes>
        <Route path='/' 
          element={<LogIn users={users} 
          onLogin={setLogIn} />}/>
        <Route path='/dashboard' 
          element={<Dashboard logOut={logOut} 
          currentUser={currentUser}/>}/>
        <Route path="/register" element={<Register setUsers={setUsers} users={users}/>}/>
      </Routes>
    </main>
  )
}

export default App
