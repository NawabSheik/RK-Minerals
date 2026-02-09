import React from 'react'
import { MdLocalPhone } from "react-icons/md";
import { Link } from 'react-router-dom';


const cta = () => {
  return (
    <div className='cta'>
      <div className="cta-head"> Contact Us For Best Quality Minerals</div>
      <Link to="/contact" className="cta-button"> <MdLocalPhone size={35} /> <div className="cta-contact">Talk To Us </div></Link>
    </div>
  )
}

export default cta
