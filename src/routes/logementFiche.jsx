import Carrousel from "../element/carrousel";
import { items } from "../element/Itemslist";
import { Navigate, useParams } from 'react-router-dom'
import InfoList from "../element/InfoList";
import AsyncImage from "../element/asyncImageLoading";
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function SiteLogement(){
    const {logementId}= useParams();
 
    const index = {items}.items.find(x=> x.id==={logementId}.logementId)
    const equipmentsList = ()=>{ 
       
        const equiplist = index.equipments.map((i,x) => <div key ={ x}>{i}</div>);



    return equiplist;
}
    const tagList = ()=>{
        const tag = index.tags.map((i,x) => <div className="LogementTags" key={x}>{i}</div>  );
        return tag
    }

    const noteCounter = ()=>{
        let note= []
        for (let i = 0; i < 5; i++) {
            if(i<index.rating){
                note.push(<FontAwesomeIcon  key ={i}  icon={faStar} className="orangeStar"  />)
            }else{
                note.push(<FontAwesomeIcon   key ={i} icon={faStar} className="Star" />)
            }
        }
        return note;
    }

    
    if(index){
        
     
        return (
            <main>
                <Carrousel ImageArray={index.pictures}/>
                <div className="Logement_bloc_title">
                    <div className="logmentTitle">
                    <h2 >{index.title}</h2>
                    <h4>{index.location}</h4>
                        <div className="tagbloc">{tagList()}

                        </div>
                    </div>
                    <div className="UserandNote">
                    <div>
                        <div>{index.host.name}</div>
                        <div className="userImage">
                        <AsyncImage src={index.host.picture} alt={index.host.name}/>
                        </div>
                        
                    </div>
                    <div>{noteCounter()}</div>
                </div>
                </div>
                
                    <div className="listblock">
                        <div className="listelement50">
                        <InfoList title = "Description" content={index.description}/>
                        </div>
                        <div className="listelement50">
                        <InfoList title = "Équipements" content={equipmentsList()}/>
                        
                    </div>
                    
                </div>
                
            </main>
    
        );
    }else{
        return <Navigate to="/404/" ></Navigate>
    }

}