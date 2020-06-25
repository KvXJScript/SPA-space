import React from 'react';
import "../styles/_homepage.scss";
import {Route, Switch} from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

import Homepage from '../pages/HomePage';
import Planets from '../pages/Planets';
import Galaxies from '../pages/Galaxies';
import Comets from '../pages/Comets';
import Login from '../pages/Login';
import Contact from '../pages/Contact';
import ErrorPage from '../pages/ErrorPage';
import MarsWeather from '../pages/MarsWeather'

const Content = () => {
   return ( 
      <div className="content">
         <Route render ={({location})=>(
            <TransitionGroup>
             <CSSTransition
               key={location.key}
               timeout={400}
               classNames="fade"
               >
            <Switch location={location}>
               <Route path="/SPA-space/" exact component={Homepage}/>
               <Route path="/SPA-space/planets" component={Planets}/>
               <Route path="/SPA-space/galaxies" component={Galaxies}/>
               <Route path="/SPA-space/comets" component={Comets}/>
               <Route path="/SPA-space/login" component={Login}/>
               <Route path="/SPA-space/contact" component={Contact}/>
               <Route path="/SPA-space/mars" component={MarsWeather}/>
               <Route component={ErrorPage}/>
            </Switch>
            </CSSTransition>
          </TransitionGroup>
         )}/>
         
      </div>
    );
}
 
export default Content;