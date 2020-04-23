import React from 'react';
import '../styles/_homepage.scss';
import '../styles/_typography.scss'
import "../styles/_base.scss";
import Navigation from './Navigation';
import Content from './Content';
import Footer from './Footer';

const Homepage = () => {
   return (
      <div className="page">
         <div className="container v-header">
            <Navigation/>
            <Content/>
            <Footer/>
         </div>
      </div> 
    );
}
 
export default Homepage;