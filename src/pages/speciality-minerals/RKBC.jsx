import React from "react";
import Brand from "../../components/Brand";
import Cta from "../../components/cta";
import Applications from "../../components/applications";

// IMPORT YOUR IMAGES HERE
import RkBcHero from "../../assets/products/rk-bc-hero.png";
import RkBcTop from "../../assets/products/bc td.png";


import Paper from "../../assets/industries/Paper2.png";
import Glass from "../../assets/industries/Glass2.png";
import Rubber from "../../assets/industries/Rubber2.png";
import Soap from "../../assets/industries/Soap2.png";
import Ceramics from "../../assets/industries/Ceramics2.png";

const productSlides = [
  
  { name: "Ceramics", img: Ceramics, link: "/industries/ceramics" },
];

function RkBcDetails() {
  return (
    <div className="product-content">
      {/* PRODUCT DESCRIPTION */}
      <div className="product-details">
        <h2 className="product-details-head">RK BC – Premium Ball Clay</h2>
        <h2 className="product-details-head">
          Designed for High Plasticity & Casting Stability
        </h2>
        <span className="product-details-stroke"></span>

        <p className="product-para">
          RK BC is a brownish, high-performance ball clay developed for ceramic
          and sanitaryware applications where excellent plasticity, controlled
          shrinkage, and superior moulding behaviour are essential. Its naturally
          fine particle size and high binding strength help improve body
          strength, shaping quality, and casting efficiency during production.
          With excellent manual plasticity, stable slip behaviour, and ideal
          drying characteristics, RK BC ensures smooth forming, reduced defects,
          and consistent output across all ceramic bodies.
        </p>
      </div>

      {/* USP SECTION */}
      <div className="product-usp-section">
        <div className="product-usp-left">
          <div className="product-usp">
            <h2 className="product-usps">
              High plasticity for smooth forming & shaping
            </h2>
            <h2 className="product-usps">
              Excellent slip stability with controlled viscosity
            </h2>
            <h2 className="product-usps">
              Ideal for tiles, sanitaryware, and ceramic industries
            </h2>
            <h2 className="product-usps">
              Low water absorption ensuring strong fired bodies
            </h2>
            <h2 className="product-usps">
              Balanced shrinkage for accurate dimensions
            </h2>
          </div>
        </div>

        <div className="product-usp-right">
          <img src={RkBcTop} alt="RK BC Top" />
        </div>
      </div>

      {/* WHY TRUST SECTION */}
      <div className="why-industry-trust">
        <h2 className="product-details-head">
          Why Ceramic Manufacturers Trust RK BC
        </h2>
        <span className="product-details-stroke"></span>

        <p className="product-para">
          With controlled moisture, optimal pH, and balanced mineral structure,
          RK BC delivers exceptional performance in demanding ceramic
          environments. Its high MOR value improves dry strength, reducing
          breakage during handling and moulding. Low shrinkage and stable
          viscosity ensure reliable casting and defect-free production,
          making RK BC a preferred choice across technical ceramics.
        </p>
      </div>

      {/* CHEMICAL ANALYSIS 
      <div className="product-analysis">
        <h2 className="product-details-head">Chemical & Physical Properties</h2>
        <span className="product-details-stroke"></span>

        <div className="analysis-table">
          <table>
            <tbody>
              <tr><td>Raw Colour</td><td>Brownish</td></tr>
              <tr><td>Slip Temperature</td><td>17</td></tr>
              <tr><td>Density (gm/cc)</td><td>1.557</td></tr>
              <tr><td>Fluidity (Sec)</td><td>15</td></tr>
              <tr><td>Fluidity (After 30 mins)</td><td>39</td></tr>
              <tr><td>Casting Rate (45 min)</td><td>3.3 mm</td></tr>
              <tr><td>Water Dispersion Time</td><td>670 sec</td></tr>
              <tr><td>pH</td><td>8.1</td></tr>
              <tr><td>TDS</td><td>380</td></tr>
              <tr><td>Plasticity (Manual)</td><td>Very Good</td></tr>
              <tr><td>Dry Shrinkage</td><td>2.5%</td></tr>
              <tr><td>Fired Shrinkage</td><td>8%</td></tr>
              <tr><td>Total Shrinkage</td><td>10.5%</td></tr>
              <tr><td>Dry MOR (MPa)</td><td>4.98</td></tr>
              <tr><td>L.O.I</td><td>9.77%</td></tr>
              <tr><td>Water Absorption</td><td>0.53%</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    
      {/* APPLICATIONS */}
     

      {/* PACKAGING */}
      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>

        <div className="product-packaging-offers-section">
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in Bulk, 50kg HDPE Bags, and Jumbo Bags for domestic
              and export supply.
            </h2>
          </div>

          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Reliable logistics ensuring consistent on-time delivery across all regions.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const RKBC = () => {
  return (
    <div className="product-page">
      <Brand className="brand-section" />

      <div className="product-explained">
        <img src={RkBcHero} alt="RK BC Hero" />
        <h1 className="product-page-name">RK BC</h1>
      </div>

      <RkBcDetails />

      <Cta />
    </div>
  );
};

export default RKBC;
