import React from 'react';
import "../styles/GlobalStats.css"


const GlobalStats = () => {
  return (
    <div className='global-page'>
      <h2 className='global-head'>Engineered for Global Standards</h2>
      <span className='global-stroke'></span>
      <p className='global-para'>Precision, expertise, and innovation come together to deliver minerals trusted by world-leading manufacturers. Every process, every product — perfected through science, backed by integrity.</p>

      <div className='global-section'>
        <div className='global-box'>
          <h2 className='global-box-head'>High Quality Minerals</h2>
          <p className='global-box-para'>We aim to deliver high quality products with superior
                                        performance. Quality products
                                        help to maintain customer
                                        satisfaction and loyalty and
                                        build reputation by gaining
                                        accreditation with a
                                        recognized quality standard.</p>
        </div>
        <div className='global-box'>
          <h2 className='global-box-head'>Provide Free Samples </h2>
          <p className='global-box-para'>Get legitimate free samples of
our products. If you are
interested in having one,
please reach out to us and we
would be happy to share more
details.</p>
        </div>
        <div className='global-box'>
          <h2 className='global-box-head'>Best Industry Experts</h2>
          <p className='global-box-para'>Our team is filled with highly
accomplished Industry
experts. We follow the best
practices and make strategic
decisions to improve operating
performance in this
demanding market
environment.</p>
        </div>
        <div className='global-box'>
          <h2 className='global-box-head'>Technical Support</h2>
           <p className='global-box-para'>Our technical support
maintains and monitors the
overall system of the
organization. Get user friendly
assistance and let us address
your issues.</p>
        </div>
        
      </div>
    </div>
  )
}

export default GlobalStats
