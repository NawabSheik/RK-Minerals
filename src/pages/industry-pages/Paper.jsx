import React from 'react';
import Brand from '../../components/Brand';
import TalcImage from '../../assets/products/talc.png';
import ChinaClayImage from '../../assets/products/china clay L.png'
import LevigatedClayImage from '../../assets/products/calcined-clay L.png'
import Cta from '../../components/cta';
import { Link } from 'react-router-dom';
import Excellence from '../../components/Excellence';

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
                <h2 className='requirement'>High Brightness</h2>
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

            {/* Calcined Kaolin */}
            <Link to="/products/calcined-clay" className='industry-products-card'>
                <h2 className="product-name-ind">Calcined Kaolin</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>Fe₂O₃ + TiO₂: &lt;0.5%</h2>
                        <h2 className='product-requirement'>Al₂O₃: 40-45%</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>SiO₂: 50-55%</h2>
                        <h2 className='product-requirement'>TiO₂: 0.5%</h2>
                    </div>
                </div>
                <img src={LevigatedClayImage}/>
            </Link>
            
            </div>
        </div>
        <p className='note-point'>* Available in powder or lump form, these minerals are tailored to improve brightness, smoothness, and opacity in paper manufacturing.</p>
      </div>

      <Excellence/>

      <Cta/>
</div>

  )
}

export default Paint
