import React from 'react';
import Brand from '../components/Brand';
import AboutHero from "../assets/About-Hero.webp";
import "../styles/AboutPage.css"
import Timeline from "../assets/timeline2.svg";
import Cta from "../components/CallToAction";
import Counter from '../components/Counter';
import Team from '../components/Team';


const AboutPage = () => {
  return (
    <div>
      <Brand className="brand-section"/>
      <div className="about-hero-section">
        <img className="about-hero-img" src={AboutHero}/>
        <div className="hero-div">
          <h1 className="about-page-head">About Us</h1>
          <span className='about-page-stroke'></span>
          <p className='about-page-para'>R.K Minerals is a leading miner, supplier & exporter of Industrial
            Minerals like Feldspar, China clay (Kaolin), Talc (Soapstone), Quartz, etc.
            We have been importing & exporting high-quality minerals, which serve
            as vital inputs for several industries, including ceramics, cement, glass,
            glazes, paints & cosmetics, etc.</p>

            <div className="about-stats">
          <div className='stat-div'>
            <div className='stat-head'>
               <Counter target={15} suffix="+" />
            </div>
            <p className='stat-text'>Years of Experience</p>
          </div>
          <div className='stat-div'>
            <div className='stat-head'>
               <Counter target={7} suffix="+" />
            </div>
            <p className='stat-text'>Product Ranges</p>
          </div>
          
          <div className='stat-div'>
            <div className='stat-head'>
               <Counter target={50} suffix="+" />
            </div>
            <p className='stat-text'>Happy Clients</p>
          </div>
          <div className='stat-div'>
            <div className='stat-head'>
               <Counter target={100000} suffix="+" />
            </div>
            <p className='stat-text'> MT Material Supplied</p>
          </div>
          

        </div>
        </div>

        
      </div>

      <div className="about-us-cards">
        <h2 className="cards-head"> We Are...</h2>
        <div className="cards">
        <div className="card">
          <div className="card-head">
          <h2 className="card-heading">Customer-Focused</h2>
          <span className="card-stroke"></span>
          </div>
          <p className="card-para">We understand industry needs and deliver tailored mineral solutions, ensuring dependable quality, responsive service, and long-term value for every customer we serve.</p>
        </div>
        <div className="card">
          <div className="card-head"> 
          <h2 className="card-heading">Innovation-driven</h2>
          <span className="card-stroke"></span>
          </div>
          <p className="card-para">We invest in advanced processes, quality systems, and sustainable practices, continuously improving products and operations to deliver reliable performance and lasting results.</p>
        </div>
        <div className="card">
          <div className="card-head">
          <h2 className="card-heading">Operational Agile</h2>
          <span className="card-stroke"></span>
          </div>
          <p className="card-para">We combine strategic locations, efficient logistics, and scalable capabilities to serve domestic and international markets with speed, consistency, and flexibility.</p>
        </div>
        <div className="card">
          <div className="card-head">
          <h2 className="card-heading">Experienced & Trusted</h2>
          <span className="card-stroke"></span>
          </div>
          <p className="card-para">We bring decades of industry knowledge, technical expertise, and dependable partnerships, helping customers source high-quality mineral solutions with confidence and assurance.</p>
        </div>
        </div>
      </div>

      <div className="mission-values">
        <div className="mission-section">
    
          <p className="mission-statement"><span class="bold">We want to be India’s preferred and reliable supplier of high-quality industrial minerals</span>, enabling our customers’ success through product excellence, on time delivery, and continuous innovation.</p>
        </div>


      </div>

      <div className="timeline-section">

      <div className="company-timeline">
        <h2 className="timeline-head">Our Timeline</h2>
        <img src={Timeline} />
      </div>
      </div>
      <div className="message">
        <div className="message-div">
        <h2 className="message-head">MESSAGE FROM THE FOUNDER</h2>
        <span className="stroke"></span>
        <p className="message-para">Every great company begins with a belief. For me, it was the belief that minerals are not just raw materials, but the backbone of industries that shape everyday life. With this conviction, I laid the foundation of RK Minerals in 2003, determined to build a company known for quality, trust, and responsibility.
            <br/>
            <br/>
            From our early days as a trading house to becoming a mining and processing enterprise with a global outlook, our journey has been marked by resilience, innovation, and a commitment to our core values.
            <br/>
            <br/>


            Today, RK Minerals is more than a supplier, we are partners in progress for industries across ceramics, glass, paints, cement, and beyond. Our goal has always been clear: to provide dependable products & foster long-term relationships. 
            I am deeply proud of our team, whose dedication and expertise continue to drive our success. As we look to the future, we remain committed to creating value & building trust with every stakeholder.

            At RK Minerals, we don’t just deliver minerals, we deliver possibilities.</p>
            <div class="message-author">
              <h2 class="author-name">Sanjay Jain</h2>
              <h3 class="author-position">Founder</h3>
            </div>
          </div>

      <Team/>
      <Cta/>
      </div>
      

      
    
    </div>
  )
}

export default AboutPage
