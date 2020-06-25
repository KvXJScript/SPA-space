import React from 'react';
import "../styles/_homepage.scss";
import {Route, Switch} from 'react-router-dom';

import FooterAll from '../subpages/FooterAll';
import ErrorPage from '../pages/ErrorPage';

const Footer = () => {
   return ( 
      <div className="footer">
         <Switch>
               <Route path="/SPA-space/" exact component={FooterAll}/>
               <Route path="/SPA-space/planets" component={FooterAll}/>
               <Route path="/SPA-space/galaxies" component={FooterAll}/>
               <Route path="/SPA-space/comets" component={FooterAll}/>
               <Route path="/SPA-space/login" component={FooterAll}/>
               <Route path="/SPA-space/mars" component={FooterAll}/>
               <Route path="/SPA-space/contact" component={FooterAll}/>
               <Route component={ErrorPage}/>
            </Switch>
      </div>
    );
}
 
export default Footer;