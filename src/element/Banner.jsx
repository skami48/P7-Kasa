import '../css/style.scss';
import img from '../img/eric-muhr-P_XxsdVgtpQ-unsplash.jpg';
//import AsyncImage from './asyncImageLoading';

export default function SiteBanner(){
    return (
        <div className="TopBanner">
            <img src={img} alt="banniere" />
            <div>
            <h2>Chez vous, partout et ailleurs</h2>
            </div>
            
        </div>
    );
}