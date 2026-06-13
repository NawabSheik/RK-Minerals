import React from 'react';
import Brand from '../components/Brand';
import AboutHero from "../assets/About-Hero.webp";
import "../styles/AboutPage.css";
import Timeline from "../assets/timeline2.svg";
import Cta from "../components/CallToAction";
import Counter from '../components/Counter';
import Team from '../components/Team';

const AboutPage = () => {
  return (
    <div>
      <Brand className="brand-section" />

      <div className="about-hero-section">
        <img className="about-hero-img" src={AboutHero} alt="RK Minerals About" />

        <div className="hero-div">
          <h1 className="about-page-head">About Us</h1>
          <span className="about-page-stroke"></span>

          <p className="about-page-para">
            R.K Minerals is a leading miner, supplier and exporter of industrial
            minerals like Feldspar, China Clay, Talc and Quartz. We deliver
            high-quality minerals for ceramics, cement, glass, paints,
            cosmetics and other industrial applications.
          </p>

          <div className="about-stats">
            <div className="stat-div">
              <div className="stat-head">
                <Counter target={15} suffix="+" />
              </div>
              <p className="stat-text">Years of Experience</p>
            </div>

            <div className="stat-div">
              <div className="stat-head">
                <Counter target={7} suffix="+" />
              </div>
              <p className="stat-text">Product Ranges</p>
            </div>

            <div className="stat-div">
              <div className="stat-head">
                <Counter target={50} suffix="+" />
              </div>
              <p className="stat-text">Happy Clients</p>
            </div>

            <div className="stat-div">
              <div className="stat-head">
                <Counter target={100000} suffix="+" />
              </div>
              <p className="stat-text">MT Material Supplied</p>
            </div>
          </div>
        </div>
      </div>

      <div className="about-us-cards">
        <h2 className="cards-head">We Are...</h2>

        <div className="cards">
          <div className="card">
            <div className="card-head">
              <h2 className="card-heading">Customer Centric & Market Driven</h2>
              <span className="card-stroke"></span>
            </div>
            <p className="card-para">
              We serve industries such as ceramics, glass, cement, paints,
              soaps and detergents by adapting our products to every partner’s
              requirements.
            </p>
          </div>

          <div className="card">
            <div className="card-head">
              <h2 className="card-heading">Innovation-led Team</h2>
              <span className="card-stroke"></span>
            </div>
            <p className="card-para">
              We invest in process improvements, quality control, mineral
              solutions and sustainable technologies to ensure reliability.
            </p>
          </div>

          <div className="card">
            <div className="card-head">
              <h2 className="card-heading">Operational Strength & Agility</h2>
              <span className="card-stroke"></span>
            </div>
            <p className="card-para">
              With facilities in Rajasthan and Gujarat, and access to key ports,
              we serve domestic and international clients efficiently.
            </p>
          </div>

          <div className="card">
            <div className="card-head">
              <h2 className="card-heading">Trusted & Experienced</h2>
              <span className="card-stroke"></span>
            </div>
            <p className="card-para">
              Our team brings decades of experience in minerals and industrial
              raw materials with a focus on quality, flexibility and trust.
            </p>
          </div>
        </div>
      </div>

      <div className="mission-values">
        <div className="mission-section">
          <p className="mission-statement">
            <span className="bold">
              We aim to be India’s preferred and reliable supplier of
              high-quality industrial minerals
            </span>
            , enabling customer success through product excellence, dependable
            delivery and continuous innovation.
          </p>
        </div>
      </div>

      <div className="timeline-section">
        <div className="company-timeline">
          <h2 className="timeline-head">Our Timeline</h2>
          <img src={Timeline} alt="RK Minerals timeline" />
        </div>
      </div>

      <div className="message">
        <div className="message-div">
          <h2 className="message-head">Message From The Founder</h2>
          <span className="stroke"></span>

          <p className="message-para">
            Every great company begins with a belief. For us, it was the belief
            that minerals are not just raw materials, but the backbone of
            industries that shape everyday life.
            <br /><br />
            From our early days as a trading house to becoming a mining and
            processing enterprise with a global outlook, our journey has been
            built on resilience, innovation and responsibility.
            <br /><br />
            Today, RK Minerals is more than a supplier — we are partners in
            progress for industries across ceramics, glass, paints, cement and
            beyond. We remain committed to creating value and building trust
            with every stakeholder.
          </p>

          <div className="message-author">
            <h2 className="author-name">Sanjay Jain</h2>
            <h3 className="author-position">Founder</h3>
          </div>
        </div>

        <Team />
        <Cta />
      </div>
    </div>
  );
};

export default AboutPage;