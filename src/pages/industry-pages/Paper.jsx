import React from 'react';
import Brand from '../../components/Brand';
import TalcImage from '../../assets/products/talc.png';
import ChinaClayImage from '../../assets/products/china clay L.png'
import LevigatedClayImage from '../../assets/products/levigated-clay L.png'
import Cta from '../../components/cta';
import { Link } from 'react-router-dom';

const Paint = () => {
  return (
    <div className="industry-page">
      <Brand className="brand-section"/>
      <div className="industry-section">
        <h2 className='industry-head'> Paper </h2>
        <span className='industry-stroke'></span>
        <h3 className="industry-subhead">Strength and Smoothness for Every Sheet</h3>
        <p className="industry-para">R.K. Minerals supplies premium raw materials that can improve the quality of paper industry. Our minerals help achieve high opacity, controlled absorption, and improved durability in paper products, making us a reliable partner for leading paper manufacturers.</p>
        <p className="industry-para">A good mineral for Paper should have</p>
        <div className='industry-requirements'>
            <div className='requirements-top'>
                <h2 className='requirement'>High<br/> Brightness</h2>
                <h2 className='requirement'>Controlled Particle Size</h2>
            </div>
            <div className='requirements-bottom'>
                <h2 className='requirement'>Low Abrasiveness</h2>
                <h2 className='requirement'>Consistency in Quality</h2>
            </div>
        </div>
      </div>

      <div className="industry-section2">
        <h2 className='industry-head2'> RK Mineral Products for Paper </h2>
        <div className="industry-products-section">
            <div className="industry-products">

            {/* Talc */}
            <Link to="/products/talc" className='industry-products-card'>
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
            </Link>

            {/* China Clay */}
            <Link to="/products/china-clay" className='industry-products-card'>
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
            </Link>
            </div>

            <div className="industry-products">

            {/* Levigated Clay */}
            <Link to="/products/levigated-clay" className='industry-products-card'>
                <h2 className="product-name-ind">Levigated Clay</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>SiO₂: 46–49%</h2>
                        <h2 className='product-requirement'>Al₂O₃: 34–36%</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Fe₂O₃: &lt;0.7%</h2>
                        <h2 className='product-requirement'>Brightness: 90%+</h2>
                    </div>
                </div>
                <img src={LevigatedClayImage}/>
            </Link>
            
            </div>
        </div>
        <p className='note-point'>* Available in powder or lump form, these minerals are tailored to improve brightness, smoothness, and opacity in paper manufacturing.</p>
      </div>

      <div className="industry-excellence">
        <h2 className='industry-head3'> How We Deliver Excellence </h2>
        <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Quality Assurance</h2>
                <p className='excellence-para'>Each batch undergoes strict quality checks to ensure brightness, purity, and particle uniformity for consistent paper performance.</p>
            </div>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Trusted Partnerships</h2>
                <p className='excellence-para'>Excellence doesn’t end with our products — it extends to our relationships. We work closely with our partners, understanding their needs and delivering on time, every time.</p>
            </div>
            </div>
         <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Customer-Centric Approach</h2>
                <p className='excellence-para'>We provide customized mineral solutions to meet the unique brightness and smoothness requirements of the paper industry.</p>
                </div>
                <div className='excellence-card'>
                <h2 className='excellence-head'>Innovation Support</h2>
                <p className='excellence-para'>Our minerals help paper manufacturers achieve better printability, opacity, and durability for premium quality paper.</p>
                </div>
        </div>
        </div>

      <Cta/>
</div>

  )
}

export default Paint
