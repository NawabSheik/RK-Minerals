// SplashScreen.jsx
import React, { useEffect, useState } from "react";
import "../styles/SplashScreen.css";
import Logo from "../assets/rk-logo2.svg";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); // Notify parent that splash is done
    }, 3000); // Show splash for 3 seconds

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="splash-container">
      <div className="splash-logo">
        <img src={Logo}/>
      </div>
    
    </div>
  );
};

export default SplashScreen;
