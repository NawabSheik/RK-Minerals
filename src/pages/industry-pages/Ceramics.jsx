import React from 'react';
import Brand from '../../components/Brand';

import TalcImage from '../../assets/products/Talc L.png';
import ChinaClayImage from '../../assets/products/china clay L.png';
import WollastoniteImage from '../../assets/products/wollastonite L.png';
import BallClayImage from '../../assets/products/ball clay L.png';
import LevigatedClayImage from '../../assets/products/levigated-clay L.png'
import SodiumFeldsparImage from '../../assets/products/sodium-feldspar L.png';
import PotassiumFeldsparImage from '../../assets/products/potassium-feldspar L.png';
import QuartzImage from '../../assets/products/quartz L.png';
import Cta from '../../components/cta';
import { Link } from 'react-router-dom';

const Paint = () => {
  return (
   <div className="industry-page">
      <Brand className="brand-section"/>
      
      <div className="industry-section">
        <h2 className='industry-head'> Ceramics </h2>
        <span className='industry-stroke'></span>
        <h3 className="industry-subhead">Strength, Whiteness, and Thermal Stability</h3>
        <p className="industry-para">RK Minerals delivers high-quality minerals that enhance strength, whiteness, and thermal stability in ceramics. Our minerals improve workability, reduce shrinkage, and provide consistency in tile, tableware, sanitary ware, porcelain and insulator production.</p>
        <p className="industry-para">A good mineral for Ceramics should have</p>
        <div className='industry-requirements'>
            <div className='requirements-top'>
                <h2 className='requirement'>High Strength</h2>
                <h2 className='requirement'>Thermal Stability</h2>
            </div>
            <div className='requirements-bottom'>
                <h2 className='requirement'>Workability</h2>
                <h2 className='requirement'>Low Shrinkage & Consistency</h2>
            </div>
        </div>
      </div>

      <div className="industry-section2">
        <h2 className='industry-head2'> RK Mineral Products for Ceramics </h2>
        <div className="industry-products-section">

            <div className="industry-products">
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

                {/* Talc */}
                <Link to="/products/talc" className='industry-products-card'>
                    <h2 className="product-name-ind">Talc Chips</h2>
                    <div className='product-requirements'>
                        <div className='requirements-top'>
                            <h2 className='product-requirement'>SiO₂: 60–62%</h2>
                            <h2 className='product-requirement'>MgO: 28–30%</h2>
                        </div>
                        <div className='requirements-bottom'>
                            <h2 className='product-requirement'>Fe₂O₃: &lt;1%</h2>
                            <h2 className='product-requirement'>L Value &gt;  85%</h2>
                        </div>
                    </div>
                    <img src={TalcImage}/>
                </Link>
            </div>

            <div className="industry-products">
                {/* Potassium Feldspar */}
                <Link to="/products/potassium-feldspar" className='industry-products-card'>
                    <h2 className="product-name-ind">Potassium Feldspar</h2>
                    <div className='product-requirements'>
                        <div className='requirements-top'>
                            <h2 className='product-requirement'>K₂O: 10–12%</h2>
                            <h2 className='product-requirement'>SiO₂: 65–68%</h2>
                        </div>
                        <div className='requirements-bottom'>
                            <h2 className='product-requirement'>Al₂O₃: 18–20%</h2>
                            <h2 className='product-requirement'>Fe₂O₃: &lt;0.10%</h2>
                        </div>
                    </div>
                    <img src={PotassiumFeldsparImage}/>
                </Link>

                {/* Sodium Feldspar */}
                <Link to="/products/sodium-feldspar" className='industry-products-card'>
                    <h2 className="product-name-ind">Sodium Feldspar</h2>
                    <div className='product-requirements'>
                        <div className='requirements-top'>
                            <h2 className='product-requirement'>Na₂O: 9–10%</h2>
                            <h2 className='product-requirement'>SiO₂: 65–67%</h2>
                        </div>
                        <div className='requirements-bottom'>
                            <h2 className='product-requirement'>Al₂O₃: 18–20%</h2>
                            <h2 className='product-requirement'>Fe₂O₃: &lt;0.10%</h2>
                        </div>
                    </div>
                    <img src={SodiumFeldsparImage}/>
                </Link>
            </div>

            <div className="industry-products">
                {/* Ball Clay */}
                <Link to="/products/ball-clay" className='industry-products-card'>
                    <h2 className="product-name-ind">Ball Clay</h2>
                    <div className='product-requirements'>
                        <div className='requirements-top'>
                            <h2 className='product-requirement'>SiO₂: 55–58%</h2>
                            <h2 className='product-requirement'>Al₂O₃: 27–29%</h2>
                        </div>
                        <div className='requirements-bottom'>
                            <h2 className='product-requirement'>Fe₂O₃: &lt;1%</h2>
                            <h2 className='product-requirement'>Plasticity: High</h2>
                        </div>
                    </div>
                    <img src={BallClayImage}/>
                </Link>

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

            <div className="industry-products">
                {/* Wollastonite */}
                <Link to="/products/wollastonite" className='industry-products-card'>
                    <h2 className="product-name-ind">Wollastonite</h2>
                    <div className='product-requirements'>
                        <div className='requirements-top'>
                            <h2 className='product-requirement'>CaSiO₃: 96–98%</h2>
                            <h2 className='product-requirement'>CaO: 20–25%</h2>
                        </div>
                        <div className='requirements-bottom'>
                            <h2 className='product-requirement'>SiO₂: 60–65%</h2>
                            <h2 className='product-requirement'>Al₂O₃: 28–34%</h2>
                        </div>
                    </div>
                    <img src={WollastoniteImage}/>
                </Link>
                <Link to="/products/quartz" className='industry-products-card'>
                    <h2 className="product-name-ind">Quartz</h2>
                    <div className='product-requirements'>
                        <div className='requirements-top'>
                            <h2 className='product-requirement'>CaSiO₃: 96–98%</h2>
                            <h2 className='product-requirement'>CaO: 30–31%</h2>
                        </div>
                        <div className='requirements-bottom'>
                            <h2 className='product-requirement'>SiO₂: 48–52%</h2>
                            <h2 className='product-requirement'>Low Loss on Ignition (&lt;1%)</h2>
                        </div>
                    </div>
                    <img src={QuartzImage}/>
                </Link>
            </div>

        </div>
        <p className='note-point'>* Available in powder, lump, or chip form, these minerals improve strength, whiteness, thermal stability, and workability for ceramic production.</p>
      </div>

      <div className="industry-excellence">
        <h2 className='industry-head3'> How We Deliver Excellence </h2>
        <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Quality Assurance</h2>
                <p className='excellence-para'>Each batch undergoes rigorous quality checks to ensure purity, particle uniformity, and thermal stability for consistent ceramic performance.</p>
            </div>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Trusted Partnerships</h2>
                <p className='excellence-para'>Excellence doesn’t end with our products — it extends to our relationships. We work closely with our partners, understanding their needs and delivering on time, every time.</p>
            </div>
        </div>
        <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Customer-Centric Approach</h2>
                <p className='excellence-para'>We offer customized mineral solutions to meet the strength, whiteness, and thermal requirements of your ceramic formulations.</p>
            </div>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Innovation Support</h2>
                <p className='excellence-para'>Our minerals help manufacturers create premium ceramics with superior durability, aesthetics, and performance.</p>
            </div>
        </div>
      </div>

      <Cta/>
</div>


  )
}

export default Paint
