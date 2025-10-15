import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Or any icon library / SVG
import { Link } from "react-router-dom";
import Logo from "../assets/rk-logo2.svg";
const Brand = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="brand-section">
      {/* Topbar */}
      <div className="topbar">
        <div className="left">
          {/* Hamburger icon for mobile */}
          <button className="menu-btn" onClick={() => setIsOpen(true)}>
            <Menu  size={28} className="menu-icon" />
            
          </button>
          <img src={Logo} className="logo"/>
        </div>

        {/* Contact button */}
        <a href="/contact" className="contact-btn">Contact Us</a>
      </div>

      {/* Full-screen mobile navigation */}
      {isOpen && (
        <div className="overlay">
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <X size={45} />
          </button>
          <nav className="overlay-nav">
            <a href="/" onClick={() => setIsOpen(false)}>Home</a>
            <a href="/about" onClick={() => setIsOpen(false)}>About</a>
            <a href="/industries" onClick={() => setIsOpen(false)}>Industries</a>
             <a href="/products" onClick={() => setIsOpen(false)}>Products</a>
             <a href="/speciality-minerals" onClick={() => setIsOpen(false)}>Speciality Minerals</a>
            <a href="/business-operations" onClick={() => setIsOpen(false)}>Business Operations</a>
          </nav>
          
        </div>
      )}

      {/* CSS */}
      
    </div>
  );
};

export default Brand;
