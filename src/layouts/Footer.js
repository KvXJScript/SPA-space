import React from 'react';
import "../styles/_homepage.scss";
import {Route, Switch} from 'react-router-dom';

import FooterAll from '../subpages/FooterAll';
import FooterContact from '../subpages/FooterContact';
import ErrorPage from '../pages/ErrorPage';

const Footer = () => {
   return ( 
      <div className="footer">
         <Switch>
               <Route path="/" exact component={FooterAll}/>
               <Route path="/planets" component={FooterAll}/>
               <Route path="/galaxies" component={FooterAll}/>
               <Route path="/comets" component={FooterAll}/>
               <Route path="/login" component={FooterAll}/>
               <Route path="/mars" component={FooterAll}/>
               <Route path="/contact" component={FooterContact}/>
               <Route component={ErrorPage}/>
            </Switch>
      </div>
    );
}
 
export default Footer;