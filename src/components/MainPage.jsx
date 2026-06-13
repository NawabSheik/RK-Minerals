import React, {useEffect,useRef} from 'react';
import Machinery from '../assets/machinery-img.webp';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Brand from './Brand';
import MachineryMobile from '../assets/machinery-mobile.png';


const MainPage = ({className}) => {

  return (
    <div className={className} >
      <Brand className="brand-section"/>
        <div className="main-page">
           
            <img src={Machinery} className='desktop-img' alt="bg-image"/>
            <img src={MachineryMobile} alt="bg-image" className="mobile-img" />
            
            <div className='main-text'>
                <div className="hero-content">
  <h1 className="quote-top">BREAKING LIMITS</h1>
  <span className="quote-stroke"></span>
  <h2 className="quote-bottom">BELOW THE SURFACE</h2>
</div>
            </div>
        </div>
    </div>
  )
}

export default MainPage
