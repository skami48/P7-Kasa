import { Link } from "react-router-dom";


export default function Thumb(item){
    let pageLink = "logement/"+ item.item.id;

    return(
        <Link to={pageLink}className="Thumb" >
                <img className="ThumbImage" src={item.item.cover} alt={item.item.alt}/>
                <div className="ThumbTitleBloc">
                    
                    <h4>{item.item.title}</h4>
                </div>

            </Link>

    )
}