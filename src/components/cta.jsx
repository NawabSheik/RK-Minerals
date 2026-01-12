import React from 'react'
import { MdLocalPhone } from "react-icons/md";

const Cta = () => {
  const whatsappNumber = "+918883268326";

  return (
    <div className='cta'>
      <div className="cta-head">Consult our Technical Team for More Details</div>

      <a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cta-button"
        style={{ textDecoration: "none" }}
      >
        <MdLocalPhone size={35} />
        <h2 className="cta-contact">Contact Our Technical Team</h2>
      </a>
    </div>
  )
}

export default Cta;

