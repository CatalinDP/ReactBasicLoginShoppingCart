import { Routes, Route } from 'react-router-dom'
import './App.css'
import { LogIn } from './components/LogIn'
import { Dashboard } from './components/Dashboard'
import { Register } from './components/Register'
import { CartProvider } from './context/cart'
import { ProtectedRoute } from './components/ProtectedRoute'
function App() {

  return (
    <main>
      <CartProvider>
      <Routes>
        <Route path='/'
          element={<LogIn />}
        />

        <Route path='/dashboard'
          element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>}
          
        />

        <Route path="/register"
          element={<Register />}
        />
      </Routes>
    </CartProvider>
    </main >
  )
}

export default App
