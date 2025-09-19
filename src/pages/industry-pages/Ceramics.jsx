import React from 'react';
import Brand from '../../components/Brand';

import TalcImage from '../../assets/products/talc.png';
import ChinaClayImage from '../../assets/products/china-clay.png';
import WollastoniteImage from '../../assets/products/wollastonite.png';
import BallClayImage from '../../assets/products/ball-clay.png';
import LevigatedClayImage from '../../assets/products/levigated-clay.png'
import SodiumFeldsparImage from '../../assets/products/sodium-feldspar.png';
import PotassiumFeldsparImage from '../../assets/products/potassium-feldspar.png';

import Cta from '../../components/cta';

const Paint = () => {
  return (
   <div className="industry-page">
      <Brand className="brand-section"/>
      
      <div className="industry-section">
        <h2 className='industry-head'> Ceramics </h2>
        <span className='industry-stroke'></span>
        <h3 className="industry-subhead">Strength, Whiteness, and Thermal Stability</h3>
        <p className="industry-para">RK Minerals delivers high-quality minerals that enhance strength, whiteness, and thermal stability in ceramics. Our minerals improve workability, reduce shrinkage, and provide consistency in tile, sanitary ware, and porcelain production.</p>
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
            </div>

            <div className="industry-products">
                {/* Potassium Feldspar */}
                <div className='industry-products-card'>
                    <h2 className="product-name-ind">Potassium Feldspar</h2>
                    <div className='product-requirements'>
                        <div className='requirements-top'>
                            <h2 className='product-requirement'>K₂O: 12–14%</h2>
                            <h2 className='product-requirement'>SiO₂: 65–68%</h2>
                        </div>
                        <div className='requirements-bottom'>
                            <h2 className='product-requirement'>Al₂O₃: 18–20%</h2>
                            <h2 className='product-requirement'>Fe₂O₃: &lt;0.5%</h2>
                        </div>
                    </div>
                    <img src={PotassiumFeldsparImage}/>
                </div>

                {/* Sodium Feldspar */}
                <div className='industry-products-card'>
                    <h2 className="product-name-ind">Sodium Feldspar</h2>
                    <div className='product-requirements'>
                        <div className='requirements-top'>
                            <h2 className='product-requirement'>Na₂O: 10–12%</h2>
                            <h2 className='product-requirement'>SiO₂: 65–67%</h2>
                        </div>
                        <div className='requirements-bottom'>
                            <h2 className='product-requirement'>Al₂O₃: 18–20%</h2>
                            <h2 className='product-requirement'>Fe₂O₃: &lt;0.5%</h2>
                        </div>
                    </div>
                    <img src={SodiumFeldsparImage}/>
                </div>
            </div>

            <div className="industry-products">
                {/* Ball Clay */}
                <div className='industry-products-card'>
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
                </div>

                {/* Levigated Clay */}
                <div className='industry-products-card'>
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
                <h2 className='excellence-head'>Sustainability</h2>
                <p className='excellence-para'>We follow sustainable mining practices to minimize environmental impact while supplying high-quality minerals for ceramics.</p>
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
