import React from 'react';

import './css/style.scss';

import {Route ,  Routes  } from 'react-router-dom';
import SiteHome from "./routes/home";
import SiteLogement from "./routes/logementFiche";
import SiteAbout from "./routes/about";
import SiteNotFound from "./routes/Notfound"

function App() {

  
    let routes = (
      <Routes>
        <Route exact path='/' element={<SiteHome/>}></Route>
        <Route path="logement/:logementId" element={<SiteLogement/>}></Route>
        <Route path='about' element={<SiteAbout/>}></Route>
        <Route path="*" element={<SiteNotFound/>}></Route>
  
  
      </Routes>
      
    )
     
    
  
    
    return routes
 }


export default App;
