import React, {lazy, Suspense} from 'react';
import '../styles/_homepage.scss';
import '../styles/_typography.scss'
import "../styles/_base.scss";
import Navigation from './Navigation';
// import Content from './Content';
import Footer from './Footer';

const Content = lazy(()=>import('./Content'));


const Homepage = () => {
   return (
      <div className="page">
         <div className="container v-header">
            <Navigation/>
            <Suspense fallback = {<div>Loading...</div>}>
            <Content/>
            </Suspense>
            <Footer/>
         </div>
      </div> 
    );
}
 
export default Homepage;