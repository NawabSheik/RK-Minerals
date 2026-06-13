import React from 'react';
import "../styles/NavBar.css";
import { Link } from 'react-router-dom';

const NavBar = ({ className }) => {
  return (
    <nav className={className}>
      <div className="navbar">
        <Link className="nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/about">About Us</Link>
        <Link className="nav-link" to="/products">Products</Link>
        <Link className="nav-link" to="/industries">Industries</Link>
        <Link className="nav-link" to="/speciality-minerals">Speciality Minerals</Link>
        <Link className="nav-link" to="/business-operations">Business Operations</Link>
      </div>
    </nav>
  );
};

export default NavBar;