import React, {useState} from 'react'
import Brand from '../../components/Brand';
import PotassiumImage from '../../assets/products/potassium-feldspar-hero.png';
import PotassiumGrainsTopImage from "../../assets/products/potassium feldspar grains td.png";
import PotassiumPowderTopImage from "../../assets/products/potassium-feldspar td.png";
import Cta from '../../components/cta';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';



function TalcChip() {
  return (
    <div className='product-content'>
      <div className="product-details">
        <h2 className="product-details-head">High Quality Potassium Feldspar</h2>
        <h2 className="product-details-head">Vital Flux for Ceramics & Glass</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          Potassium feldspar is a key industrial mineral used as a flux in the
          manufacturing of ceramics, glass, and porcelain. With high potassium
          oxide (K2O) content, it reduces melting temperatures, enhances
          vitrification, and improves the durability and gloss of finished
          products. Its low iron content and chemical stability make it an ideal
          choice for high-quality applications.
        </p>
      </div>

      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">High potassium (K2O) content for superior fluxing</h2>
            <h2 className="product-usps">Improves strength, gloss, and finish of products</h2>
            <h2 className="product-usps">Low iron (Fe2O3) ensures brightness and purity</h2>
            <h2 className="product-usps">Essential in ceramics, glass, and porcelain industries</h2>
            <h2 className="product-usps">Sourced from premium mineral reserves of Rajasthan</h2>
          </div>
        </div>
        <div className="product-usp-right">
          <img src={PotassiumPowderTopImage}/>
        </div>
      </div>

      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's Potassium Feldspar</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          RK Minerals delivers potassium feldspar with high whiteness, balanced
          alkali content, and uniform particle size. Processed under strict
          quality checks, our feldspar supports industries like ceramics,
          porcelain, glass, and cement by providing excellent fluxing
          action, high durability, and consistent performance in all industrial
          applications.
        </p>
      </div>

      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>
        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in bulk, 50 kg HDPE bags, and 1 MT jumbo bags to meet
              domestic and export demands
            </h2>
          </div>
          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Reliable logistics network for timely supply to ceramics and glass
              industries worldwide
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
        <h2 className="product-details-head">Premium Potassium Feldspar Grains</h2>
        <h2 className="product-details-head">Ideal Flux for Ceramics & Glass</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          Potassium feldspar grains are widely used in ceramics, cement, and
          glass industries due to their high potassium oxide (K2O) content,
          excellent fluxing properties, and consistent particle size. They help
          reduce the melting temperature, enhance vitrification, and improve the
          strength, gloss, and durability of finished products, making them a
          trusted raw material for industrial applications.
        </p>
      </div>

      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">High potassium (K2O) content for efficient fluxing</h2>
            <h2 className="product-usps">Uniform grain size for controlled processing</h2>
            <h2 className="product-usps">Low iron impurities ensure brightness and purity</h2>
            <h2 className="product-usps">Extensively used in glass & ceramics</h2>
            <h2 className="product-usps">ISO-certified and lab-tested for quality consistency</h2>
          </div>
        </div>
        <div className="product-usp-right">
          <img src={PotassiumGrainsTopImage}/>
        </div>
      </div>

      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's Potassium Grains</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          RK Minerals’s potassium feldspar grains are carefully processed to
          deliver uniform size, high whiteness, and chemical stability. With
          balanced alkali content and minimal impurities, our grains support
          ceramic, porcelain, glass, and sanitaryware industries, ensuring
          consistent fluxing action, durability, and improved performance of end
          products.
        </p>
      </div>

      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>
        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in loose form, 50 kg HDPE bags, and 1 MT jumbo bags to
              meet bulk and export demands
            </h2>
          </div>
          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Dedicated logistics network ensures reliable and timely shipments
              for domestic and international clients
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
            <img src={PotassiumImage} alt="talc-image"/>
            <h1 className="product-page-name potassium-feldspar">POTASSIUM <br/> FELDSPAR</h1>
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
                    Potassium Feldspar
                    </button>
                    </div>
                    <div className="choice-btn-half">
                    <button
                    onClick={() => setActive("powder")}
                    className={`choice-button ${
                        active === "powder" ? "active-choice" : "inactive-choice"
                    }`}
                    >
                    Potassium Grains
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
