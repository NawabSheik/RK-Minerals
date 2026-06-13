import React from "react";
import { Link } from "react-router-dom";

import RkTb from "../assets/products/RkTb.png";
import RkHighCast from "../assets/products/HighCast.png";
import RkTd from "../assets/products/RkTd.png";

import "../styles/SpecialityMinerals.css";

const minerals = [
  {
    title: "RK TB Ball Clay",
    image: RkTb,
    description:
      "Premium ball clay engineered for ceramic bodies requiring superior plasticity, strength and consistency.",
    link: "/speciality-minerals/rk-ball-clay",
  },
  {
    title: "RK BC",
    image: RkHighCast,
    description:
      "Specially formulated mineral blend designed to deliver excellent performance across industrial applications.",
    link: "/speciality-minerals/rk-bc",
  },
  {
    title: "RK High Cast",
    image: RkTd,
    description:
      "High-performance casting grade mineral solution developed for reliability, durability and precision.",
    link: "/speciality-minerals/rk-high-cast",
  },
];

const SpecialityMinerals = () => {
  return (
    <section className="speciality-minerals">
      

      <h2 className="speciality-head">
        Specialty Minerals
      </h2>

      <p className="speciality-para">
        Developed through research, testing and industry expertise,
        our specialty mineral products are tailored for advanced
        industrial applications requiring consistency, performance
        and reliability.
      </p>

      <div className="speciality-grid">
        {minerals.map((mineral, index) => (
          <div className="speciality-card" key={index}>
            <div className="speciality-image">
              <img src={mineral.image} alt={mineral.title} />
            </div>

            <h3>{mineral.title}</h3>

            <p>{mineral.description}</p>

            <Link
              className="speciality-btn"
              to={mineral.link}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialityMinerals;