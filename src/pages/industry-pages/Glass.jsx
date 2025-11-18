import React from 'react';
import Brand from '../../components/Brand';
import ClayImage from '../../assets/products/talc-web.png';
import QuartzImage from '../../assets/products/quartz.png';
import SodiumFeldsparImage from '../../assets/products/sodium-feldspar.png';
import PotassiumFeldsparImage from '../../assets/products/potassium-feldspar.png';
import Cta from '../../components/cta';

const Paint = () => {
  return (
    <div className="industry-page">
      <Brand className="brand-section"/>
      <div className="industry-section">
        <h2 className='industry-head'> Glass </h2>
        <span className='industry-stroke'></span>
        <h3 className="industry-subhead">Clarity and Strength Redefined</h3>
        <p className="industry-para">RK Minerals supplies premium-quality raw materials that define clarity, durability, and brilliance in glass production. Our minerals ensure excellent transparency, thermal stability, and consistency, making us a trusted partner for glass manufacturers worldwide.</p>
        <p className="industry-para">A good mineral for Glass should have</p>
        <div className='industry-requirements'>
            <div className='requirements-top'>
                <h2 className='requirement'>High Purity</h2>
                <h2 className='requirement'>Thermal Stability</h2>
            </div>
            <div className='requirements-bottom'>
                <h2 className='requirement'>Consistency in Quality</h2>
                <h2 className='requirement'>Transparency & Strength</h2>
            </div>
        </div>
      </div>

      <div className="industry-section2">
        <h2 className='industry-head2'> RK Mineral Products for Glass </h2>
        <div className="industry-products-section">
            <div className="industry-products">

            {/* Potassium Feldspar */}
            <div className='industry-products-card'>
                <h2 className="product-name-ind">Potassium Feldspar</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>SiO₂: 65–68%</h2>
                        <h2 className='product-requirement'>Al₂O₃: 18–20%</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>K₂O: 10–12%</h2>
                        <h2 className='product-requirement'>Fe₂O₃: &lt;0.3%</h2>
                    </div>
                </div>
                <img src={PotassiumFeldsparImage}/>
            </div>

            {/* Sodium Feldspar */}
            <div className='industry-products-card'>
                <h2 className="product-name-ind">Sodium Feldspar</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>SiO₂: 68–70%</h2>
                        <h2 className='product-requirement'>Al₂O₃: 18–20%</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Na₂O: 6–7%</h2>
                        <h2 className='product-requirement'>Fe₂O₃: &lt;0.2%</h2>
                    </div> 
                </div>
                <img src={SodiumFeldsparImage}/>
            </div>
            </div>

            <div className="industry-products">

            {/* Quartz */}
            <div className='industry-products-card'>
                <h2 className="product-name-ind">Quartz</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>SiO₂: 99%+</h2>
                        <h2 className='product-requirement'>Al₂O₃: 0.2–0.5%</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Fe₂O₃: &lt;0.05%</h2>
                        <h2 className='product-requirement'>TiO₂ : Nil</h2>
                    </div>
                </div>
                <img src={QuartzImage}/>
            </div>
            </div>
        </div>
        <p className='note-point'>* Available in powder, lump, or chip form, these minerals are optimized for the unique requirements of glass manufacturing.</p>
      </div>

      <div className="industry-excellence">
        <h2 className='industry-head3'> How We Deliver Excellence </h2>
        <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Quality Assurance</h2>
                <p className='excellence-para'>Every batch is tested in advanced labs to ensure purity, consistency, and suitability for glass production.</p>
            </div>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Trusted Partnerships</h2>
                <p className='excellence-para'>Excellence doesn’t end with our products — it extends to our relationships. We work closely with our partners, understanding their needs and delivering on time, every time.</p>
            </div>
            </div>
         <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Precision in Process</h2>
                <p className='excellence-para'>From sourcing to delivery, every detail is executed with accuracy to ensure consistent and dependable outcomes.</p>
                </div>
                <div className='excellence-card'>
                <h2 className='excellence-head'>Innovation Support</h2>
                <p className='excellence-para'>Our minerals empower industries to achieve innovation in glass design, clarity, and strength.</p>
                </div>
        </div>
        </div>

      <Cta/>
</div>


  )
}

export default Paint
