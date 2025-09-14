import React, {useEffect, useRef} from 'react';
import "../styles/AboutPage.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";




const About = () => {
    
  return (
    <div className="about-page ">
      <div className="about-section">
        <h1 className="about-head-mobile">ABOUT US</h1>
        <span className='about-stroke'></span>
        <div className="about-us-upper">
        <p className="about-para">
          R.K Minerals is a leading miner, supplier & exporter of Industrial Minerals like feldspar, kaolin, talc, quartz, etc. We have been importing & exporting high-quality minerals, which serve as vital inputs for several industries, including ceramics, cement, glass, glazes, paints & cosmetics. We have our mining infrastructure based out of Rajasthan & Gujarat (INDIA) with a strong rail, road & sea connectivity. We are located in close proximity with the 3 major ports of India; Kandla, Mundra & Dahej.
        </p>
        <button className="about-btn">Know More</button>
        </div>
        <h1 className="about-head">ABOUT US</h1>
      </div>
    </div>
  )
}

export default About
