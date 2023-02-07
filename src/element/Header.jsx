import logo from "../img/logo.svg"
import { Link } from 'react-router-dom'


function SiteHeader(){
    return ( 
        <header className="headerClass">
     <Link to="/" >
     <img src={logo} alt="logo" />
     </Link>
        <nav className="Head_Nav">
            <Link to="/">Acceuil</Link>
            <Link to="/About/">A Propos</Link>
        </nav>
        </header>
   );
}

export default SiteHeader;