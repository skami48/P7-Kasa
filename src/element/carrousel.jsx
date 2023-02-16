import '../css/style.scss';

import React ,{useEffect, useState} from 'react';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Carrousel(ImageArray){
    
    const [currentImage,setCurrentImage]= useState(0);
    let shownImage = currentImage;
   
    let changeImageTime = 5000


    useEffect(()=> {
        const interval = setInterval(()=>setCurrentImage((shownImage+1)%ImageArray.ImageArray.length),changeImageTime);
        return ()=> clearInterval(interval)
    });
    const resetInterval =() => setInterval(changeImageTime);

    if(ImageArray){
        return(
            <div className='Carrousel'>
                <img src={ImageArray.ImageArray[currentImage] } alt="Logement" />
                <div className={((ImageArray.ImageArray.length <=1 )? "notvisible":"")}>
                <button className={"arrows Left"+((ImageArray.ImageArray.length <=1 )? "notvisible":"")} onClick={()=>{
                    setCurrentImage((shownImage===0)?shownImage = ImageArray.ImageArray.length-1 :shownImage-1);
                    resetInterval()
                    }}>
                <FontAwesomeIcon icon={faAngleUp}  rotation={270} />
                </button>
                <div className='counter'>{shownImage+1}/{ImageArray.ImageArray.length}</div>
                <button className={"arrows Right"+((ImageArray.ImageArray.length <=1 )? "notvisible":"")} onClick={()=>  {setCurrentImage((shownImage+1)%ImageArray.ImageArray.length)
                                                                                                                        resetInterval()
                                                                                                                        }}>
                <FontAwesomeIcon icon={faAngleUp}  rotation={90} />
                </button>
                </div>
                
            </div>
        )
    }
    return (<></>);

    }

