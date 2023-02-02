import logo from "../img/logo.svg"
import { Link } from 'react-router-dom'


function SiteHeader(){
    return ( 
        <header className="headerClass">
     <Link to="/" >
     <img src={logo} alt="logo" />
     </Link>
        <nav className="Head_Nav">
            <a href="http://localhost:3000/">Acceuil</a>
            <a href="http://localhost:3000/">A Propos</a>
        </nav>
        </header>
   );
}

export default SiteHeader;