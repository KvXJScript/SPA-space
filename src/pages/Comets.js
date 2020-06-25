import React, {useState} from 'react';

import "../styles/_comets.scss";
import Error from './ErrorPage';

import {ReactComponent as Arrowup} from '../images/svg/arrow-up.svg';
import {ReactComponent as Earth} from '../images/svg/earth.svg';
import {ReactComponent as Fire} from '../images/svg/fire.svg';
import {ReactComponent as Around} from '../images/svg/spinner10.svg';
import {ReactComponent as Calendar} from '../images/svg/calendar.svg';
// import {ReactComponent as Spinner} from '../images/svg/spin-comets.svg';
import {ReactComponent as Diameter} from '../images/svg/diameter.svg';




const Comets = () => {

   const [magnitude, setMagnitude] = useState(0);
   const [closeAproachDate, setCloseAproachDate] = useState(null);
   const [missDistance, setMissDistance] = useState(0);
   const [orbitingBody, setOrbitingBody] = useState('');
   const [name, setName] = useState('');
   const [isDangerous, setIsDangerous] = useState(true);
   const [diameter, setDiameter] = useState(0);
   const [opacity, setOpacity] = useState(1);
   const [converter, setConverter] = useState("");
   const [flag, setFlag] = useState(false);
   

   const key = "30Jm7TTbxZx4eTdbnfaoLTFjLNa9lAomJCuCwQx6";
   const todayDate = new Date().toISOString().slice(0,10);
   const tommorowDate = new Date().toISOString().slice(0,9);
   const nextDay = new Date().getDay() + 1;
   

   const API_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${todayDate}&end_date=${tommorowDate}${nextDay}&api_key=${key}`;

   const fetchData = ()=>{
      
      setOpacity(0);
      setFlag(!flag)
      fetch(API_URL)
      .then(response => {
         if(response.ok){
            return response
         }
      })
      .then(response=> response.json())
      .then(data=> {
         const objects = data.near_earth_objects;
         Object.values(objects).forEach((value) => {
            value.map(arr=>{
               setName(arr.name)
               setMagnitude(arr.absolute_magnitude_h)
               setCloseAproachDate(arr.close_approach_data[0].close_approach_date)
               setMissDistance(arr.close_approach_data[0].miss_distance.astronomical)
               setOrbitingBody(arr.close_approach_data[0].orbiting_body)
               setIsDangerous(arr.is_potentially_hazardous_asteroid)
               setDiameter((arr.estimated_diameter.kilometers.estimated_diameter_max).toFixed(2));
               dangerousHandler();
            })
         });
      })
      
      .catch(<Error/>)
   }

   const dangerousHandler = (isDangerous)=>{
      if(isDangerous){
         setConverter("YES")
      } 
      else{
         setConverter("NO");
      }
   }


   return ( 
      <div className="comets">
         <div className="comets__information">
            <h1>
               Many object around us, but what are they?
            </h1>

         </div>
         <div className="comets__categories">
            <div className="comets__categories--1">
               <h2 className="heading--secondary">Comets</h2>
               <p>A comet is an icy, small Solar System body that, when passing close to the Sun, warms and begins to release gases, a process called outgassing. This produces a visible atmosphere or coma, and sometimes also a tail. These phenomena are due to the effects of solar radiation and the solar wind acting upon the nucleus of the comet.</p>
            </div>
            <div className="comets__categories--2">
               <h2>Asteroids</h2>
               <p>Asteroids are minor planets, especially of the inner Solar System. Larger asteroids have also been called planetoids. These terms have historically been applied to any astronomical object orbiting the Sun that did not resolve into a disc in a telescope and was not observed to have characteristics of an active comet such as a tail.</p>
            </div>
            <div className="comets__categories--3">
               <h2 className="heading--secondary">Other objects</h2>
               <p>By other objects we can call all beautifull structures and objects such as nebula's, black hole's, Galaxies, Dark Matter, Diffuse Background, neutron stars, supernova's, white dwarfs, red dwarfs, brown dwards and many many (really many) things that we discovered and not discoveret yet. Allthough we are at good way to meet them.</p>
            </div>
         </div>
         <div className="comets__api">
            {flag ?
            <>
            <div className="comets__api__name">
               <div className="comets__api__name--left">
               <h3>Name of the object: <span>{name}</span></h3>
                  
               </div>
               <div className="comets__api__name--right">
                  <Calendar/>  <span>{todayDate}</span>
               </div>
            </div>
            <div className="comets__api__left">
               <div className="comets__api__left--magnitude">
                  <Arrowup/><p>Magnitude: <span>{magnitude}</span><strong>MMS</strong></p>
               </div>
               <div className="comets__api__left--date">
                  <Calendar/><p>Approach Date: <strong>{closeAproachDate}</strong></p>
               </div>
            </div>
            <div className="comets__api__middle">
               <div className="comets__api__middle--miss">
                  <Around/><p>Miss distance: <span>{missDistance}</span><strong>AU</strong></p>
               </div>
               <div className="comets__api__middle--body">
                  <Earth/><p>Orbiting body: <strong>{orbitingBody}</strong></p>
               </div>
            </div>
            <div className="comets__api__right">
               <div className="comets__api__right--diameter">
                  <Diameter/><p>Diameter:  <span>{diameter}</span><strong>KM</strong></p>
               </div>
               <div className="comets__api__right--dangerous">
                  <Fire/><p>Is it dangerous?: <strong style={ isDangerous ? {color: "red"} : {color: "green"}}>{converter}</strong></p>
               </div>
               
            </div>

            <div className="comets__api__bottom">
               <span>Let's watch the closest objects around us... they sadly arrive and depart so fast...</span>
            </div>
            </>
            :<button onClick = {fetchData} style={{opacity}} className="comets__api--button">Check the closest object!</button>}
            
         </div>
         
      </div>
    );
}
 
export default Comets;