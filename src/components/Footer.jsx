import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import Logo from "../assets/rk-logo2.svg";


import "../styles/Footer.css";
import Cta from './CallToAction';




const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-upper'>
          <div className="footer-row">
            <img className='branding' src={Logo}/>
            <div className="footer-social">
                <FaInstagram size={48} color='#021432'/>
                <LuFacebook size={48} color='#021432'/>
                <FaLinkedin size={48} color='#021432' />


            </div>
              </div>
             
           
        </div>
        <Cta/>
        <p className='copyright'> Copyright © 2025. All Rights Reserved</p>
    </div>
  )
}

export default Footer
