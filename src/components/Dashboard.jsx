import { Shop } from './Shop'
import './dashboard.css'
import { useCurrentUser } from '../hooks/useCurrentUser';
import { useLoggedUsers } from '../hooks/useLoggedUsers';
import { Header } from './Header';
import { Footer } from './Footer';

export function Dashboard() {
    const {currentUser} = useCurrentUser()
    const {logOut} = useLoggedUsers()
    let name = "";
    if (currentUser) name = currentUser.name
    return (
        <section className='dashboard'>
            <h1>Bienvenido {name}</h1>
            <button type='button' onClick={() => {logOut(); }} className='general-btns'>Log out</button>
            <Header/>
                <Shop/>
            <Footer/>
        </section>
    )
}