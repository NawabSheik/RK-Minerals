import React from 'react'
import Brand from '../../components/Brand';
import TalcImage from '../../assets/products/talc-web.png';
import TalcTopImage from "../../assets/products/talc-top-web.png";
import Cta from '../../components/cta';


const Talc = () => {
  return (
    <div className="product-page">
        <Brand className="brand-section"/>
        <div className="product-explained" >
            <img src={TalcImage} alt="talc-image"/>
            <h1 className="product-page-name">TALC</h1>

            <div className="product-details">
                <h2 className="product-details-head">High Quality Talc</h2>
                <h2 className="product-details-head">Tailored for Ceramic Precision</h2>

                <p className="product-para">The properties of talc that enable its use in a wide variety of applications are
                    its extreme softness & smoothness, good lustre & sheen, high slip &
                    lubricating property, low moisture content, ability to absorb oil & grease,
                    chemical inertness, high fusion point, low electrical & heat conductivity, high
                    dielectric strength, good retention for filler purposes, whiteness, good hiding
                    power as pigment and high specific heat.</p>
            </div>

            <div className="product-usp-section">
                <div className='product-usp-left'>
                    <div className="product-usp">
                        <h2 className="product-usps">Calcium (Cao) free and iron (Fe203) free material.</h2>
                        <h2 className="product-usps">Can be easily grinded in ball mill </h2>
                        <h2 className="product-usps">Rajasthan being talc rich state of India</h2>
                    </div>
                </div>
                <div className="product-usp-right">
                  
                        <img src={TalcTopImage}/>
                 
                </div>
            </div>

            <div className="product-packaging">
                <h2 className="product-packaging-head">Packaging & Supply</h2>
                <div className='product-packaging-offers-section'>
                    <div className="product-packaging-offer-1">
                        <h2 className="packaging-offer-description">
                            Available in bulk, 50 kg bags, and 1 MT jumbo bags for seamless domestic 
                            and export shipments
                        </h2>
                        
                    </div>
                    <div className="product-packaging-offer-2">
                        <h2 className="packaging-offer-description">
                            Dedicated logistics support 
                            for seamless domestic 
                            and export shipments
                        </h2>
                        
                    </div>
                </div>
            </div>

            <Cta/>
            
      </div>
    </div>

  )
}

export default Talc
