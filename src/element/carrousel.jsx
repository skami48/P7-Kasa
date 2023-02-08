import '../css/style.scss';

import React ,{useEffect, useState} from 'react';
import AsyncImage from './asyncImageLoading';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Carrousel(ImageArray){
    
    const [currentImage,setCurrentImage]= useState(0);
    let shownImage = currentImage;
   
    
 
    useEffect(()=> {
        const interval = setInterval(()=>setCurrentImage((shownImage++)%ImageArray.ImageArray.length),5000);
        return ()=> clearInterval(interval)
    });


    if(ImageArray){
        return(
            <div className='Carrousel'>
                <AsyncImage src={ImageArray.ImageArray[currentImage] } alt="Image Logement" />
                <button className="arrows Right" onClick={()=>  setCurrentImage((shownImage+1)%ImageArray.ImageArray.length)}>
                <FontAwesomeIcon icon={faAngleUp}  rotation={90} />
                </button>
                <button className="arrows Left" onClick={()=>setCurrentImage((shownImage===0)?shownImage = ImageArray.ImageArray.length-1 :shownImage-1)}>
                <FontAwesomeIcon icon={faAngleUp}  rotation={270} />
                </button>
                
            </div>
        )
    }
    return (<></>);

    }

