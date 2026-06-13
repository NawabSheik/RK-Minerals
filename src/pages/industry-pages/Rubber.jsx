import React from 'react';
import Brand from '../../components/Brand';

import TalcImage from '../../assets/products/talc powder.png';
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
                <h2 className="product-name-ind">Calcined Kaolin</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>Al₂O₃: 35–38%</h2>
                        <h2 className='product-requirement'>SiO₂: 45–48%</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Fe₂O₃: &lt;1%</h2>
                        <h2 className='product-requirement'>TiO₂ : Nil</h2>
                    </div>
                </div>
                <img src={CalcinedClayImage}/>
            </div>
            </div>
        </div>
        <p className='note-point'>* Available in powder or lump form, these minerals provide reinforcement, reduce shrinkage, and improve processing in rubber compounding.</p>
      </div>

      <div className="industry-excellence">
    <h2 className="industry-head3">How We Deliver Excellence</h2>

    <div className="excellence-cards">
        <div className="excellence-card">
            <h2 className="excellence-head">Quality Assurance</h2>
            <p className="excellence-para">
                Every mineral batch is tested for purity, particle size,
                reinforcement properties and consistency to ensure reliable
                rubber manufacturing performance.
            </p>
        </div>

        <div className="excellence-card">
            <h2 className="excellence-head">Application Expertise</h2>
            <p className="excellence-para">
                Our minerals improve elasticity, strength, thermal stability
                and processability across a wide range of rubber products.
            </p>
        </div>
    </div>

    <div className="excellence-cards">
        <div className="excellence-card">
            <h2 className="excellence-head">Customer-Centric Solutions</h2>
            <p className="excellence-para">
                We provide customized mineral grades tailored to the specific
                reinforcement and durability requirements of rubber manufacturers.
            </p>
        </div>

        <div className="excellence-card">
            <h2 className="excellence-head">Reliable Supply Chain</h2>
            <p className="excellence-para">
                With advanced processing and dependable sourcing, we ensure
                consistent quality and uninterrupted supply for industrial
                rubber applications.
            </p>
        </div>
    </div>
</div>

      <Cta/>
</div>

  )
}

export default Paint
