import React, {useState, useEffect} from 'react';
import '../styles/_marsweather.scss';
import {ReactComponent as Spinner} from '../images/svg/Spinner.svg';

const MarsWeather = () => {

   const [isLoading, setIsLoading] = useState(false);
   const [sol, setSol] = useState(null);
   const [maxTemp, setMaxTemp] = useState(0);
   const [nowTemp, setNowTemp] = useState(0);
   const [minTemp, setMinTemp] = useState(0);
   const [windSpeed, setWindSpeed] = useState(0);
   const [windDirection, setWindDirection] = useState(0);
   const [date, setDate] = useState(null);
   const [temp] = useState("C");
   const [speed] = useState("kmh")
   

   const key = "30Jm7TTbxZx4eTdbnfaoLTFjLNa9lAomJCuCwQx6"

   const API_URL= `https://api.nasa.gov/insight_weather/?api_key=${key}&feedtype=json&ver=1.0`;

   useEffect( () => {
      async function fetchedData(){
         const response = await fetch(API_URL);
         console.log(response);
         if(response.status === 200){
            const data = await response.json();
            const { sol_keys, validity_checks, ...solData} = data
            Object.entries(solData).map(([sol, data]) =>{
             setSol(sol);
             setMaxTemp((data.AT.mx).toFixed(2));
             setNowTemp(Math.round(data.AT.av));
             setMinTemp((data.AT.mn).toFixed(2));
             setWindSpeed((data.HWS.av).toFixed(2));
             setWindDirection(data.WD.most_common_compass_degrees);
             setDate(data.First_UTC);
             dateChanger()
          })
          console.log(data)
          setIsLoading(true)
         }
        
         
      }
      fetchedData()
   }, [API_URL])
   

   const dateChanger = (date)=>{
      date = new Date().toLocaleDateString().slice(0,10);
      return setDate(date)
   }

   // const systemHandler = (temp, speed)=>{
   //    if(flag){
   //       temp = "C";
   //       setTemp(temp);
   //       speed = "kph"
   //       setSpeed(speed)
   //       setFlag(!flag) 
   //    }
   //    else{
   //       const Farenheight="F"
   //       setTemp(Farenheight)
   //       const mph = "mph"
   //       setSpeed(mph)
   //       setFlag(!flag)
   //    }
   // }

   return ( 
     <>
     {isLoading ?<div className="mars">
     <div className="mars-current-weather">
    <h1 className="main-title">Latest weather at Elysium Plantitia</h1>
     
    <div className="date">
        <h2 className="section-title section-title--date">Sol <span>{sol}</span></h2>
      <p className="date__day"> {date} </p>
    </div>

    <div className="temp">
      <h2 className="section-title">Temperature</h2>
        <p className="reading">High: <span>{maxTemp} &deg;{temp}</span></p>
        <p className="reading">Now <span>{nowTemp} &deg;{temp}</span></p>
      <p className="reading">Low: <span>{minTemp} &deg;{temp}</span></p>
    </div>

    <div className="wind">
      <h2 className="section-title">Wind</h2>
      <p className="reading"><span>{windSpeed}</span> {speed}</p>

      <div className="wind__direction">
        <div className="wind__direction-value"><span>{windDirection}</span></div>
      </div>
    </div> 

    <div className="info">
     <p>InSight is taking daily weather measurements (temperature, wind, pressure) on the surface of Mars at Elysium Planitia, a flat, smooth plain near Mars’ equator.</p>
     <p>This is only a part of InSight’s mission. <a href="https://mars.nasa.gov/insight/mission/overview/">Click here</a> to find out more.</p>
    </div>
    {/* 
    <div className="unit">
      <label htmlFor="cel">°C</label>
      <input type="radio" id="cel" name="unit" />
      <button className="unit__toggle" value={flag} onClick = {systemHandler}></button>
      <label htmlFor="fah">°F</label>
      <input type="radio" id="fah" name="unit"/>
    </div>  */}

  </div>
  </div>: <Spinner/> }
      </>
    );
}
 
export default MarsWeather;
