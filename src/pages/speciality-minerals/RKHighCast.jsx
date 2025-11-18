import React, { useState } from 'react'
import Brand from '../../components/Brand';
import HighCastHero from '../../assets/products/high-cast-hero.png'; 
import HighCastTop from "../../assets/products/high-cast td.png"; 
import Cta from '../../components/cta';
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

function HighCastKaolin() {
  return (
    <div className='product-content'>
      
      {/* PRODUCT DETAILS */}
      <div className="product-details">
        <h2 className="product-details-head">RK High Cast – Premium Kaolin Clay</h2>
        <h2 className="product-details-head">Engineered for High Casting Rate & Superior Performance</h2>
        <span className='product-details-stroke'></span>

        <p className="product-para">
          RK High Cast is a customised grade of kaolin clay specially developed for the sanitaryware 
          industry. Known for its excellent casting rate, balanced fluidity, and consistent white raw 
          colour, this grade ensures smooth slip flow, enhanced body strength, and optimal performance 
          across all ceramic casting operations. Its controlled shrinkage and superior mould behaviour 
          make it ideal for premium sanitaryware applications.
        </p>
      </div>

      {/* USP SECTION */}
      <div className="product-usp-section">
        <div className='product-usp-left'>
          <div className="product-usp">
            <h2 className="product-usps">High casting rate for faster mould production</h2>
            <h2 className="product-usps">Consistent white raw colour with low impurities</h2>
            <h2 className="product-usps">Optimised fluidity for smooth slip flow</h2>
            <h2 className="product-usps">Low drying and firing shrinkage for dimensional accuracy</h2>
            <h2 className="product-usps">Perfect for sanitaryware, tableware & ceramic slip applications</h2>
          </div>
        </div>

        <div className="product-usp-right">
          <img src={HighCastTop} alt="RK High Cast" />
        </div>
      </div>

      {/* WHY INDUSTRIES TRUST */}
      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Leading Sanitaryware Manufacturers Prefer RK High Cast</h2>
        <span className='product-details-stroke'></span>

        <p className="product-para">
          RK High Cast delivers consistent viscosity, controlled moisture, and superior casting behaviour. 
          Its optimal pH value, low TDS, and balanced drying time ensure defect-free casting, reduced warpage, 
          and improved whiteness after firing. Its refined particle size distribution enhances body strength, 
          improves slurry stability, and ensures high-quality output for sanitaryware production.
        </p>
      </div>

      {/* APPLICATIONS */}
      <Applications 
        desc="RK High Cast kaolin is trusted across sanitaryware, tableware, ceramic slip, and technical ceramic industries."
        slides={productSlides}
      />

      {/* CHEMICAL ANALYSIS 
      <div className="product-packaging">
        <h2 className="product-packaging-head">Chemical Analysis</h2>

        <div className='product-packaging-offers-section chemical-table'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">Raw Colour: White</h2>
            <h2 className="packaging-offer-description">Moisture: 6.45%</h2>
            <h2 className="packaging-offer-description">Slip Temperature: 34</h2>
            <h2 className="packaging-offer-description">Density: 1.540 gm/cc</h2>
            <h2 className="packaging-offer-description">Fluidity: 17 sec</h2>
            <h2 className="packaging-offer-description">Fluidity (After 30 min): 19 sec</h2>
            <h2 className="packaging-offer-description">Casting Rate (45 min): 21.9 mm</h2>
            <h2 className="packaging-offer-description">Drying Time: 55 sec</h2>
          </div>

          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">pH: 7.8</h2>
            <h2 className="packaging-offer-description">TDS: 340</h2>
            <h2 className="packaging-offer-description">Dry Shrinkage: 2.1%</h2>
            <h2 className="packaging-offer-description">Fired Shrinkage: 5.2%</h2>
            <h2 className="packaging-offer-description">Total Shrinkage: 7.4%</h2>
            <h2 className="packaging-offer-description">Dry MOR: 0.483 MPa</h2>
            <h2 className="packaging-offer-description">Deformation: 13.62 mm</h2>
            <h2 className="packaging-offer-description">L.O.I: 12.41%</h2>
            <h2 className="packaging-offer-description">Water Absorption: 27.12%</h2>
          </div>
        </div>
      </div>
      */}

      {/* PACKAGING */}
      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>

        <div className='product-packaging-offers-section'>
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in bulk, 50 kg HDPE bags, and jumbo bags for domestic and export markets.
            </h2>
          </div>

          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Reliable logistics ensuring consistent and timely supply across all regions.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const HighCastPage = () => {
  const [active, setActive] = useState("chip");

  return (
    <div className="product-page">
      <Brand className="brand-section" />

      <div className="product-explained">
        <img src={HighCastHero} alt="RK High Cast Kaolin" />
        <h1 className="ball-clay product-page-name">
          RK HIGH <br /> CAST
        </h1>
      </div>

      <HighCastKaolin />

      <Cta />
    </div>
  );
};

export default HighCastPage;
