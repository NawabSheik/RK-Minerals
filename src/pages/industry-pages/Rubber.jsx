import React from 'react';
import Brand from '../../components/Brand';

import TalcImage from '../../assets/products/talc.png';
import CalcinedClayImage from '../../assets/products/calcined-clay.png';
import WollastoniteImage from '../../assets/products/wollastonite.png';
import ChinaClayImage from '../../assets/products/china-clay.png'

import Cta from '../../components/cta';

const Paint = () => {
  return (
    <div className="industry-page">
      <Brand className="brand-section"/>
      <div className="industry-section">
        <h2 className='industry-head'> Rubber </h2>
        <span className='industry-stroke'></span>
        <h3 className="industry-subhead">Reinforcement and Durability for Rubber Products</h3>
        <p className="industry-para">RK Minerals provides high-performance minerals that enhance elasticity, strength, and resistance in rubber manufacturing. Our products improve reinforcement, thermal stability, and workability, ensuring high-quality end products for tires, footwear, hoses, and industrial rubber goods.</p>
        <p className="industry-para">A good mineral for Rubber should have</p>
        <div className='industry-requirements'>
            <div className='requirements-top'>
                <h2 className='requirement'>Reinforcing Properties</h2>
                <h2 className='requirement'>Controlled Particle Size</h2>
            </div>
            <div className='requirements-bottom'>
                <h2 className='requirement'>Thermal Stability</h2>
                <h2 className='requirement'>Consistency in Quality</h2>
            </div>
        </div>
      </div>

      <div className="industry-section2">
        <h2 className='industry-head2'> RK Mineral Products for Rubber </h2>
        <div className="industry-products-section">
            <div className="industry-products">

            {/* Talc */}
            <div className='industry-products-card'>
                <h2 className="product-name-ind">Talc</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>SiO₂: 60–62%</h2>
                        <h2 className='product-requirement'>MgO: 28–30%</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Fe₂O₃: &lt;1%</h2>
                        <h2 className='product-requirement'>Whiteness: 90%+</h2>
                    </div>
                </div>
                <img src={TalcImage}/>
            </div>

            {/* China Clay */}
            <div className='industry-products-card'>
                <h2 className="product-name-ind">China Clay</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>SiO₂: 45–48%</h2>
                        <h2 className='product-requirement'>Al₂O₃: 35–37%</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Fe₂O₃: &lt;1%</h2>
                        <h2 className='product-requirement'>Brightness: 85–90%</h2>
                    </div> 
                </div>
                <img src={ChinaClayImage}/>
            </div>
            </div>

            <div className="industry-products">

            {/* Wollastonite */}
            <div className='industry-products-card'>
                <h2 className="product-name-ind">Wollastonite</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>CaSiO₃: 96–98%</h2>
                        <h2 className='product-requirement'>CaO: 30–31%</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>SiO₂: 50–52%</h2>
                        <h2 className='product-requirement'>Low Loss on Ignition (&lt;1%)</h2>
                    </div>
                </div>
                <img src={WollastoniteImage}/>
            </div>
            <div className='industry-products-card'>
                <h2 className="product-name-ind">Calcined Clay</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>Al₂O₃: 35–38%</h2>
                        <h2 className='product-requirement'>SiO₂: 45–48%</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Fe₂O₃: &lt;1%</h2>
                        <h2 className='product-requirement'>High Thermal Stability</h2>
                    </div>
                </div>
                <img src={CalcinedClayImage}/>
            </div>
            </div>
        </div>
        <p className='note-point'>* Available in powder form, these minerals provide reinforcement, reduce shrinkage, and improve processing in rubber compounding.</p>
      </div>

      <div className="industry-excellence">
        <h2 className='industry-head3'> How We Deliver Excellence </h2>
        <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Quality Assurance</h2>
                <p className='excellence-para'>Each mineral undergoes strict testing to ensure consistency, purity, and performance in rubber processing.</p>
            </div>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Trusted Partnerships</h2>
                <p className='excellence-para'>Excellence doesn’t end with our products — it extends to our relationships. We work closely with our partners, understanding their needs and delivering on time, every time.</p>
            </div>
            </div>
         <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Customer-Centric Approach</h2>
                <p className='excellence-para'>We provide tailor-made mineral grades to match the specific reinforcement and durability needs of rubber applications.</p>
                </div>
                <div className='excellence-card'>
                <h2 className='excellence-head'>Innovation Support</h2>
                <p className='excellence-para'>Our minerals enhance mechanical strength and thermal stability, supporting innovation in tire and industrial rubber manufacturing.</p>
                </div>
        </div>
        </div>

      <Cta/>
</div>

  )
}

export default Paint
