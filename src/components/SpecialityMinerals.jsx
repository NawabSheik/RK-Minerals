import React from 'react';
import Quartz from "../assets/products/quartz.png";
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
        <img src={Quartz}/>
        <h1 className="product-name"> <Link to="/products/quartz">Ball Clay RK TB</Link> </h1> 
        </div>
        <div className="mineral">
        <img src={Quartz}/>
        <h1 className="product-name"> <Link to="/products/quartz">RK BC</Link> </h1> 
        </div>
        <div className="mineral">
        <img src={Quartz}/>
        <h1 className="product-name"> <Link to="/products/quartz">RK High Cast</Link> </h1> 
        </div>
      </div>
    </div>
  )
}

export default SpecialityMinerals
