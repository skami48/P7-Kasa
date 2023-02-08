
import React , {useState} from 'react';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



export default function InfoList({title, content}){
    const [showMore,showMoreContent] = useState(false)

    //const infoContent= (content) =>content;

    return(<div className='InfoList'><button className='InfoListButton' onClick={()=> showMoreContent(!showMore)}>{title} <FontAwesomeIcon icon={faAngleUp} className="AngleUp" rotation={showMore? 0:180} />
    </button>
    {showMore?  <div className='InfoListContent'>{content}</div>:<></>}
    
    </div>
    );
}