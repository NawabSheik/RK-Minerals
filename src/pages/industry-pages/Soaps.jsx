import React from 'react';
import Brand from '../../components/Brand';
import TalcImage from '../../assets/products/talc.png';
import ChinaClayImage from '../../assets/products/china-clay.png';
import QuartzImage from '../../assets/products/quartz.png';
import Cta from '../../components/cta';

const Soaps = () => {
  return (
    <div className="industry-page">
      <Brand className="brand-section"/>
      <div className="industry-section">
        <h2 className='industry-head'> Soaps & Detergents </h2>
        <span className='industry-stroke'></span>
        <h3 className="industry-subhead">Purity and Performance in Every Product</h3>
        <p className="industry-para">RK Minerals provides high-quality minerals that enhance the smoothness, brightness, and porocity of soaps and detergents. Our products help improve texture, lathering efficiency, and stability, ensuring superior performance for personal care and household products.</p>
        <p className="industry-para">A good mineral for Soaps & Detergents should have</p>
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
        <h2 className='industry-head2'> RK Mineral Products for Soaps & Detergents </h2>
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

            <div className='industry-products-card'>
                <h2 className="product-name-ind">Quartz</h2>
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
                <img src={QuartzImage}/>
            </div>

            </div>
        </div>
        <p className='note-point'>* Available in powder form, these minerals improve smoothness, brightness, and absorbency for soaps and detergents.</p>
      </div>

      <div className="industry-excellence">
        <h2 className='industry-head3'> How We Deliver Excellence </h2>
        <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Quality Assurance</h2>
                <p className='excellence-para'>All minerals are tested for purity, brightness, and particle size to ensure consistent performance in soaps and detergents.</p>
            </div>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Trusted Partnerships</h2>
                <p className='excellence-para'>Excellence doesn’t end with our products — it extends to our relationships. We work closely with our partners, understanding their needs and delivering on time, every time.</p>
            </div>
            </div>
         <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Customer-Centric Approach</h2>
                <p className='excellence-para'>We provide tailored mineral grades to meet the smoothness, brightness, and absorbency requirements of your products.</p>
                </div>
                <div className='excellence-card'>
                <h2 className='excellence-head'>Innovation Support</h2>
                <p className='excellence-para'>Our minerals help manufacturers create superior soaps and detergents with enhanced performance and aesthetics.</p>
                </div>
        </div>
        </div>

      <Cta/>
</div>

  )
}

export default Soaps
