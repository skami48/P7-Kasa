import logo from "../img/logo.svg"
import { Link, useLocation } from 'react-router-dom'

//import AsyncImage from "./asyncImageLoading";


function SiteHeader(){

    const Location = useLocation();
    const underlineNav = (targetLocation , world)=>{
        

        const firstLocation = Location.pathname.split("/");
  
        if(firstLocation[1].toLowerCase()=== targetLocation.toLowerCase()){
         
            return (<u>{world}</u>)
        }else{
            return (<>{world}</>)

        }
        
    }

    return ( 
        <header className="headerClass">
     <Link to="/" >
     <img src={logo} alt="logo" />
     </Link>
        <nav className="Head_Nav">
            <Link  to="/">{underlineNav( "","Accueil")}</Link>
            <Link  to="/About/">{underlineNav("About", "A Propos")}</Link>
        </nav>
        </header>
   );
}

export default SiteHeader;