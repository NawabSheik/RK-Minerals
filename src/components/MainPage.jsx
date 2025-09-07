import React, {useEffect,useRef} from 'react';
import Machinery from '../assets/machinery-img.png';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const MainPage = ({className}) => {

  return (
    <div className={className} >
        <div className="main-page">
           
            <img src={Machinery} alt="bg-image"/>
            
            <div className='main-text'>
                <h2 className="quote-top">BREAKING LIMITS</h2>
                <h3 className="quote-bottom">BELOW THE SURFACE</h3>
            </div>
        </div>
    </div>
  )
}

export default MainPage
