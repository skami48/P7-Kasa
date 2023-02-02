import React from 'react';
import ReactDOM from 'react-dom/client';


//import './css/index.css';
import App from './App';
import SiteFooter from './element/Footer';
import SiteHeader from './element/Header';
import { BrowserRouter as Router } from 'react-router-dom';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <Router>
    <SiteHeader/>
      <App/>
        
     <SiteFooter/>
    </Router>
    
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
