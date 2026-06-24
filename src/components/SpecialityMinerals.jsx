import React from 'react';
import RkTb from "../assets/products/RkTb.png";
import RkHighCast from "../assets/products/HighCast.png";
import RkTd from "../assets/products/RkTd.png";
import { Link } from 'react-router-dom';
import "../styles/SpecialityMinerals.css";

const SpecialityMinerals = () => {
  return (
    <div className='speciality-minerals'>
      <div className='speciality-header'>
      <h2 className='speciality-head'>
        SPECIALITY MINERALS
      </h2>
      <p className="speciality-para">
          Premium speciality minerals engineered for industrial applications — backed by advanced in-house testing, ongoing research and development, and dependable product consistency across every batch.
        </p>
        </div>

      <div className='speciality-div'>
        <Link to="/speciality-minerals/rk-ball-clay" className="mineral">
          
        <img src={RkTb}/>
        <h1 className="product-name">Ball Clay RK TB </h1> 
        </Link>
        <Link to="/speciality-minerals/rk-bc" className="mineral">
        <img src={RkHighCast}/>
        <h1 className="product-name"> RK BC</h1> 
       </Link>
         <Link to="/speciality-minerals/rk-high-cast" className="mineral">
        <img src={RkTd}/>
        <h1 className="product-name"> RK High Cast </h1> 
         </Link>
      </div>
    </div>
  )
}

export default SpecialityMinerals
