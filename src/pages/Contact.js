import React, {useState} from 'react';
import hearth from '../images/hearth.png';
import {ReactComponent as Location} from '../images/svg/location.svg'
import {ReactComponent as Phone} from '../images/svg/mobile.svg'
import {ReactComponent as Email} from '../images/svg/envelop.svg'

import "../styles/_contact.scss";

const Contact = () => {

   const [name, setName] = useState("");
   const [mail, setMail] = useState("");
   const [text, setText] = useState("");


   const handleNameChange = e =>{
      setName(e.target.value);
   }

   const handleMailChange = e =>{
      setMail(e.target.value)
   }

   const handleTextChange = e =>{
      setText(e.target.value)
   }

   const handleSubmit = e =>{
      e.preventDefault();
      setName("");
      setMail("");
      setText("")
   }


   return ( 
      <div className="contact">
         <h1 className="contact__heading">Contact</h1>
         <hr/>
         <div className="contact__subtitle">
            I'd <img src={hearth} alt="hearth" className="contact__subtitle_img"/> to help!
         </div>
         <div className="contact__text">
            <p>I really like to create new projects with fun and open-minded people. Feel free to say hello!</p>
         </div>
         <div className="contact__information">
            <div className="contacti__information-wrapper">
               <div className="contact__information_form">
                  <form onSubmit = {handleSubmit}>
                     <input type="text" value = {name} onChange = {handleNameChange} placeholder="Your Name" className="contact__information_form_input" />
                     <input type="email" value = {mail} onChange = {handleMailChange} placeholder="Email" className="contact__information_form_input"/>
                     <textarea value = {text} onChange = {handleTextChange} cols="30" rows="10" className="contact__information_form_textarea" placeholder="Message"></textarea>
                     <button className="contact__information_form_btn">Send</button>
                  </form>
               </div>
            </div>

         <div className="contact__information_contact">
            <div>
               <Location/>
               <p>KvX, Łapanów Małopolska</p>
            </div>
            <div>
               <Phone/>
               <p>727 400 221</p>
            </div>
            <div>
               <Email/>
               <p>KvXKontakt@gmail.com</p>
            </div>
         </div>
         </div>
         
      </div>
    );
}
 
export default Contact;