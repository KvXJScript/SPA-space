import React from 'react';
import "../styles/_homepage.scss";

import {NavLink} from 'react-router-dom';
import Logo from '../images/logo.png';
import {ReactComponent as Github} from '../images/svg/github.svg';

const list = [
   {name: "Main Page", path: "/SPA-space/", exact: true},
   {name: "Planets", path: "/SPA-space/planets"},
   {name: "Galaxies", path: "/SPA-space/galaxies"},
   {name: "Mars Weather", path:"/SPA-space/mars"},
   {name: "Closest objects", path: "/SPA-space/comets"},
   {name: "Login to see more!", path: "/SPA-space/login"},
   {name: "Contact", path: "/SPA-space/contact"}
   
]


const Navigation = () => {


   const menu = list.map(item=>(
      <div className="navigation__content_bottom--link" key={item.name}>
         <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
      </div>
   ))

   return ( 
      <div className="navigation">
         <div className="navigation__content">
            <div className="navigation__content--image">
                  <img src={Logo} alt="logo"/>
               </div>
            <div className="navigation__content_top">
               
               <div className="navigation__content_top--motto">
                  <h1>Per aspera ad astra...</h1>
               </div>
               
            </div>
            <div className="navigation__content_socials">
                  <div className="navigation__content_top_socials--1">
                     <Github/>   <a href="https://github.com/KvXJScript"><span>/github</span></a>
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