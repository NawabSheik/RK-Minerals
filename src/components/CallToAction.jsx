import React from 'react'
import { MdLocalPhone } from "react-icons/md";
import { Link } from 'react-router-dom';


const cta = () => {
  return (
    <div className='cta'>
      <div className="cta-head"> Contact Us For Best Quality Minerals</div>
      <div className="cta-button"> <MdLocalPhone size={35} /> <Link to="/contact" class="cta-contact">Talk To Us </Link></div>
    </div>
  )
}

export default cta
