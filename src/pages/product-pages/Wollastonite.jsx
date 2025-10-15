import React, {useState} from 'react'
import Brand from '../../components/Brand';
import WollastoniteImage from '../../assets/products/wollastonite-hero.png';
import WollastoniteTopImage from "../../assets/products/wollastonite td.png";
import Cta from '../../components/cta';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';




function TalcPowder() {
  return (
   <div className='product-content'>
      <div className="product-details">
        <h2 className="product-details-head">High Quality Wollastonite</h2>
        <h2 className="product-details-head">Processed for Industrial Strength</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          Wollastonite is a naturally occurring calcium silicate mineral valued
          for its unique combination of brightness, low moisture, high
          whiteness. It enhances strength,
          durability, and thermal stability in end products. Widely used in
          ceramics, plastics, paints, rubber, and friction products, our
          wollastonite ensures consistent performance and superior reinforcing
          properties across multiple industries.
        </p>
      </div>

      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">Consistent performance and Superior Reinforcing </h2>
            <h2 className="product-usps">High whiteness and brightness</h2>
            <h2 className="product-usps">Excellent thermal and dimensional stability</h2>
            <h2 className="product-usps">Low moisture and consistent quality</h2>
            <h2 className="product-usps">Ideal for ceramics, plastics, paints & rubber</h2>
          </div>
        </div>
        <div className="product-usp-right">
          <img src={WollastoniteTopImage}/>
        </div>
      </div>

      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's Wollastonite</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          RK Minerals provides high-purity wollastonite processed to maintain
          its acicular structure and brightness. Our strict quality control
          ensures low impurities and consistent performance, making it the
          preferred choice for industries that require reinforcement, stability,
          and superior finishing in their applications.
        </p>
      </div>

      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>
        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in 50 kg HDPE bags & jumbo bags, for domestic and export shipments.
            </h2>
          </div>
          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Strong logistics network ensuring reliable domestic & export delivery
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
            <img src={WollastoniteImage} alt="talc-image"/>
            <h1 className="product-page-name wollastonite">WOLLASTONITE</h1>
         </div>
            <TalcPowder/>
  

            

            <Cta/>
            
      </div>
    

  )
}

export default Talc
