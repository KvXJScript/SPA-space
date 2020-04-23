import React from 'react';
import "../styles/_homepage.scss";

import {NavLink} from 'react-router-dom';
import Logo from '../images/logo.png';

const list = [
   {name: "Main Page", path: "/", exact: true},
   {name: "Planets", path: "/planets"},
   {name: "Galaxies", path: "/galaxies"},
   {name: "Mars Weather", path:"/mars"},
   {name: "See closest comets!", path: "/comets"},
   {name: "Login to see more!", path: "/login"},
   {name: "Contact", path: "/contact"}
   
]


const Navigation = () => {


   const menu = list.map(item=>(
      <div className="navigation__content_link" key={item.name}>
         <NavLink to={item.path} exact={item.exact? item.exact : false}>{item.name}</NavLink>
      </div>
   ))

   return ( 
      <div className="navigation">
         <div className="navigation__logo">
            <img src={Logo} alt="logo"/>
         </div>
         <div className="navigation__content">
            {menu}
         </div>
      </div>
    );
}
 
export default Navigation;