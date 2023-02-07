
import React , {useState} from 'react';



export default function InfoList({title, content}){
    const [showMore,showMoreContent] = useState(false)

    //const infoContent= (content) =>content;

    return(<div className='InfoList'><button className='InfoListButton' onClick={()=> showMoreContent(!showMore)}>{title}
    </button>
   
    {showMore?  <div className='InfoListContent'>{content}</div>:<></>}
    
    </div>
    );
}