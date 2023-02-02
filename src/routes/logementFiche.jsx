import Carrousel from "../element/carrousel";
import { items } from "../element/Itemslist";
import { Navigate, useParams } from 'react-router-dom'


export default function SiteLogement(){
    const {logementId}= useParams();
 
    const index = {items}.items.find(x=> x.id==={logementId}.logementId)

    
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
                </div>
                
            </main>
    
        );
    }else{
        return <Navigate to="/404/" ></Navigate>
    }

}