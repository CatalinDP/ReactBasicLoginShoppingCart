import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { UsersProvider } from './context/users.jsx'
import { LoggedUserProvider } from './context/isUserLogged.jsx'
import { FiltersProvider } from './context/filters.jsx'
import { StrictMode } from 'react'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersProvider>
      <LoggedUserProvider>
        <FiltersProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </FiltersProvider>
      </LoggedUserProvider>
    </UsersProvider>
  </StrictMode>
)
