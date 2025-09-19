import React, {useState} from 'react'
import Brand from '../../components/Brand';
import BallClayImage from '../../assets/products/ball-clay-hero.png';
import TalcTopImage from "../../assets/products/talc-top-web.png";
import Cta from '../../components/cta';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';


function TalcPowder() {
  return (
   <div className='product-content'>
      <div className="product-details">
        <h2 className="product-details-head">High Quality Ball Clay</h2>
        <h2 className="product-details-head">Essential for Ceramic Strength & Plasticity</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          Ball clay is prized for its plasticity, strength, and binding
          properties, making it a fundamental ingredient in ceramic and
          sanitaryware production. Its fine particle size and high strength help
          improve shaping, firing strength, and durability of finished products,
          while also enhancing surface smoothness and glaze adherence.
        </p>
      </div>

      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">Excellent plasticity and workability</h2>
            <h2 className="product-usps">Improves shaping and firing strength</h2>
            <h2 className="product-usps">Ideal for sanitaryware, tiles, and ceramics</h2>
            <h2 className="product-usps">Low impurity content for superior results</h2>
            <h2 className="product-usps">Sourced from trusted clay reserves in India</h2>
          </div>
        </div>
        <div className="product-usp-right">
          <img src={TalcTopImage}/>
        </div>
      </div>

      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's Ball Clay</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          RK Minerals ensures ball clay with high consistency, controlled
          plasticity, and excellent bonding strength. With low levels of iron
          and titanium impurities, our ball clay supports the ceramic and
          sanitaryware industry by providing improved strength and premium
          finishing quality.
        </p>
      </div>

      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>
        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in bulk, 50 kg bags, and 1 MT jumbo bags for domestic
              and export customers
            </h2>
          </div>
          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Dedicated logistics ensures timely delivery across all regions
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
            <img src={BallClayImage} alt="talc-image"/>
            <h1 className="ball-clay product-page-name">BALL <br/> CLAY</h1>
         </div>
            <TalcPowder/>
  

            

            <Cta/>
            
      </div>
    

  )
}

export default Talc
