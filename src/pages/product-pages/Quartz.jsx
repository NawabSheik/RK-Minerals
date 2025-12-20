import React, {useState} from 'react'
import Brand from '../../components/Brand';
import QuartzImage from '../../assets/products/quartz-hero.png';
import QuartzTopImage from "../../assets/products/quartz td.png";
import Cta from '../../components/cta';
import Swiper from 'swiper';
import QuartzGrains from "../../assets/products/quartz grains td.png";
import Applications from '../../components/applications';
import Paper from "../../assets/industries/Paper2.png";
import Glass from "../../assets/industries/Glass2.png";
import Rubber from "../../assets/industries/Rubber2.png";
import Soap from "../../assets/industries/Soap2.png";
import Ceramics from "../../assets/industries/Ceramics2.png";
// import Swiper styles
import 'swiper/css';


 const productSlides = [
    { name: "Paper", img: Paper, link: "/industries/paper" },
    { name: "Glass", img: Glass, link: "/industries/glass" },
    { name: "Rubber", img: Rubber, link: "/industries/rubber" },
    { name: "Soap", img: Soap, link: "/industries/soaps" },
    { name: "Ceramics", img: Ceramics, link: "/industries/ceramics" },
  ];


function TalcChip() {
  return (
    <div className='product-content'>
      <div className="product-details">
        <h2 className="product-details-head">High Purity Quartz Powder</h2>
        <h2 className="product-details-head">Processed for Consistent Fineness</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          Quartz powder is finely ground crystalline silica, processed from
          natural high-grade quartz. It is known for its high silica content,
          chemical stability, and uniform particle size distribution. Our
          quartz powder is widely used in ceramics, soap & detergent and paint
           due to its purity, brightness, and
          reliable performance in industrial applications.
        </p>
      </div>

      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">Over 99% silica content for purity</h2>
            <h2 className="product-usps">Finely ground with consistent mesh sizes</h2>
            <h2 className="product-usps">High whiteness and brightness</h2>
            <h2 className="product-usps">Excellent chemical and thermal stability</h2>
            <h2 className="product-usps">Suitable for glass, ceramics, paints, and electronics</h2>
          </div>
        </div>
        <div className="product-usp-right">
          <img src={QuartzTopImage}/>
        </div>
      </div>

      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's Quartz Powder</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          RK Minerals produces premium-grade quartz powder with uniform
          fineness, high whiteness, and consistent silica content. Our advanced
          processing ensures minimal impurities, making it the trusted choice
          for industries that demand precision, strength, and reliability in
          their formulations and manufacturing processes.
        </p>
      </div>

        <Applications desc="Our quartz powder is trusted across a variety of technical and decorative ceramic industries, including:" slides={productSlides}/>

      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>
        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in 25kg, 50 kg HDPE bags & jumbo bags for domestic and export shipments
            </h2>
          </div>
          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Available in mesh size ranging from 100 to 300 mesh as per industry requirements
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
        <h2 className="product-details-head">High Purity Quartz Grains</h2>
        <h2 className="product-details-head">Processed for Industrial Applications</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          Quartz grains are naturally occurring crystalline silica processed
          into uniform grain sizes with high purity and excellent chemical
          stability. With their hardness, durability, and superior whiteness,
          quartz grains are widely used in ceramics and glass industries for reliable 
          and high-performance applications.
        </p>
      </div>

      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">High silica content ensuring purity</h2>
            <h2 className="product-usps">Uniform grain size with consistent quality</h2>
            <h2 className="product-usps">Excellent hardness and durability</h2>
            <h2 className="product-usps">High whiteness and clarity</h2>
            <h2 className="product-usps">Ideal for glass, foundry, ceramics, and filtration</h2>
          </div>
        </div>
        <div className="product-usp-right">
          <img src={QuartzGrains}/>
        </div>
      </div>

      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Industries Trust RK Minerals's Quartz Grains</h2>
        <span className='product-details-stroke'></span>
        <p className="product-para">
          RK Minerals delivers quartz grains with consistent grain size,
          superior whiteness, and high silica content. Our strict quality
          checks and advanced processing methods eliminate impurities, making
          our quartz grains the preferred choice for industries requiring
          strength, stability, and uniformity in their manufacturing processes.
        </p>
      </div>

        <Applications desc="Our quartz grains are trusted across a variety of technical and decorative ceramic industries, including:" slides={productSlides}/>

      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>
        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in loose and jumbo bags for bulk domestic and export shipments
            </h2>
          </div>
          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Reliable logistics ensuring timely delivery for domestic &
              international clients
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
            <img src={QuartzImage} alt="talc-image"/>
            <h1 className="product-page-name quartz">QUARTZ</h1>
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
                    Quartz Powder
                    </button>
                    </div>
                    <div className="choice-btn-half">
                    <button
                    onClick={() => setActive("powder")}
                    className={`choice-button ${
                        active === "powder" ? "active-choice" : "inactive-choice"
                    }`}
                    >
                    Quartz Grains
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
