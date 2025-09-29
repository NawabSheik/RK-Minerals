import React from 'react';
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook } from "react-icons/lu";
import { FaLinkedin } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaHome } from "react-icons/fa";


import "../styles/Footer.css";
import Cta from './cta';




const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-upper'>
          <div className="footer-row">
            <h3 className='branding'>RK Minerals</h3>
            <div className="footer-social">
                <FaInstagram size={48} color='#458'/>
                <LuFacebook size={48} color='#458'/>
                <FaLinkedin size={48} color='#458' />


            </div>
              </div>
               <div className="footer-row">
            <div className='contact-details'>
              <div className='contact-detail'>
              <FaPhone  size={24} color='#458'/>
              <p className="info">+91-88839 68326</p>
              </div>
              <div className='contact-detail'>
              <MdEmail  size={26} color='#458'/>
              <p className="info">info@rkmineralsindia.co.in</p>
              </div>
              <div className='contact-detail'>
              <FaHome  size={30} color='#458'/>
              <p className="info">A-114 R.K Colony, Bhilwara 311001, Rajasthan</p>
              </div>
            </div>
           
              </div>
        </div>
        <Cta/>
        <p> Copyright © 2025. All Rights Reserved</p>
    </div>
  )
}

export default Footer
