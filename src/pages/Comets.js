import React, {useState} from 'react';

import "../styles/_comets.scss";
import Error from './ErrorPage';




const Comets = () => {


   const [data, setData] = useState([]);
   const [date, setDate] = useState(null);
   const [magnitude, setMagnitude] = useState(0);
   const [closeAproachDate, setCloseAproachDate] = useState(null);
   const [missDistance, setMissDistance] = useState(0);
   const [orbitingBody, setOrbitingBody] = useState('');
   const [name, setName] = useState('');
   const [isDangerous, setIsDangerous] = useState(true);

   const key = "30Jm7TTbxZx4eTdbnfaoLTFjLNa9lAomJCuCwQx6";
   const todayDate = new Date().toISOString().slice(0,10);
   const tommorowDate = new Date().toISOString().slice(0,9);
   const nextDay = new Date().getDay() + 1;
   

   const API_URL = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${todayDate}&end_date=${tommorowDate}${nextDay}&api_key=${key}`;

   const fetchData = ()=>{
      console.log("działa")
      fetch(API_URL)
      .then(response => {
         if(response.ok){
            return response
         }
      })
      .then(response=> response.json())
      .then(data=> {
         const now = new Date().toISOString().slice(0,10)
         const short = data.near_earth_objects;
         console.log(short.now)
         
      } )
      .catch(<Error/>)
   }

   return ( 
      <div className="comets">
         <div className="comets__information">
            <h1>
               Many object around us, but what are they?
            </h1>
            <p>Lorem ipsum dolor sit amet.</p>

         </div>
         <div className="comets__categories">
            <div className="comets__categories--1">
               <h2>Comets</h2>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt dicta dolor quidem! Minus, blanditiis inventore. Illo beatae laborum necessitatibus ullam possimus tempora nam. Corporis sed magni quo excepturi soluta.</p>
            </div>
            <div className="comets__categories--2">
               <h2>Asteroids</h2>
               <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis fugiat earum, saepe et veritatis reprehenderit commodi enim eum! Asperiores officia, sit eveniet sed vero reiciendis nam doloremque animi ab nostrum!</p>
            </div>
            <div className="comets__categories--3">
               <h2>Other objects</h2>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis nulla fugiat odio quibusdam debitis commodi, necessitatibus rem fugit maiores, sint dolore eius, aut ullam aperiam quia consequuntur. Tempora, nobis ipsam!</p>
            </div>
         </div>
         <div className="commets__api">
            <h3>Check closest objects around our beautiful planet.</h3>
            <button onClick = {fetchData}>Check Them out!</button>
         </div>
      </div>
    );
}
 
export default Comets;