import React from "react";
import Brand from "../../components/Brand";
import Cta from "../../components/cta";
import Applications from "../../components/applications";

// IMPORT IMAGES
import RkTbHero from "../../assets/products/rk-tb-hero.png";
import RkTbTop from "../../assets/products/tb td.png";

// INDUSTRY SLIDES
import Paper from "../../assets/industries/Paper2.png";
import Glass from "../../assets/industries/Glass2.png";
import Rubber from "../../assets/industries/Rubber2.png";
import Soap from "../../assets/industries/Soap2.png";
import Ceramics from "../../assets/industries/Ceramics2.png";

const productSlides = [

  { name: "Ceramics", img: Ceramics, link: "/industries/ceramics" },
];

function RkTbDetails() {
  return (
    <div className="product-content">
      {/* PRODUCT DESCRIPTION */}
      <div className="product-details">
        <h2 className="product-details-head">RK TB – Premium Ball Clay</h2>
        <h2 className="product-details-head">
          Engineered for Ceramic Tile Production & High Strength Bodies
        </h2>
        <span className="product-details-stroke"></span>

        <p className="product-para">
          RK TB is a specialized grade of ball clay formulated for ceramic tile
          manufacturing requiring high strength, excellent mouldability, and
          superior fired results. Its balanced composition of alumina, silica,
          and controlled mineral impurities ensures excellent plasticity, stable
          casting behaviour, and strong fired properties. The clay is refined to
          deliver excellent consistency, making it ideal for wall tiles, floor
          tiles, and vitrified applications where dimensional accuracy and fired
          strength are essential. With high whiteness, controlled shrinkage, and
          optimized dry strength, RK TB enhances body performance across various
          ceramic formulations.
        </p>
      </div>

      {/* USP SECTION */}
      <div className="product-usp-section">
        <div className="product-usp-left">
          <div className="product-usp">
            <h2 className="product-usps">
              High mouldability & shaping stability for tile bodies
            </h2>
            <h2 className="product-usps">
              Low residue ensuring smooth surface finish
            </h2>
            <h2 className="product-usps">
              Excellent dry & fired strength for durable ceramic tiles
            </h2>
            <h2 className="product-usps">
              Controlled water absorption for stable sintering
            </h2>
            <h2 className="product-usps">
              High brightness & whiteness for clean fired finish
            </h2>
          </div>
        </div>

        <div className="product-usp-right">
          <img src={RkTbTop} alt="RK TB Top" />
        </div>
      </div>

      {/* WHY TRUST SECTION */}
      <div className="why-industry-trust">
        <h2 className="product-details-head">Why Manufacturers Prefer RK TB</h2>
        <span className="product-details-stroke"></span>

        <p className="product-para">
          RK TB is trusted for its stable chemistry, fine particle size, and
          excellent plastic behaviour that supports controlled drying and firing
          cycles. With high MOR values and low impurity levels, it provides
          improved body performance and reduces cracking, warpage, and
          deformation during production. Its high whiteness and stable thermal
          behaviour make it suitable for wide-ranging ceramic tile applications,
          ensuring uniformity and reliability in every batch.
        </p>
      </div>

      {/* CHEMICAL & PHYSICAL PROPERTIES 
      <div className="product-analysis">
        <h2 className="product-details-head">Chemical & Physical Properties</h2>
        <span className="product-details-stroke"></span>

        <div className="analysis-table">
          <table>
            <tbody>
              <tr><td>SiO2</td><td>49.51%</td></tr>
              <tr><td>Al2O3</td><td>34.39%</td></tr>
              <tr><td>Fe2O3</td><td>1.1%</td></tr>
              <tr><td>TiO2</td><td>1.17%</td></tr>
              <tr><td>CaO</td><td>0.32%</td></tr>
              <tr><td>MgO</td><td>0.28%</td></tr>
              <tr><td>K2O</td><td>0.81%</td></tr>
              <tr><td>Na2O</td><td>0.44%</td></tr>
              <tr><td>L.O.I</td><td>11.75%</td></tr>

             
              <tr><td>Shrinkage</td><td>15.13%</td></tr>
              <tr><td>Loss On Ignition</td><td>11.96%</td></tr>
              <tr><td>Dry MOR</td><td>25.2 kg/cm²</td></tr>
              <tr><td>Fired MOR</td><td>36.11 kg/cm²</td></tr>
              <tr><td>Water Absorption</td><td>1.83%</td></tr>
              <tr><td>Water of Plasticity</td><td>43.8%</td></tr>
              <tr><td>TDS</td><td>850</td></tr>
              <tr><td>Residue 240#</td><td>0.15%</td></tr>
              <tr><td>L Value</td><td>84.54</td></tr>
              <tr><td>A Value</td><td>1.24</td></tr>
              <tr><td>B Value</td><td>13.28</td></tr>
              <tr><td>Whiteness</td><td>65.72</td></tr>
              <tr><td>Temperature</td><td>1188 / 1205°C</td></tr>
              <tr><td>Cycle Time</td><td>45 min</td></tr>
            </tbody>
          </table>
        </div>
      </div>
      */}

      {/* APPLICATIONS */}
    

      {/* PACKAGING */}
      <div className="product-packaging">
        <h2 className="product-packaging-head">Packaging & Supply</h2>

        <div className="product-packaging-offers-section">
          <div className="product-packaging-offer-1">
            <h2 className="packaging-offer-description">
              Available in Bulk, 50kg HDPE Bags, and Jumbo Bags for domestic
              and international shipments.
            </h2>
          </div>

          <div className="product-packaging-offer-2">
            <h2 className="packaging-offer-description">
              Trusted supply chain delivering consistent material quality on time.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

const RKTB = () => {
  return (
    <div className="product-page">
      <Brand className="brand-section" />

      <div className="product-explained">
        <img src={RkTbHero} alt="RK TB Hero" />
        <h1 className="product-page-name">RK TB</h1>
      </div>

      <RkTbDetails />

      <Cta />
    </div>
  );
};

export default RKTB;
