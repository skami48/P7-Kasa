import { Link } from "react-router-dom";

export default function SiteNotFound(){
    return (
        <div className="url404">
            <div className="big404">404</div>
            <div className="oupstext">Oups! La page que vous demandez n'existe pas.</div>
            <Link to="/">Retourner sur la page d’accueil</Link>
        </div>

    );
}