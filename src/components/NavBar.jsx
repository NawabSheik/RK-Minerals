import React from 'react'
import "../styles/NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = ({className}) => {
  return (
    <div className={className}>
      <div className="navbar">
        <h2 className="nav-links"><Link to="/">Home</Link></h2>
        <h2 className="nav-links"><Link to="/about">About Us</Link></h2>
        <h2 className="nav-links"><Link to="/products">Products</Link></h2>
        <h2 className="nav-links"><Link to="/industries">Industries We Serve</Link></h2>
        <h2 className="nav-links"><Link to="/speciality-minerals">Speciality Minerals</Link></h2>
        <h2 className="nav-links"><Link to="/business-operations">Business Operations</Link></h2>
      </div>
    </div>
  )
}

export default NavBar
