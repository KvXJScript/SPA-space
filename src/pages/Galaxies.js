import React, {useState} from 'react';

import "../styles/_galaxies.scss";

import milkyway from '../images/galaxies/milky-way.jpg';

import andromeda from '../images/galaxies/andromeda.jpg';
import ic10 from '../images/galaxies/ic10.jpg';
import canis from '../images/galaxies/canis-major.jpg';
import sagitarius from '../images/galaxies/sagitarius.jpg';

import ic1011 from '../images/galaxies/ic1011.jpg';
import sombrero from '../images/galaxies/sombrero.jpg';
import messier from '../images/galaxies/messier.jpg';
import sague from '../images/galaxies/segue.jpg';
import whirpool from  '../images/galaxies/whirpool.jpg';

const Galaxies = () => {

   const [isOur, setIsOur] = useState(false);
   const [isClosest, setIsClosest] = useState(true);
   const [isSpecial, setIsSpecial] = useState(false);

   const handleIsOur = ()=>{
      setIsClosest(false)
      setIsSpecial(false);
      setIsOur(true)
   }

   const handleIsClosest = ()=>{
      setIsSpecial(false);
      setIsOur(false)
      setIsClosest(true)
   }

   const handleIsSpecial = ()=>{
      setIsClosest(false)
      setIsOur(false)
      setIsSpecial(true);
   }

   return ( 
         <div className="galaxies">
            <div className="galaxies__text">
               <h1>Best Galaxies in the Universe</h1>
            </div>

            <div className="galaxies__menu">
               <button onClick = {handleIsClosest} value = {isClosest}>Closest Galaxies</button>
               <button onClick = {handleIsSpecial} value = {isSpecial}>Special Galaxies</button>
               <button onClick = {handleIsOur} value = {isOur}>Milky Way</button>
            </div>

            

            { isClosest === true ? 
            <div className = "galaxies__closest">
               <div className="galaxies__closest-1">
                  <img src={andromeda} alt="andromeda"/>
                  <h3>Andromeda Galaxy</h3>
                  <p>The Andromeda Galaxy (M31) is the closest large galaxy to the Milky Way and is one of a few galaxies that can be seen unaided from the Earth. In approximately 4.5 billion years the Andromeda Galaxy and the Milky Way are expected to collide and the result will be a giant elliptical galaxy. Andromeda is accompanied by 14 dwarf galaxies, including M32, M110, and possibly M33 (The Triangulum Galaxy).</p>
               </div>
               <div className="galaxies__closest-2">
                  <img src={ic10} alt="ic10"/>
                  <h3>IC 10 Galaxy</h3>
                  <p>IC 10 is an irregular dwarf galaxy with an H II nucleus of about 5,000 light-years across, located some 2.2 million light-years away in the northern constellation Cassiopeia and it is approaching the Milky Way at approximately 350 kilometers per second.</p>
               </div>
               <div className="galaxies__closest-3">
                  <img src={canis} alt="canis"/>
                  <h3>Canis Major Galaxy</h3>
                  <p>The Canis Major Dwarf Galaxy is classified as an irregular galaxy and is now thought to be the closest neighboring galaxy to the Earth's location in the Milky Way, being located about 25,000 light-years (7.7 kiloparsecs) away from the Solar System and 42,000 ly (13 kpc) from the Galactic Center.</p>
               </div>
               <div className="galaxies__closest-4">
                  <img src={sagitarius} alt="sagitarius"/>
                  <h3>Sagittarius Galaxy</h3>
                  <p>The Sagittarius Dwarf Spheroidal Galaxy (Sgr dSph), also known as the Sagittarius Dwarf Elliptical Galaxy (Sgr dE or Sag DEG), is an elliptical loop-shaped satellite galaxy of the Milky Way. It consists of four globular clusters, the main cluster having been discovered in 1994. Sgr dSph is roughly 10,000 light-years in diameter, and is currently about 70,000 light-years from Earth</p>
               </div>
            </div>
            : ""}

            { isSpecial === true ? 
            <div className = "galaxies__special">
               <div className="galaxies__special-1">
                  <img src={ic1011} alt="ic1011"/>
                  <h3>IC 1011 Galaxy</h3>
                  <p>IC 1101 is among the largest known galaxies, but there is debate in the astronomical literature about how to define the size of such a galaxy. It's size is astonishing 15 to 37 kpc (50 to 120 thousand light years). Like most large galaxies, IC 1101 is populated by a number of metal-rich stars, some of which are seven billion years older than the Sun, making it appear golden yellow in color.</p>
               </div>
               <div className="galaxies__special-2">
                  <img src={sombrero} alt="sombrero"/>
                  <h3>Sombrero Galaxy</h3>
                  <p>The Sombrero Galaxy, one of the more unusual-looking barred spiral galaxies, owes its name to its resemblance to the Mexican hat of the same name. It has a large central bulge and a bright nucleus, and its spiral’s arms pass through a thick dust lane, which is the ring encircling the central bulge.</p>
               </div>
               <div className="galaxies__special-3">
                  <img src={messier} alt="messier"/>
                  <h3>Messier 81 Galaxy</h3>
                  <p>Messier 81 (also known as NGC 3031 or Bode's Galaxy) is a grand design spiral galaxy about 12 million light-years away, with a diameter of 90,000 light years, about half the size of the Milky Way, in the constellation Ursa Major. Due to its proximity to Earth, large size, and active galactic nucleus (which harbors a 70 million supermassive black hole), Messier 81 has been studied extensively by professional astronomers. The galaxy's large size and relatively high brightness also makes it a popular target for amateur astronomers.</p>
               </div>
               <div className="galaxies__special-4">
                  <img src={sague} alt="sague"/>
                  <h3>Sague 2 Galaxy</h3>
                  <p>Segue 2 is a dwarf spheroidal galaxy situated in the constellation Aries and discovered in 2009 in the data obtained by Sloan Digital Sky Survey. The galaxy is located at the distance of about 35 kpcs (35,000 parsecs (110,000 ly)) from the Sun and moves towards the Sun with a speed of 40 km/s.</p>
               </div>
               <div className="galaxies__special-5">
                  <img src={whirpool} alt="whirpool"/>
                  <h3>Whirlpool Galaxy</h3>
                  <p>The Whirlpool Galaxy is about 23 million light years from the Milky Way and its diameter is approximately 60,000 light years. The Whirlpool Galaxy is also known as Messier 51a, M51a, or NGC 5194. It, and its companion galaxy together, is sometimes referred to as simply M51.</p>
               </div>
            </div>
            : ""}
            { isOur === true ? 
            <div className="galaxies__our">
            <div className="galaxies__our-1">
               <img src={milkyway} alt="milky way"/>
               <h3>Milky Way</h3>
               <p>Milky Way--our Galaxy-- where everything happend is happening and will be happening. Our house, our love. Every person who ever lived was a little part of this galaxy. It contains between 100 and 400 bilions stars and at least 100 bilion planets. It's radius is roughly 40,000ly. Milky Way is just amazing</p>
               </div>
            </div>
            : ""}

         </div>
    );
}
 
export default Galaxies;