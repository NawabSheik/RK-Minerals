import React from 'react';
import RkTb from "../assets/products/RkTb.png";
import RkHighCast from "../assets/products/HighCast.png";
import RkTd from "../assets/products/RkTd.png";
import { Link } from 'react-router-dom';
import "../styles/SpecialityMinerals.css";

const SpecialityMinerals = () => {
  return (
    <div className='speciality-minerals'>
      <h2 className='speciality-head'>
        Speciality Minerals
      </h2>

      <div className='speciality-div'>
        <div className="mineral">
        <img src={RkTb}/>
        <h1 className="product-name"> <Link to="/speciality-minerals/rk-ball-clay">Ball Clay RK TB</Link> </h1> 
        </div>
        <div className="mineral">
        <img src={RkHighCast}/>
        <h1 className="product-name"> <Link to="/speciality-minerals/rk-bc">RK BC</Link> </h1> 
        </div>
        <div className="mineral">
        <img src={RkTd}/>
        <h1 className="product-name"> <Link to="/speciality-minerals/rk-high-cast">RK High Cast</Link> </h1> 
        </div>
      </div>
    </div>
  )
}

export default SpecialityMinerals
