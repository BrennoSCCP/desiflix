
import './header.css';
import {Link} from 'react-router-dom'

function Header(){
    return(
        <header className="Header">
            <Link className="Logo" to='/'>DesiFlix</Link>
             <Link className="favoritos" to='/favoritos'>Meus filmes</Link>
        </header>
    )
}

export default Header;