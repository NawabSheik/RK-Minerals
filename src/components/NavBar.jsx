import React from 'react'
import "../styles/NavBar.css";

const NavBar = ({className}) => {
  return (
    <div className={className}>
      <div className="navbar">
        <a className="nav-links">Home</a>
        <a className="nav-links">About Us</a>
        <a className="nav-links">Products</a>
        <a className="nav-links">Industries We Serve</a>
        <a className="nav-links">Business Operations</a>
      </div>
    </div>
  )
}

export default NavBar
