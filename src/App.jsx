import { Routes, Route } from 'react-router-dom'
import './App.css'
import { LogIn } from './components/LogIn'
import { Dashboard } from './components/Dashboard'
import { Register } from './components/Register'

function App() {

  return (
    <main>
        <Routes>
          <Route path='/'
            element={<LogIn />}
          />
          <Route path='/dashboard'
            element={<Dashboard />}
          />
          <Route path="/register"
            element={<Register />}
          />
        </Routes>
    </main>
  )
}

export default App
