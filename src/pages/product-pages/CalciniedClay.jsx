import React, {useState} from 'react'
import Brand from '../../components/Brand';
import CalcinedImage from '../../assets/products/calcined-clay-hero.png';
import CalcinedTopImage from "../../assets/products/calcined-clay td.png";
import Cta from '../../components/cta';
// import Swiper styles
import 'swiper/css';





function TalcPowder() {
  return (
   <div className='product-content'>
      <div className="product-details">
        <h2 className="product-details-head">High Quality Calcined Clay</h2>
        <h2 className="product-details-head">Processed for Enhanced Performance</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          Calcined clay is produced by carefully heating refined kaolin at high
          temperatures to improve whiteness, brightness, and chemical stability.
          This process enhances its opacity, durability, and strength, making it
          an ideal material for industries such as paper, paints and rubber. Our calcined clay ensures consistent quality,
          fine particle size, and superior performance in specialized
          applications.
        </p>
      </div>

      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">Enhanced brightness and opacity</h2>
            <h2 className="product-usps">Excellent thermal and chemical stability</h2>
            <h2 className="product-usps">Improves durability and strength in end products</h2>
            <h2 className="product-usps">Uniform particle size for smooth finish</h2>
            <h2 className="product-usps">Ideal for paper, paints, plastics, ceramics & rubber</h2>
          </div>
        </div>
        <div className="product-usp-right">
          <img src={CalcinedTopImage}/>
        </div>
      </div>

      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's Calcined Clay</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          RK Minerals produces calcined clay with superior whiteness, brightness,
          and stability through advanced calcination processes. Our strict
          quality control ensures low impurities, high opacity, and consistent
          performance, making our calcined clay a trusted choice for premium
          industrial applications across global markets.
        </p>
      </div>

      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>
        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in 50 kg bags, jumbo bags, for domestic and export shipments
            </h2>
          </div>
          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Efficient logistics network ensuring timely domestic & export delivery
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
            <img src={CalcinedImage} alt="talc-image"/>
            <h1 className="product-page-name calcinied-clay">CALCINED <br/> CLAY</h1>
         </div>
            <TalcPowder/>
  

            

            <Cta/>
            
      </div>
    

  )
}

export default Talc
