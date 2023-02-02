import Thumb from "./Thumb";
import { items } from "./Itemslist";

export default function ThumbList(){
    
    return(
        <div className="ThumbList">
            {items.map((i) => <Thumb item={i}  key={i.id} />)}
            
        </div>
    )
}



