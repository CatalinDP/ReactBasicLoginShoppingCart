import { Shop } from './shop'
import '../styles/dashboard.css'

export function Dashboard({logOut, currentUser}) {
    let name = "";
    if (currentUser) name = currentUser.name
    return (
        <main>
            <h1>Bienvenido {name}</h1>
            <button type='button' onClick={logOut} className='general-btns'>Log out</button>
            <Shop/>
        </main>
    )
}