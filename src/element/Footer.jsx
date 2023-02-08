import logo from "../img/logo.svg"
import AsyncImage from "./asyncImageLoading";


function SiteFooter(){
    return ( <footer className="footerClass">
    <AsyncImage src={logo} alt="logo"/>
    <h2>© 2020 Kasa. All rights reserved</h2>
    </footer>
    );
}

export default SiteFooter;