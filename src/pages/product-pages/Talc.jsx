import React, {useState} from 'react'
import Brand from '../../components/Brand';
import TalcImage from '../../assets/products/talc-hero.png';
import TalcTopImage from "../../assets/products/talc td.png";
import TalcChipsTopImage from "../../assets/products/talc-chips td.png";
import Cta from '../../components/cta';
import Swiper from 'swiper';
// import Swiper styles
import 'swiper/css';
import Applications from '../../components/applications';
import PaperImage from "../../assets/industries/Paper2.png";
import GlassImage from "../../assets/industries/Glass.png";
import Rubber from "../../assets/industries/Rubber.png";
import Soap from "../../assets/industries/Soap.png";
import Ceramics from "../../assets/industries/Ceramics.png";

 const productSlides = [
    { name: "Paper", img: PaperImage, link: "/industries/paper" },
    { name: "Glass", img: GlassImage, link: "/industries/glass" },
    { name: "Rubber", img: Rubber, link: "/industries/rubber" },
    { name: "Soap", img: Soap, link: "/industries/soaps" },
    { name: "Ceramics", img: Ceramics, link: "/industries/ceramics" },
  ];

function TalcChip() {
  return (
    <div className='product-content'>
      <div className="product-details">
        <h2 className="product-details-head">Premium Talc Chips</h2>
        <h2 className="product-details-head">Engineered for Industrial Excellence</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          Talc chips are valued for their stability, purity, and uniformity,
          making them ideal for high-temperature processes and specialized
          industrial applications. With their natural softness, high fusion
          point, low shrinkage, and excellent resistance to heat and chemicals,
          talc chips ensure consistent performance across ceramics, refractories,
          paints, plastics, and allied industries.
        </p>
      </div>

      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">High whiteness and brightness with minimal impurities</h2>
            <h2 className="product-usps">Excellent thermal and chemical resistance</h2>
            <h2 className="product-usps">Uniform chip size for controlled grinding</h2>
            <h2 className="product-usps">Sourced from premium talc reserves of Rajasthan</h2>
            <h2 className="product-usps">Consistent lab-tested quality with ISO certification</h2>
          </div>
        </div>
        <div className="product-usp-right">
          <img src={TalcChipsTopImage}/>
        </div>
      </div>

      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's Talc Chips</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          RK Minerals’s talc chips are carefully processed to meet industrial
          standards, ensuring high purity, controlled particle size, and
          excellent whiteness. Trusted by industries like ceramics, refractories,
          paints, plastics, and polymers, our talc chips serve as a reliable raw
          material for precision applications where performance and consistency
          matter the most.
        </p>
      </div>

        <Applications desc="Our kaolin grades are trusted across a variety of technical and decorative ceramic industries, including:" slides={productSlides}/>

      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>
        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in loose form and jumbo bags for
              domestic and international markets
            </h2>
          </div>
          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Reliable supply chain and dedicated logistics support ensuring
              timely delivery for bulk and export requirements
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
                        making it ideal for industries like ceramics, paints, paper, soaps and rubber industries</p>
                </div>
    
                  <Applications desc="Our kaolin grades are trusted across a variety of technical and decorative ceramic industries, including:" slides={productSlides}/>
                
                    
                <div className="product-packaging">
                    <h2 className="product-packaging-head">Packaging & Supply</h2>
                    <div className='product-packaging-offers-section'>
                        <div className="product-packaging-offer-1">
                            <h2 className="packaging-offer-description">
                                Available in bulk 25kg, 50 kg HDPE bags, and Jumbo bags for seamless domestic 
                                and export shipments
                            </h2>
                            
                        </div>
                        <div className="product-packaging-offer-2">
                            <h2 className="packaging-offer-description">
                               Available in mesh size ranging from 200 to 1200 mesh as per industry requirements
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
