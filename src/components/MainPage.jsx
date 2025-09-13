import React, {useEffect,useRef} from 'react';
import Machinery from '../assets/machinery-img.png';
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
                <h2 className="quote-top">BREAKING LIMITS</h2>
                <span className='quote-stroke'></span>
                <h3 className="quote-bottom">BELOW THE SURFACE</h3>
            </div>
        </div>
    </div>
  )
}

export default MainPage
