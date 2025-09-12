import React, {useState} from 'react'
import Brand from '../../components/Brand';
import TalcImage from '../../assets/products/talc-hero.png';
import TalcTopImage from "../../assets/products/talc-top-web.png";
import Cta from '../../components/cta';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';



function TalcChip() {
  return (
    <div className='product-content'>
            <div className="product-details">
                <h2 className="product-details-head">High Quality Talc</h2>
                <h2 className="product-details-head">Tailored for Ceramic Precision</h2>
                <span className='product-details-stroke'></span>
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
                        <h2 className="product-usps">Calcium (CaO) free and iron (Fe2O3) free material.</h2>
                        <h2 className="product-usps">Can be easily grinded in ball mill </h2>
                        <h2 className="product-usps">Multiple mesh sizes for diverse industries</h2>
                        <h2 className="product-usps">Rajasthan being talc rich state of India</h2>
                         <h2 className="product-usps">ISO-certified quality with reliable lab-tested.</h2>
                    </div>
                </div>
                <div className="product-usp-right">
                  
                        <img src={TalcTopImage}/>
                 
                </div>
            </div>

            <div className="why-industry-trust">
                <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's Clay</h2>
                
                <span className='product-details-stroke'></span>
                <p className="product-para">At RK Minerals, we take pride in offering clay of unmatched purity and consistency. Sourced from the mineral-rich lands of Rajasthan and processed with rigorous quality checks, our clay delivers high whiteness, brightness, and low impurities, 
                    making it ideal for industries like ceramics, paints, paper, plastics, and cosmetics.</p>
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
            </div>
  );
}

function TalcPowder() {
  return (
    <div className='product-content'>
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
            </div>
  );
}


const Talc = () => {
     const [active, setActive] = useState("chip"); // default tab

  return (
    <div className="product-page">
        <Brand className="brand-section"/>
        <div className="product-explained" >
            <img src={TalcImage} alt="talc-image"/>
            <h1 className="product-page-name">TALC</h1>
            </div>
                <div className="product-choice">
                <div className="product-choice-btns" >

                    <div className="choice-btn-half">
                    <button
                    onClick={() => setActive("chip")}
                    className={`choice-button ${
                        active === "chip" ? "active-choice" : "inactive-choice"
                    }`}
                    >
                    Talc Chip
                    </button>
                    </div>
                    <div className="choice-btn-half">
                    <button
                    onClick={() => setActive("powder")}
                    className={`choice-button ${
                        active === "powder" ? "active-choice" : "inactive-choice"
                    }`}
                    >
                    Talc Powder
                    </button>
                    </div>
                </div>
                    {/* Conditional Rendering */}
                    {active === "chip" && <TalcChip />}
                    {active === "powder" && <TalcPowder />}
             </div>
  

            

            <Cta/>
            
      </div>
    

  )
}

export default Talc
