import React from 'react';
import "../styles/_homepage.scss";

import {NavLink} from 'react-router-dom';
import Logo from '../images/logo.png';
import {ReactComponent as Instagram} from '../images/svg/instagram.svg'
import {ReactComponent as Facebook} from '../images/svg/facebook2.svg'
import {ReactComponent as YouTube} from '../images/svg/youtube.svg'

const list = [
   {name: "Main Page", path: "/", exact: true},
   {name: "Planets", path: "/planets"},
   {name: "Galaxies", path: "/galaxies"},
   {name: "Mars Weather", path:"/mars"},
   {name: "Closest objects", path: "/comets"},
   {name: "Login to see more!", path: "/login"},
   {name: "Contact", path: "/contact"}
   
]


const Navigation = () => {


   const menu = list.map(item=>(
      <div className="navigation__content_bottom-link" key={item.name}>
         <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
      </div>
   ))

   return ( 
      <div className="navigation">
         <div className="navigation__content">
            <div className="navigation__content-image">
                  <img src={Logo} alt="logo"/>
               </div>
            <div className="navigation__content_top">
               
               <div className="navigation__content_top-motto">
                  <h1>Still leading, still launching.</h1>
               </div>
               
            </div>
            <div className="navigation__content_socials">
                  <div className="navigation__content_top_socials-1">
                     <Instagram/> <span>/instagram</span>
                  </div>
                  <div className="navigation__content_top_socials-2">
                     <Facebook/> <span>/facebook</span>
                  </div>
                  <div className="navigation__content_top_socials-3">
                     <YouTube/> <span>/youtube</span>
                  </div>
               </div>
            <div className="navigation__content_bottom">
               {menu}
            </div>
            
         </div>
      </div>
    );
}
 
export default Navigation;