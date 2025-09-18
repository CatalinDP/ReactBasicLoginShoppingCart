import { Shop } from './Shop'
import './dashboard.css'
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useLoggedUsers } from '../hooks/useLoggedUsers';
import { Header } from './Header';
import { Footer } from './Footer';
import { useCart } from '../hooks/useCart';

export function Dashboard() {
    const {currentUser, cleanCurrentUserCart} = useCurrentUser()
    const {logOut} = useLoggedUsers()
    const {clearCart} = useCart()
    let name = "";
    if (currentUser) name = currentUser.name
    return (
        <main>
            <h1>Bienvenido {name}</h1>
            <button type='button' onClick={() => {cleanCurrentUserCart; logOut(); clearCart(); }} className='general-btns'>Log out</button>
            <Header/>
                <Shop/>
            <Footer/>
        </main>
    )
}