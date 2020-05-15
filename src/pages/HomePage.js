import React, {useState} from 'react';
import "../styles/_home.scss";
import {ReactComponent as ArrowDown} from '../images/svg/circle-down.svg';
import img1 from '../images/gallery/img-1.jpg';
import img2 from '../images/gallery/img-2.jpg';
import img3 from '../images/gallery/img-3.jpg';
import img4 from '../images/gallery/img-4.jpg';
import img5 from '../images/gallery/img-5.jpg';
import img6 from '../images/gallery/img-6.jpg';
import img7 from '../images/gallery/img-7.jpg';
import img8 from '../images/gallery/img-8.jpg';
import img9 from '../images/gallery/img-9.jpg';
import img10 from '../images/gallery/img-10.jpg';
import img11 from '../images/gallery/img-11.jpg';
import img12 from '../images/gallery/img-12.jpg';
import img13 from '../images/gallery/img-13.jpg';
import img14 from '../images/gallery/img-14.jpg';


const HomePage = () => {
   const [moon, setMoon] = useState(false)
   const [mars, setMars] = useState(false)
   const [neptune, setNeptune] = useState(false)
   const [jupiter, setJupiter] = useState(false);


   const moonChangeHandler = ()=>{
      setTimeout(()=>{
         setMoon(!moon)
      }, 300)
   }
   const marsChangeHandler = ()=>{
      setTimeout(()=>{
         setMars(!mars)
      }, 300)
   }
   const neptuneChangeHandler = ()=>{
      setTimeout(()=>{
         setNeptune(!neptune)
      }, 300)
   }
   const jupiterChangeHandler = ()=>{
      setTimeout(()=>{
         setJupiter(!jupiter)
      }, 300)
   }

   return ( 
      <div className="homepage">
         <div className="homepage__left">
            <div className="homepage__left-name">
               <p>Spacecraft</p>
            </div>
            <div className="homepage__left-text">
               <h1>To space and back, safely</h1>
               <p>in just under 24 hours</p>
            </div>
            <div className="homepage__left_options">
               <div className="homepage__left_options-object">
                  <label htmlFor="planets">Destination</label>
                  <select id="planets">
                     <option value="Moon">Moon</option>
                     <option value="Mars">Mars</option>
                     <option value="Neptune">Neptune</option>
                     <option value="Saturn">Saturn</option>
                  </select>
               </div>
               <div className="homepage__left_options-launchpad">
                  <label htmlFor="launchpad">Launchpad</label>
                  <select id="Launchpad">
                     <option value="39B">39B</option>
                     <option value="CCAFS">CCAFS</option>
                     <option value="KSC">KSC</option>
                     <option value="VAFB">VAFB</option>
                  </select>
               </div>
               <div className="homepage__left_options-family">
                  <label htmlFor="adults">Explorers</label>
                  <select id="adults">
                     <option value="1 Adult">1 Adult</option>
                     <option value="2 Adults">2 Adults</option>
                     <option value="3 Adults">3 Adults</option>
                     <option value="4 Adults">4 Adults</option>
                  </select>
               </div>
               <div className="homepage__left_options-button">
                  <button>Lift off</button>
               </div>
            </div>
            <div className="homepage__left__destination">
               <h2>Travel destinations</h2>
               <p>Explore any of our best destination places in the world!</p>
            </div>
            <div className="homepage__left__destinations">
               <div className="homepage__left__destinations_moon">
                  <div className="homepage__left__destinations_moon-new">
                     <span>NEW</span>
                  </div>
                  <div className="homepage__left__destinations_moon-name">
                     <h3>The Moon</h3>
                  </div>
                  <div className="homepage__left__destinations_moon-price">
                     <p>$1099.99</p>
                  </div>
                  <div className="homepage__left__destinations_moon-addition">
                     <p>per person</p>
                  </div>
                  <div className="homepage__left__destinations_moon-button">
                     <button className="button-read" value = {moon} onClick = {moonChangeHandler}>Read more <ArrowDown className = "arrow"/>   </button>
                  </div>
               </div>
               <div className="homepage__left__destinations_mars">
                  <div className="homepage__left__destinations_mars-name">
                     <h3>Mars</h3>
                  </div>
                  <div className="homepage__left__destinations_mars-price">
                     <p>$1599.99</p>
                  </div>
                  <div className="homepage__left__destinations_mars-addition">
                     <p>per person</p>
                  </div>
                  <div className="homepage__left__destinations_mars-button">
                     <button className="button-read" value = {mars} onClick = {marsChangeHandler}>Read more <ArrowDown className = "arrow"/>   </button>
                  </div>
               </div>
               <div className="homepage__left__destinations_neptune">
               <div className="homepage__left__destinations_neptune-name">
                     <h3>Neptune</h3>
                  </div>
                  <div className="homepage__left__destinations_neptune-price">
                     <p>$2199.99</p>
                  </div>
                  <div className="homepage__left__destinations_neptune-addition">
                     <p>per person</p>
                  </div>
                  <div className="homepage__left__destinations_neptune-button">
                     <button className="button-read" value = {neptune} onClick = {neptuneChangeHandler}>Read more <ArrowDown className = "arrow"/>   </button>
                  </div>
               </div>
               <div className="homepage__left__destinations_jupiter">
               <div className="homepage__left__destinations_jupiter-name">
                     <h3>Jupiter</h3>
                  </div>
                  <div className="homepage__left__destinations_jupiter-price">
                     <p>$1999.99</p>
                  </div>
                  <div className="homepage__left__destinations_jupiter-addition">
                     <p>per person</p>
                  </div>
                  <div className="homepage__left__destinations_jupiter-button">
                     <button className="button-read" value = {jupiter} onClick = {jupiterChangeHandler}>Read more <ArrowDown className = "arrow"/>   </button>
                  </div>
               </div>
            </div>
         </div>
         <div className="homepage__right">
            <div className="homepage__right-new">
               <span>NEW</span>
            </div>
            <div className="homepage__right-name">
               <h3>The Moon</h3>
            </div>
            <div className="homepage__right-price">
               <span>$1099.99</span>
            </div>
            <div className="homepage__right-addition">
               <span>per person</span>
            </div>
            <div className="homepage__right-button">
               <button className="button-big">Read more</button>
            </div>
            
         </div>
            {moon ?<div className="homepage__moon">
                  <div className="homepage__moon-top">
                     <ArrowDown className = "down"/>   
                  </div>

                  <div className="homepage__moon-bottom">
                     <h2>Our Satellite</h2>
                     <span>Check by yourself best known places of our beautifull satellite such as giant craters, the place where first people landed, see what path took the first space rover and many, many more!  </span>
                  </div>
            </div> : ""}
            
            {mars ? <div className="homepage__mars">
               <div className="homepage__mars-top">
                     <ArrowDown className = "down"/>   
                  </div>

                  <div className="homepage__mars-bottom">
                     <h2>Our Future</h2>
                     <span>Explore the red beautifull world with really expirienced pilot's of the trips from around the world. Find out how really big is the biggest mountain of the universe called  Olympus Mons</span>
                  </div>
            </div> : ""}
            
            {neptune ? <div className="homepage__neptune">
               <div className="homepage__neptune-top">
                     <ArrowDown className = "down"/>   
                  </div>

                  <div className="homepage__neptune-bottom">
                     <h2>Blue Giant</h2> 
                     <span>Check by yourself how big force the winds at this beautifull planet are by wearing special prepared suit in a special chamber. Explore the blue giant and it's best known and best known places </span>
                  </div>
            </div> :""}
            
            {jupiter?<div className="homepage__jupiter">
               <div className="homepage__jupiter-top">
                     <ArrowDown className = "down"/>   
               </div>
                  <div className="homepage__jupiter-bottom">
                     <h2>Biggest planet</h2>
                     <span>This trip may take up to 6 months and you probably will see only 0.1% of this awesome giant. Find out how big the "Eye of Jupiter" is and why it is the most dangerous place at this planet</span>
                  </div>
            </div>: "" }
            <div className="homepage__gallery">
               <div className="homepage__gallery_text">
                  <div className="homepage__gallery_text-top">
                     <h1>Check photos from our previous interstellar trip's!</h1>
                  </div>
                  <div className="homepage__gallery_text-bottom">
                     <p>Find out what YOUR future can bring</p>
                  </div>
               </div>
               <figure className="homepage__gallery_item homepage__gallery_item--1">
                  <img src={img1} alt="galleryImage1" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--2">
                  <img src={img2} alt="galleryImage2" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--3">
                  <img src={img3} alt="galleryImage3" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--4">
                  <img src={img4} alt="galleryImage4" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--5">
                  <img src={img5} alt="galleryImage5" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--6">
                  <img src={img6} alt="galleryImage6" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--7">
                  <img src={img7} alt="galleryImage7" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--8">
                  <img src={img8} alt="galleryImage8" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--9">
                  <img src={img9} alt="galleryImage9" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--10">
                  <img src={img10} alt="galleryImage10" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--11">
                  <img src={img11} alt="galleryImage11" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--12">
                  <img src={img12} alt="galleryImage12" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--13">
                  <img src={img13} alt="galleryImage13" className="homepage__gallery_img"></img>
                  </figure>
               <figure className="homepage__gallery_item homepage__gallery_item--14">
                  <img src={img14} alt="galleryImage14" className="homepage__gallery_img"></img>
                  </figure>
            </div>
         </div>
         
    );
}
 
export default HomePage;