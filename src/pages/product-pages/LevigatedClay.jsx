import React, {useState} from 'react'
import Brand from '../../components/Brand';
import LevigatedImage from '../../assets/products/levigated-clay-hero.png';
import LevigatedTopImage from "../../assets/products/levigated-clay td.png";
import Applications from '../../components/applications';
import Paper from "../../assets/industries/Paper2.png";
import Glass from "../../assets/industries/Glass2.png";
import Rubber from "../../assets/industries/Rubber2.png";
import Soap from "../../assets/industries/Soap2.png";
import Ceramics from "../../assets/industries/Ceramics2.png";
import Cta from '../../components/cta';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';



 const productSlides = [
    { name: "Paper", img: Paper, link: "/industries/paper" },
    { name: "Glass", img: Glass, link: "/industries/glass" },
    { name: "Rubber", img: Rubber, link: "/industries/rubber" },
    { name: "Soap", img: Soap, link: "/industries/soaps" },
    { name: "Ceramics", img: Ceramics, link: "/industries/ceramics" },
  ];


function TalcPowder() {
  return (
   <div className='product-content'>
      <div className="product-details">
        <h2 className="product-details-head">Refined Levigated Clay</h2>
        <h2 className="product-details-head">Processed for Premium Whiteness</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          Levigated clay is a specially processed form of china clay, refined
          through levigation to remove impurities and enhance brightness. It is
          highly suitable for industries demanding premium whiteness and
          smoothness, such as ceramics, paper, paints, ensuring
          consistent quality and superior performance.
        </p>
      </div>

      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">Levigated for high whiteness & purity</h2>
            <h2 className="product-usps">Superior brightness and fine particle size</h2>
            <h2 className="product-usps">Low impurities for premium applications</h2>
            <h2 className="product-usps">Ideal for ceramics, paints, paper, and cosmetics</h2>
            <h2 className="product-usps">ISO-certified and lab-tested for reliability</h2>
          </div>
        </div>
        <div className="product-usp-right">
          <img src={LevigatedTopImage}/>
        </div>
      </div>

      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's Levigated Clay</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          RK Minerals produces levigated clay with unmatched whiteness,
          brightness, and smoothness. By removing impurities through advanced
          processing, our clay meets the demands of industries that require
          superior consistency in ceramics, paints, and paper
          applications.
        </p>
      </div>

      

      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>
        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in loose, 50kg hope bags and jumbo bags
            </h2>
          </div>
          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Reliable supply chain with timely delivery for domestic & export
              clients
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
            <img src={LevigatedImage} alt="talc-image"/>
            <h1 className="product-page-name levigated-clay">LEVIGATED <br/> CLAY</h1>
         </div>
            <TalcPowder/>
  

            

            <Cta/>
            
      </div>
    

  )
}

export default Talc
