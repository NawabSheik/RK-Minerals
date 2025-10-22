import React from 'react'
import { MdLocalPhone } from "react-icons/md";


const cta = () => {
  return (
    <div className='cta'>
      <div className="cta-head"> Consult our Technical Team for More Details</div>
      <div className="cta-button"> <MdLocalPhone size={35} /> <h2 class="cta-contact"> Contact Our Technical Team </h2></div>
    </div>
  )
}

export default cta
