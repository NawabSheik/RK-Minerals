import React from 'react';
import Brand from '../../components/Brand';
import TalcImage from '../../assets/products/talc.png';
import ChinaClayImage from '../../assets/products/china-clay.png';
import QuartzImage from '../../assets/products/quartz.png';
import Cta from '../../components/cta';
import Excellence from '../../components/Excellence';

const Soaps = () => {
  return (
    <div className="industry-page">
      <Brand className="brand-section"/>
      <div className="industry-section">
        <h2 className='industry-head'> Soaps & Detergents </h2>
        <span className='industry-stroke'></span>
        <h3 className="industry-subhead">Purity and Performance in Every Product</h3>
        <p className="industry-para">RK Minerals provides high-quality minerals that enhance the smoothness, brightness, and porosity of soaps and detergents. Our products help improve texture, lathering efficiency, and stability, ensuring superior performance for personal care and household products.</p>
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
                        <h2 className='product-requirement'>Al₂O₃: 34–36%</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Fe₂O₃: 1-2%</h2>
                        <h2 className='product-requirement'>Brightness: 85–90</h2>
                    </div> 
                </div>
                <img src={ChinaClayImage}/>
            </div>

            <div className='industry-products-card'>
                <h2 className="product-name-ind">Quartz</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>SiO₂: 99+%</h2>
                        <h2 className='product-requirement'>Al₂O₃: &lt;0.10%</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Fe₂O₃: &lt;0.10%</h2>
                        <h2 className='product-requirement'>Brightness: 85–90</h2>
                    </div> 
                </div>
                <img src={QuartzImage}/>
            </div>

            </div>
        </div>
        <p className='note-point'>* Available in powder form, these minerals improve smoothness, brightness, and absorbency for soaps and detergents.</p>
      </div>

     
        <Excellence/>
      <Cta/>
</div>

  )
}

export default Soaps
