import React from 'react';
import Brand from '../../components/Brand';
import ClayImage from '../../assets/products/china clay L.png';
import QuartzImage from '../../assets/products/quartz L.png';
import TalcImage from '../../assets/products/Talc L.png';
import WollastoniteImage from '../../assets/products/wollastonite L.png';
import CalcinedClayImage from '../../assets/products/calcined-clay L.png';
import Cta from '../../components/cta';
import { Link } from 'react-router-dom';

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
              <Link to="/products/china-clay" className='industry-products-card'>
                  <h2 className="product-name-ind">China Clay</h2>
                  <div className='product-requirements'>
                      <div className='requirements-top'>
                          <h2 className='product-requirement'>Al₂O₃ – 36%</h2>
                          <h2 className='product-requirement'>SiO₂ – 46%</h2>
                      </div>
                      <div className='requirements-bottom'>
                          <h2 className='product-requirement'>Fe₂O₃ – 0.5%</h2>
                          <h2 className='product-requirement'>TiO₂ – 0.3%</h2>
                      </div>
                  </div>
                  <img src={ClayImage}/>
              </Link>

              <Link to="/products/quartz" className='industry-products-card'>
                  <h2 className="product-name-ind">Quartz</h2>
                  <div className='product-requirements'>
                      <div className='requirements-top'>
                          <h2 className='product-requirement'>SiO₂ – 99%</h2>
                          <h2 className='product-requirement'>Fe₂O₃ – 0.04%</h2>
                      </div>
                      <div className='requirements-bottom'>
                          <h2 className='product-requirement'>Al₂O₃ – 0.2%</h2>
                          <h2 className='product-requirement'>CaO – 0.05%</h2>
                      </div>
                  </div>
                  <img src={QuartzImage}/>
              </Link>
            </div>

            <div className="industry-products">
              <Link to="/products/talc" className='industry-products-card'>
                  <h2 className="product-name-ind">Talc</h2>
                  <div className='product-requirements'>
                      <div className='requirements-top'>
                          <h2 className='product-requirement'>SiO₂ – 63%</h2>
                          <h2 className='product-requirement'>MgO – 31%</h2>
                      </div>
                      <div className='requirements-bottom'>
                          <h2 className='product-requirement'>CaO – 0.6%</h2>
                          <h2 className='product-requirement'>Fe₂O₃ – 0.3%</h2>
                      </div>
                  </div>
                  <img src={TalcImage}/>
              </Link>

              <Link to="/products/calcined-clay" className='industry-products-card'>
                  <h2 className="product-name-ind">Calcined Clay</h2>
                  <div className='product-requirements'>
                      <div className='requirements-top'>
                          <h2 className='product-requirement'>Al₂O₃ – 40%</h2>
                          <h2 className='product-requirement'>SiO₂ – 52%</h2>
                      </div>
                      <div className='requirements-bottom'>
                          <h2 className='product-requirement'>Fe₂O₃ – 1%</h2>
                          <h2 className='product-requirement'>TiO₂ – 0.5%</h2>
                      </div>
                  </div>
                  <img src={CalcinedClayImage}/>
              </Link>
            </div>

            <div className="industry-products">
              <Link to="/products/wollastonite" className='industry-products-card'>
                  <h2 className="product-name-ind">Wollastonite</h2>
                  <div className='product-requirements'>
                      <div className='requirements-top'>
                          <h2 className='product-requirement'>CaO – 48%</h2>
                          <h2 className='product-requirement'>SiO₂ – 51%</h2>
                      </div>
                      <div className='requirements-bottom'>
                          <h2 className='product-requirement'>Fe₂O₃ – 0.3%</h2>
                          <h2 className='product-requirement'>Al₂O₃ – 0.2%</h2>
                      </div>
                  </div>
                  <img src={WollastoniteImage}/>
              </Link>
            </div>
        </div>

        <p className='note-point'>
          * Available in powder form. Custom grades are offered to suit your specific paint formulations.
        </p>
      </div>

      <div className="industry-excellence">
        <h2 className='industry-head3'> How We Deliver Excellence </h2>
        <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Quality Assurance</h2>
                <p className='excellence-para'>Our quality control labs ensure each mineral batch has consistent composition, purity, and particle size for reliable paint applications.</p>
            </div>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Trusted Partnerships</h2>
                <p className='excellence-para'>Excellence doesn’t end with our products — it extends to our relationships. We work closely with our partners, understanding their needs and delivering on time, every time.</p>
            </div>
        </div>
        <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Technical Expertise</h2>
                <p className='excellence-para'>Our mineral specialists continuously refine processing methods to ensure stable composition for various paint systems.</p>
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

export default Paint;
