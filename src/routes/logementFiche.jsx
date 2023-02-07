import Carrousel from "../element/carrousel";
import { items } from "../element/Itemslist";
import { Navigate, useParams } from 'react-router-dom'
import InfoList from "../element/InfoList";



export default function SiteLogement(){
    const {logementId}= useParams();
 
    const index = {items}.items.find(x=> x.id==={logementId}.logementId)
    const equipmentsList = ()=>{ 
        let x = 0;
        const equiplist = index.equipments.map((i,x) => <div key ={ x}>{i}</div>);



    return equiplist;
}
    
    if(index){
        
     
        return (
            <main>
                <Carrousel/>
                <div className="Logement_bloc_title">
                    <h2 className="logmentTitle">{index.title}</h2>
                    <h4>{index.location}</h4>
                    <div className="tagbloc">
                        <div>Tags here</div>
                        <div>Tags here</div>
                        <div>Tags here</div>
                        <div>Tags here</div>
                    </div>
                </div>
                <div>
                    <div>user</div>
                    <div>note</div>
                    <div className="listblock">
                        <div className="listelement50">
                        <InfoList title = "Description" content={index.description}/>
                        </div>
                        <div className="listelement50">
                        <InfoList title = "Équipements" content={equipmentsList()}/>
                        </div>
                    </div>
                    
                </div>
                
            </main>
    
        );
    }else{
        return <Navigate to="/404/" ></Navigate>
    }

}