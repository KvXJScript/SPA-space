import React, {useState} from 'react';

import "../styles/_planets.scss";

import mercury from '../images/planets/mercury.png';
import venus from '../images/planets/venus.png';
import earth from '../images/planets/earth.png';
import mars from "../images/planets/mars.png";
import jupiter from '../images/planets/jupiter.png';
import saturn from '../images/planets/saturn.png';
import uranus from '../images/planets/uranus.png';
import neptune from '../images/planets/neptune.png';

import ceres from '../images/planets/dwarf/ceres.png';
import eris from '../images/planets/dwarf/eris.png';
import haumea from '../images/planets/dwarf/haumea.png';
import makemake from '../images/planets/dwarf/makemake.png';
import pluto from '../images/planets/dwarf/pluto.png';

import planetX from '../images/planets/hypothetical/X.png'

const Planets = () => {

   const [isPrimary, setIsPrimary] = useState(true);
   const [isDwarf, setIsDwarf] = useState(false);
   const [isHypothetical, setIsHypothetical] = useState(false);


   const handlePrimary = ()=>{
      setIsDwarf(false)
      setIsHypothetical(false)
      setIsPrimary(true)
   }

   const handleDwarf = ()=>{
      setIsPrimary(false)
      setIsHypothetical(false)
      setIsDwarf(true)
   }

   const handleHypothetical = ()=>{
      setIsPrimary(false)
      setIsDwarf(false)
      setIsHypothetical(true)
   }

   return ( 
      
      <div className="planets">

      <div className="planets__text">
         <h1>Planets in our solar system</h1>
      </div>

      <div className="planets__options">
         <button onClick = {handlePrimary} value={isPrimary}>Primary</button>
         <button onClick = {handleDwarf} value = {isDwarf}>Dwarf</button>
         <button onClick = {handleHypothetical} value={isHypothetical}>Hypotetical</button>
      </div>

         { isPrimary === true ? 
         
         <div className="planets__wrapper">
         <div className="planets-1">
            <img src={mercury} alt="mercury"/>
            <h3>Mercury</h3>
         <p>Mercury—the smallest planet in our solar system and closest to the Sun—is only slightly larger than Earth's Moon. Mercury is the fastest planet, zipping around the Sun every 88 Earth days.  </p>
         </div>
         <div className="planets-2">
            <img src={venus} alt="venus"/>
            <h3>Venus</h3>
            <p>Venus spins slowly in the opposite direction from most planets. A thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system.</p>
         </div>
         <div className="planets-3">
            <img src={earth} alt="earth"/>
            <h3>Earth</h3>
            <p>Earth—our home planet—is the only place we know of so far that’s inhabited by living things. It's also the only planet in our solar system with liquid water on the surface.</p>
         </div>
         <div className="planets-4">
            <img src={mars} alt="mars"/>
            <h3>Mars</h3>
            <p>Mars is a dusty, cold, desert world with a very thin atmosphere. There is strong evidence Mars was—billions of years ago—wetter and warmer, with a thicker atmosphere.</p>
         </div>
         <div className="planets-5">
            <img src={jupiter} alt="jupiter"/>
            <h3>Jupiter</h3>
            <p>Jupiter is more than twice as massive than the other planets of our solar system combined. The giant planet's Great Red spot is a centuries-old storm bigger than Earth.</p>
         </div>
         <div className="planets-6">
            <img src={saturn} alt="saturn" className="planets-saturn" style={{width: "350px"}}/>
            <h3>Saturn</h3>
            <p>Adorned with a dazzling, complex system of icy rings, Saturn is unique in our solar system. The other giant planets have rings, but none are as spectacular as Saturn's. </p>
         </div>
         <div className="planets-7">
            <img src={uranus} alt="uranus"/>
            <h3>Uranus</h3>
            <p>Uranus—seventh planet from the Sun—rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side.</p>
         </div>
         <div className="planets-8">
            <img src={neptune} alt="neptune"/>
            <h3>Neptune</h3>
            <p>Neptune—the eighth and most distant major planet orbiting our Sun—is dark, cold and whipped by supersonic winds. It was the first planet located through mathematical calculations. </p>
         </div>
         </div>
         : ""}

         {isDwarf === true ? 
         <div className="planets__dwarf">
         <div className="planets__dwarf-1">
            <img src={ceres} alt="ceres"/>
            <h3>Ceres</h3>
            <p>Pluto is a complex world of ice mountains and frozen plains. Once considered the ninth planet, Pluto is the best known of a new class of worlds called dwarf planets.</p>
         </div>
         <div className="planets__dwarf-2">
            <img src={eris} alt="eris"/>
            <h3>Eris</h3>
            <p>Eris is one of the largest known dwarf planets in our solar system. It's about the same size as Pluto, but it is three times farther from the Sun. One orbit takes about 557 years.</p>
         </div>
         <div className="planets__dwarf-3">
            <img src={haumea} alt="haumea"/>
            <h3>Haumea</h3>
            <p>Haumea is one of the fastest rotating large objects in our solar system.</p>
         </div>
         <div className="planets__dwarf-4">
            <img src={makemake} alt="makemake"/>
            <h3>Makemake</h3>
            <p>It takes 310 Earth years for Makemake to complete one orbit around our Sun.</p>
         </div>
         <div className="planets__dwarf-5">
            <img src={pluto} alt="pluto"/>
            <h3>Pluto</h3>
            <p>Pluto is a complex world of ice mountains and frozen plains. Once considered the ninth planet, Pluto is the best known of a new class of worlds called dwarf planets.</p>
         </div>
         </div>
         :""}
         {isHypothetical === true ? 
         <div className="planets__hypothetical">
         <div className="planets__hypothetical-1">
            <img src={planetX} alt="planetX"/>
            <h3>Planet X</h3>
            <p>Lieder drew the name Planet X from the hypothetical planet once searched for by astronomers to account for discrepancies in the orbits of Uranus and Neptune. In 1894, Bostonian astronomer Percival Lowell became convinced that the planets Uranus and Neptune had slight discrepancies in their orbits. He concluded that they were being tugged by the gravity of another, more distant planet, which he called "Planet X". However, nearly a century of searching failed to turn up any evidence for such an object (Pluto was initially believed to be Planet X, but was later determined to be too small)</p>
            </div>
         </div>
         :""}

      </div>
    );
}
 
export default Planets;