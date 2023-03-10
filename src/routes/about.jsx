//import AsyncImage from "../element/asyncImageLoading";
import InfoList from "../element/InfoList";

import AboutImage from "../img/kalen-emsley-Bkci_8qcdvQ-unsplash.jpg"

export default function SiteAbout(){
    return (
        <main>
            <div className="aboutImage" >
            <img src={AboutImage} alt="une montagne"/>
            </div>
            
            <div className="infolistAbout">
                <InfoList title="Fiabilité" content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes." />
                <InfoList title="Respect" content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." />
                <InfoList title="Service" content="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." />
                <InfoList title="Sécurité" content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." />
            </div>
        </main>
    );
}