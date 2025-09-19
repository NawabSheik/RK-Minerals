import React, {useState} from 'react'
import Brand from '../../components/Brand';
import SodiumFeldsparImage from '../../assets/products/sodium-feldspar-hero.png';
import TalcTopImage from "../../assets/products/talc-top-web.png";
import Cta from '../../components/cta';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';



function TalcChip() {
  return (
   <div className='product-content'>
      <div className="product-details">
        <h2 className="product-details-head">High Quality Sodium Feldspar</h2>
        <h2 className="product-details-head">Essential Mineral for Ceramic & Glass</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          Sodium feldspar is a key raw material used in ceramics, glassmaking,
          and other industries due to its high alkali content, consistent
          melting properties, and ability to act as a flux. It enhances the
          strength, durability, and finish of end products while improving
          vitrification, making it indispensable in tiles, sanitaryware, glass,
          and enamel manufacturing.
        </p>
      </div>

      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">High alkali (Na2O) content for superior fluxing</h2>
            <h2 className="product-usps">Enhances glaze, strength, and durability</h2>
            <h2 className="product-usps">Low iron (Fe2O3) impurities for brighter products</h2>
            <h2 className="product-usps">Ideal for glass, ceramics, and enamel industries</h2>
            <h2 className="product-usps">Sourced from high-quality deposits of Rajasthan</h2>
          </div>
        </div>
        <div className="product-usp-right">
          <img src={TalcTopImage}/>
        </div>
      </div>

      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's Sodium Feldspar</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          RK Minerals’s sodium feldspar stands out for its purity, uniform
          particle size, and consistent chemical composition. With high alkali
          content and minimal impurities, it supports industries like ceramics,
          glass, sanitaryware, enamel, and tiles, ensuring high-quality,
          long-lasting finished products with enhanced brightness and strength.
        </p>
      </div>

      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>
        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in bulk, 50 kg bags, and 1 MT jumbo bags for both
              domestic and export requirements
            </h2>
          </div>
          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Efficient logistics and supply chain support for timely delivery
              to ceramics and glass industries worldwide
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
        <h2 className="product-details-head">Premium Sodium Feldspar Grains</h2>
        <h2 className="product-details-head">Trusted for Glass & Ceramic Applications</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          Sodium feldspar grains are widely used in glass and ceramic industries
          for their high alkali content, excellent fluxing ability, and uniform
          grain size. These grains help in reducing the melting temperature,
          improving strength, and enhancing the finish of end products while
          ensuring consistency and durability across industrial applications.
        </p>
      </div>

      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">High alkali (Na2O) content for efficient melting</h2>
            <h2 className="product-usps">Uniform grain size for stable processing</h2>
            <h2 className="product-usps">Low iron content for brighter and cleaner output</h2>
            <h2 className="product-usps">Widely used in glass, ceramics, and enamel industries</h2>
            <h2 className="product-usps">ISO-certified and lab-tested for quality assurance</h2>
          </div>
        </div>
        <div className="product-usp-right">
          <img src={TalcTopImage}/>
        </div>
      </div>

      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's Sodium Grains</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          RK Minerals supplies sodium feldspar grains with consistent chemical
          composition and high purity. Our grains are processed to maintain
          controlled particle size, high whiteness, and minimal impurities,
          making them the preferred choice for glass, ceramic, and enamel
          manufacturers requiring reliable fluxing and strength-enhancing
          materials.
        </p>
      </div>

      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>
        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in bulk supply, 50 kg HDPE bags, and 1 MT jumbo bags for
              both domestic and international markets
            </h2>
          </div>
          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Dedicated logistics support ensures reliable and timely shipments
              for bulk orders and exports
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
            <img src={SodiumFeldsparImage} alt="talc-image"/>
            <h1 className="product-page-name sodium-feldspar">SODIUM <br/> FELDSPAR</h1>
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
                    Sodium Feldspar
                    </button>
                    </div>
                    <div className="choice-btn-half">
                    <button
                    onClick={() => setActive("powder")}
                    className={`choice-button ${
                        active === "powder" ? "active-choice" : "inactive-choice"
                    }`}
                    >
                    Sodium Grains
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
