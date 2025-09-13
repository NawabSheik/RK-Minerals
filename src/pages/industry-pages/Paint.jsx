import React from 'react';
import Brand from '../../components/Brand';
import ClayImage from '../../assets/products/talc-web.png';
import Cta from '../../components/cta';

const Paint = () => {
  return (
    <div className="industry-page">
      <Brand className="brand-section"/>
      <div className="industry-section">
        <h2 className='industry-head'> Paint & Coatings </h2>
        <span className='industry-stroke'></span>
        <h3 className="industry-subhead">Shaping the Colors of Innovation</h3>
        <p className="industry-para">RK Minerals stands as a trusted name in the mineral industry, delivering high-quality raw materials that enhance the performance, finish, and durability of paints. With decades of expertise, advanced processing technology, and a strong commitment to quality, RK Minerals has become a leading partner for paint manufacturers across India and overseas.</p>
        <p className="industry-para">A good mineral for Paints should have</p>
        <div className='industry-requirements'>
            <div className='requirements-top'>
                <h2 className='requirement'>High<br/> Purity</h2>
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
            <div className='industry-products-card'>
                <h2 className="product-name-ind">Clay</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>High Purity</h2>
                        <h2 className='product-requirement'>Controlled Particle Size</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Brightness & Whiteness</h2>
                        <h2 className='product-requirement'>Consistency in Quality</h2>
                    </div>
                
                </div>
                <img src={ClayImage}/>
            </div>
            <div className='industry-products-card'>
                <h2 className="product-name-ind">Quartz</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>High Purity</h2>
                        <h2 className='product-requirement'>Controlled Particle Size</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Brightness & Whiteness</h2>
                        <h2 className='product-requirement'>Consistency in Quality</h2>
                    </div> 
                </div>
                <img src={ClayImage}/>
            </div>
            </div>
            <div className="industry-products">
            <div className='industry-products-card'>
                <h2 className="product-name-ind">Wallastonite</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>High Purity</h2>
                        <h2 className='product-requirement'>Controlled Particle Size</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Brightness & Whiteness</h2>
                        <h2 className='product-requirement'>Consistency in Quality</h2>
                    </div>
                
                </div>
                <img src={ClayImage}/>
            </div>
            <div className='industry-products-card'>
                <h2 className="product-name-ind">Talc</h2>
                <div className='product-requirements'>
                    <div className='requirements-top'>
                        <h2 className='product-requirement'>High Purity</h2>
                        <h2 className='product-requirement'>Controlled Particle Size</h2>
                    </div>
                    <div className='requirements-bottom'>
                        <h2 className='product-requirement'>Brightness & Whiteness</h2>
                        <h2 className='product-requirement'>Consistency in Quality</h2>
                    </div> 
                </div>
                <img src={ClayImage}/>
            </div>
            </div>
        </div>
        <p className='note-point'>* Available in powder, lump, or chip form, these materials can be customized to align with your specific formulation and production requirements.</p>


      </div>


      <div className="industry-excellence">
        <h2 className='industry-head3'> How We Deliver Excellence </h2>
        <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Quality Assurance</h2>
                <p className='excellence-para'>Our state-of-the-art quality control labs ensure that every batch of minerals meets stringent industry standards, providing consistent performance.</p>
            </div>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Sustainability</h2>
                <p className='excellence-para'>We are committed to sustainable mining practices, minimizing environmental impact while ensuring the longevity of our mineral resources.</p>
            </div>
            </div>
         <div className='excellence-cards'>
            <div className='excellence-card'>
                <h2 className='excellence-head'>Customer-Centric Approach</h2>
                <p className='excellence-para'>We work closely with our clients to understand their specific needs, offering tailored solutions and technical support to optimize their paint products.</p>
                </div>
                <div className='excellence-card'>
                <h2 className='excellence-head'>Customer-Centric Approach</h2>
                <p className='excellence-para'>We work closely with our clients to understand their specific needs, offering tailored solutions and technical support to optimize their paint products.</p>
                </div>
        </div>
        </div>

      <Cta/>
    </div>
  )
}

export default Paint
