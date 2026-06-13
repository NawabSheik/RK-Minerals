import React from "react";
import Brand from "../../components/Brand";
import TalcImage from "../../assets/products/talc.png";
import ChinaClayImage from "../../assets/products/china-clay.png";
import QuartzImage from "../../assets/products/quartz.png";
import Cta from "../../components/cta";

const products = [
  {
    name: "Talc",
    image: TalcImage,
    specs: ["SiO₂: 60–62%", "MgO: 28–30%", "Fe₂O₃: <1%", "Whiteness: 90%+"],
  },
  {
    name: "China Clay",
    image: ChinaClayImage,
    specs: ["SiO₂: 45–48%", "Al₂O₃: 35–37%", "Fe₂O₃: <1%", "Brightness: 85–90%"],
  },
  {
    name: "Quartz",
    image: QuartzImage,
    specs: ["SiO₂: 98%+", "Low Fe₂O₃", "High Brightness", "Consistent Quality"],
  },
];

const excellencePoints = [
  {
    title: "Quality Assurance",
    text: "Every mineral is tested for purity, brightness and particle size to ensure consistent performance.",
  },
  {
    title: "Trusted Partnerships",
    text: "We work closely with manufacturers to understand requirements and deliver dependable mineral solutions.",
  },
  {
    title: "Customer-Centric Approach",
    text: "Our grades are tailored to support smoothness, brightness and absorbency in soaps and detergents.",
  },
  {
    title: "Innovation Support",
    text: "We help manufacturers improve product performance, texture and aesthetics through better mineral selection.",
  },
];

const Soaps = () => {
  return (
    <div className="industry-page">
      <Brand className="brand-section" />

      <section className="industry-section">
        <h2 className="industry-head">Soaps & Detergents</h2>
        <span className="industry-stroke"></span>

        <h3 className="industry-subhead">
          Purity and Performance in Every Product
        </h3>

        <p className="industry-para">
          RK Minerals provides high-quality minerals that enhance the smoothness,
          brightness and porosity of soaps and detergents. Our products help
          improve texture, lathering efficiency and stability for personal care
          and household applications.
        </p>

        <p className="industry-para">
          A good mineral for soaps and detergents should offer:
        </p>

        <div className="industry-requirements">
          <h2 className="requirement">High Purity</h2>
          <h2 className="requirement">Controlled Particle Size</h2>
          <h2 className="requirement">Brightness & Whiteness</h2>
          <h2 className="requirement">Consistent Quality</h2>
        </div>
      </section>

      <section className="industry-section2">
        <h2 className="industry-head2">
          RK Mineral Products for Soaps & Detergents
        </h2>

        <p className="note-point">
          Available in powder form, these minerals improve smoothness,
          brightness and absorbency for soaps and detergent formulations.
        </p>

        <div className="industry-products">
          {products.map((product, index) => (
            <div className="industry-products-card" key={index}>
              <h2 className="product-name-ind">{product.name}</h2>

              <div className="product-requirements">
                {product.specs.map((spec, specIndex) => (
                  <h2 className="product-requirement" key={specIndex}>
                    {spec}
                  </h2>
                ))}
              </div>

              <img src={product.image} alt={product.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="industry-excellence">
        <h2 className="industry-head3">How We Deliver Excellence</h2>

        <div className="excellence-cards">
          {excellencePoints.map((item, index) => (
            <div className="excellence-card" key={index}>
              <h2 className="excellence-head">{item.title}</h2>
              <p className="excellence-para">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <Cta />
    </div>
  );
};

export default Soaps;