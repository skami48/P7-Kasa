import logo from "../img/logo.svg"

function SiteHeader(){
    return ( <header className="headerClass">
        <img src={logo} alt="logo"/>
        <nav className="Head_Nav">
            <a href="http://localhost:3000/">Acceuil</a>
            <a href="http://localhost:3000/">A Propos</a>
        </nav>
    </header>);
}

export default SiteHeader;