import React from 'react';
import '../styles/_footer.scss';

import {ReactComponent as Instagram} from '../images/svg/instagram.svg';
import {ReactComponent as Facebook} from '../images/svg/facebook2.svg';
import {ReactComponent as Email} from '../images/svg/envelop.svg';
import {ReactComponent as Youtube} from '../images/svg/youtube.svg';

const FooterAll = () => {

   return ( 
      <div className="footer">
         <div className="footer__icons">
            <ul>
               <li><Instagram className="footer__icon"/></li>
               <li><Facebook className="footer__icon"/></li>
               <li><Youtube className="footer__icon"/></li>
               <li><Email className="footer__icon"/></li>
            </ul>
         </div>
         <div className="footer__navigation">
            <ul>
               <li>HOME</li>
               <li>PRICING</li>
               <li>POLICY</li>
               <li>SPACECRAFT</li>
               <li>LOCATIONS</li>
            </ul>
         </div>
         <div className="footer__subnavigation">
            <ul>
               <li>CONTACT</li>
               <li>BLOG</li>
               <li>PHONE</li>
               <li>DELIVERY</li>
            </ul>
         </div>
         <p className="footer__copyright">
            &copy; Copyright 2020 by <span className="name">Paweł Roj</span>.
        </p>
      </div>
    );
}
 
export default FooterAll;