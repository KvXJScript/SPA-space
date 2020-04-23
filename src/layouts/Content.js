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
               <Route path="/" exact component={Homepage}/>
               <Route path="/planets" component={Planets}/>
               <Route path="/galaxies" component={Galaxies}/>
               <Route path="/comets" component={Comets}/>
               <Route path="/login" component={Login}/>
               <Route path="/contact" component={Contact}/>
               <Route path="/mars" component={MarsWeather}/>
               <Route component={ErrorPage}/>
            </Switch>
            </CSSTransition>
          </TransitionGroup>
         )}/>
         
      </div>
    );
}
 
export default Content;