import logo from "../img/logo.svg"


function SiteFooter(){
    return ( <footer className="footerClass">
    <img src={logo} alt="logo"/>
    <h2>© 2020 Kasa. All rights reserved</h2>
    </footer>
    );
}

export default SiteFooter;