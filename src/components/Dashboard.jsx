import { Shop } from './Shop'
import './dashboard.css'
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useLoggedUsers } from '../hooks/useLoggedUsers';
import { useNavigate } from 'react-router-dom';
import { CartProvider } from '../context/cart';
import { Header } from './Header';
import { Footer } from './Footer';

export function Dashboard() {
    const navigate = useNavigate()
    const {currentUser} = useCurrentUser()
    const {logOut} = useLoggedUsers()
    let name = "";
    if (currentUser) name = currentUser.name
    return (
        <main>
            <h1>Bienvenido {name}</h1>
            <button type='button' onClick={() => {logOut; navigate("/")}} className='general-btns'>Log out</button>
            <Header/>
            <CartProvider>
                <Shop/>
            </CartProvider>
            <Footer/>
        </main>
    )
}