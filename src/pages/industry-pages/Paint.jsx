import React from 'react';
import Brand from '../../components/Brand';
import ClayImage from '../../assets/products/china-clay.png';
import QuartzImage from '../../assets/products/quartz.png';
import TalcImage from '../../assets/products/talc.png';
import WollastoniteImage from '../../assets/products/wollastonite.png';
import CalcinedClayImage from '../../assets/products/calcined-clay.png';
import Cta from '../../components/cta';

const Paint = () => {
  return (
    <div className="industry-page">
      <Brand className="brand-section"/>

      <div className="industry-section">
        <h2 className='industry-head'> Paint & Coatings </h2>
        <span className='industry-stroke'></span>
        <h3 className="industry-subhead">Shaping the Colors of Innovation</h3>
        <p className="industry-para">
          RK Minerals supports the paint & coatings industry with high-quality minerals that improve brightness, coverage, durability, and smooth finish. 
          Our advanced processing and strict quality control make us a trusted partner for decorative, protective, and industrial paints.
        </p>
        <p className="industry-para">A good mineral for Paints should have</p>
        <div className='industry-requirements'>
            <div className='requirements-top'>
                <h2 className='requirement'>High Purity</h2>
                <h2 className='requirement'>Controlled Particle Size</h2>
            </div>
            <div className='requirements-bottom'>
                <h2 className='requirement'>Brightness & Whiteness</h2>
                <h2 className='requirement'>Consistency in Quality</h2>
            </div>
        </div>
      </div>

      <div className="industry-section2">
        <h2 className='industry-head2'> RK Mineral Products for Paint & Coatings </h2>
        <div className="industry-products-section">

            <div className="industry-products">
              <div className='industry-products-card'>
                  <h2 className="product-name-ind">Clay</h2>
                  <div className='product-requirements'>
                      <div className='requirements-top'>
                          <h2 className='product-requirement'>Al2O3 – 36%</h2>
                          <h2 className='product-requirement'>SiO2 – 46%</h2>
                      </div>
                      <div className='requirements-bottom'>
                          <h2 className='product-requirement'>Fe2O3 – 0.5%</h2>
                          <h2 className='product-requirement'>Brightness – High</h2>
                      </div>
                  </div>
                  <img src={ClayImage}/>
              </div>

              <div className='industry-products-card'>
                  <h2 className="product-name-ind">Quartz</h2>
                  <div className='product-requirements'>
                      <div className='requirements-top'>
                          <h2 className='product-requirement'>SiO2 – 99%</h2>
                          <h2 className='product-requirement'>Fe2O3 – 0.04%</h2>
                      </div>
                      <div className='requirements-bottom'>
                          <h2 className='product-requirement'>Al2O3 – 0.2%</h2>
                          <h2 className='product-requirement'>Whiteness – Excellent</h2>
                      </div>
                  </div>
                  <img src={QuartzImage}/>
              </div>
            </div>

            <div className="industry-products">
              <div className='industry-products-card'>
                  <h2 className="product-name-ind">Talc</h2>
                  <div className='product-requirements'>
                      <div className='requirements-top'>
                          <h2 className='product-requirement'>SiO2 – 63%</h2>
                          <h2 className='product-requirement'>MgO – 31%</h2>
                      </div>
                      <div className='requirements-bottom'>
                          <h2 className='product-requirement'>CaO – 0.6%</h2>
                          <h2 className='product-requirement'>Whiteness – High</h2>
                      </div>
                  </div>
                  <img src={TalcImage}/>
              </div>

              <div className='industry-products-card'>
                  <h2 className="product-name-ind">Calcined Clay</h2>
                  <div className='product-requirements'>
                      <div className='requirements-top'>
                          <h2 className='product-requirement'>Al2O3 – 40%</h2>
                          <h2 className='product-requirement'>SiO2 – 52%</h2>
                      </div>
                      <div className='requirements-bottom'>
                          <h2 className='product-requirement'>Fe2O3 – 1%</h2>
                          <h2 className='product-requirement'>Brightness – Enhanced</h2>
                      </div>
                  </div>
                  <img src={CalcinedClayImage}/>
              </div>
            </div>

            <div className="industry-products">
              <div className='industry-products-card'>
                  <h2 className="product-name-ind">Wollastonite</h2>
                  <div className='product-requirements'>
                      <div className='requirements-top'>
                          <h2 className='product-requirement'>CaO – 48%</h2>
                          <h2 className='product-requirement'>SiO2 – 51%</h2>
                      </div>
                      <div className='requirements-bottom'>
                          <h2 className='product-requirement'>Fe2O3 – 0.3%</h2>
                          <h2 className='product-requirement'>Whiteness – Stable</h2>
                      </div>
                  </div>
                  <img src={WollastoniteImage}/>
              </div>
            </div>
        </div>

        <p className='note-point'>
          * Available in powder, lump, or chip form. Custom grades are offered to suit your specific paint formulations.
        </p>
      </div>

      <div className="industry-excellence">
        <h2 className='industry-head3'> How We Deliver Excellence </h2>
        <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Quality Assurance</h2>
                <p className='excellence-para'>Our quality control labs ensure each mineral batch has consistent brightness, purity, and particle size for reliable paint applications.</p>
            </div>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Sustainability</h2>
                <p className='excellence-para'>We follow responsible mining and eco-friendly processing methods to reduce environmental footprint.</p>
            </div>
        </div>
        <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Customer-Centric Approach</h2>
                <p className='excellence-para'>We work closely with paint manufacturers to provide tailored mineral solutions that improve performance and finish.</p>
            </div>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Global Reach</h2>
                <p className='excellence-para'>With strong logistics and supply chain, RK Minerals serves paint industries across India and international markets.</p>
            </div>
        </div>
      </div>

      <Cta/>
</div>

  )
}

export default Paint
