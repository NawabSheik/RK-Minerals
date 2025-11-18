import React from 'react';
import "../styles/Contact.css";
import Brand from './Brand';
import { MdLocalPhone } from "react-icons/md";
import { MdEmail } from "react-icons/md";
import { IoHome } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="contact-page">
    
        <Brand/>

      <div className="contact-info">
        <div className="mobile-div">
          <div className="mobile-icon">
            <MdLocalPhone size={50} />
          </div>

          <div className='mobile-numbers'>
            <h2 className='mobile-number'>Akshay Jain +91-8883268326</h2>
            <h2 className='mobile-number'>Sanjay Jain +91-9414112692</h2>
            <h2 className='mobile-number'>Payas Jain +91-9426004400</h2>
          </div>

        </div>
        <div className="mobile-div">
          <div className="mobile-icon">
            <MdEmail size={50} />
          </div>

          <div className='mobile-numbers'>
            <h2 className='mobile-number'> info@rkmineralsindia.co.in</h2>
            <h2 className='mobile-number'>rkminerals692@gmail.com</h2>
            <h2 className='mobile-number'>rkimpex2692@gmail.com</h2>
          </div>

        </div>
        <div className="mobile-div">
          <div className="mobile-icon">
            <IoHome size={50} />
          </div>

          <div className='mobile-numbers'>
            <h2 className='mobile-number'>A-114<br/> RK Colony, Bhilwara<br/> (311001), Rajasthan</h2>
            
          </div>

        </div>
      </div>
      <div className="contact-div">
        {/* Left side: Google Map */}
        <div className="contact-div-left">
            
          <iframe
            title="Google Map - R.K Minerals"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.7630500120063!2d74.6191594!3d25.345730999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c2526aaaaaab%3A0x5554ab456a4aa87e!2sR.K%20Minerals!5e0!3m2!1sen!2sin!4v1760412150965!5m2!1sen!2sin"
            className="map"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right side: Contact form */}
        <div className="contact-form">
            <h2 className='contact-head'>Get in Touch with Us</h2>
          <form className='form-fields'>
            <label className='field' htmlFor="name">Name</label>
            <input className='input-field' type="text" id="name" name="name" required />

            <label className='field' htmlFor="email">Email</label>
            <input className='input-field' type="email" id="email" name="email" required />

           
            
            

            <label className='field' htmlFor="message">Message</label>
            <textarea className='input-field-message' id="message" name="message" required></textarea>
            

            <button className='submit-btn' type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
