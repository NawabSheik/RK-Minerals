import React from 'react';
import "../styles/About.css";
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section className="about-page">
      <div className="about-section">
        <div className="about-content">
          <p className="section-label">About RK Minerals</p>

          <h2 className="about-title">
            Reliable Industrial Minerals for Growing Industries
          </h2>

          <p className="about-para">
            <b>R.K. Minerals</b> is a leading miner, supplier and exporter of
            industrial minerals like Feldspar, Kaolin, Talc, Clay and Quartz.
            Our minerals serve as essential inputs for ceramics, cement, glass,
            glazes, paints, soaps and detergents.
          </p>

          <p className="about-para">
            With mining infrastructure across Rajasthan and Gujarat, along with
            strong rail, road and sea connectivity, we are strategically placed
            near major Indian ports including Kandla, Mundra and Dahej.
          </p>

          <Link className="about-btn" to="/about">
            Know More
          </Link>
        </div>

        <h1 className="about-bg-text">ABOUT US</h1>
      </div>
    </section>
  );
};

export default About;