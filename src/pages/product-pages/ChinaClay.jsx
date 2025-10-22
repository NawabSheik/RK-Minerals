import React, {useState} from 'react'
import Brand from '../../components/Brand';
import ChinaClayImage from '../../assets/products/china-clay-hero.png';
import ChinaTopImage from "../../assets/products/china-clay td.png";
import Cta from '../../components/cta';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import Applications from '../../components/applications';
import Paper from "../../assets/industries/Paper2.png";
import Glass from "../../assets/industries/Glass2.png";
import Rubber from "../../assets/industries/Rubber2.png";
import Soap from "../../assets/industries/Soap2.png";
import Ceramics from "../../assets/industries/Ceramics2.png";



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
        <h2 className="product-details-head">Premium China Clay</h2>
        <h2 className="product-details-head">High Whiteness minerals</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          China clay is valued for its whiteness,
          brightness, and fine particle size. It is widely used in ceramics,
          paper, paints, soaps and rubber industries. Its chemical inertness, low
          shrinkage, and high opacity make it a versatile mineral for both
          functional and aesthetic - industrial applications.
        </p>
      </div>

      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">High whiteness and brightness</h2>
            <h2 className="product-usps">Excellent opacity and coverage</h2>
            <h2 className="product-usps">Chemically inert and low shrinkage</h2>
            <h2 className="product-usps">Extensively used in ceramics, paper, paints</h2>
            <h2 className="product-usps">Sourced from premium clay reserves of Rajasthan</h2>
          </div>
        </div>
        <div className="product-usp-right">
          <img src={ChinaTopImage}/>
        </div>
      </div>

      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's China Clay</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          RK Minerals’s china clay offers high whiteness, fine particle size,
          and low impurity levels. Our China Clay is processed under strict quality
          control to serve industries such as ceramics, paper, paints, plastics,
          and rubber, ensuring superior brightness and durability in finished
          goods.
        </p>
      </div>
      <Applications desc="Our kaolin grades are trusted across a variety of technical and decorative ceramic industries, including:" slides={productSlides}/>
      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>
        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Supplied in 25kg, 50 kg HDPE bags for domestic and export shipments.
            </h2>
          </div>
          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Strong logistics network for reliable domestic and global supply
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
            <img src={ChinaClayImage} alt="talc-image"/>
            <h1 className="product-page-name china-clay">CHINA <br/> CLAY</h1>
         </div>
            <TalcPowder/>
  

            

            <Cta/>
            
      </div>
    

  )
}

export default Talc
