import React, { useState, useEffect } from "react";
import Brand from './components/Brand';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import Industries from './components/Industries';
import ProductsPage from './components/ProductsPage';
import GlobalStats from './components/GlobalStats';
import About from './components/About';
import Talc from './pages/product-pages/Talc';
import SodiumFeldspar from './pages/product-pages/SodiumFeldspar';
import PotassiumFeldspar from './pages/product-pages/PotassiumFeldspar';
import Quartz from './pages/product-pages/Quartz';
import ChinaClay from './pages/product-pages/ChinaClay';
import BallClay from './pages/product-pages/BallClay';
import Wollastonite from './pages/product-pages/Wollastonite';
import CalciniedClay from './pages/product-pages/CalciniedClay';
import LevigatedClay from './pages/product-pages/LevigatedClay';
import Paint from './pages/industry-pages/Paint';
import Soaps from './pages/industry-pages/Soaps';
import Rubber from './pages/industry-pages/Rubber';
import Ceramic from './pages/industry-pages/Ceramics';
import Glass from './pages/industry-pages/Glass';
import Paper from './pages/industry-pages/Paper';
import SpecialityMinerals from './components/SpecialityMinerals';
import BusinessOperations from './pages/BusinessOperations';
import SplashScreen from './components/SplashScreen';
import Contact from './components/Contact';
import RKBC from "./pages/speciality-minerals/RKBC";
import RKHighCast from "./pages/speciality-minerals/RKHighCast";
import BallClayRk from "./pages/speciality-minerals/BallClayRk";
import SwiperContext from "./SwiperContext";

const App = () => {
  const [swiper, setSwiper] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 3 seconds
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />; // Show splash screen first
  }

  return (
    
    <Router>
       <SwiperContext.Provider value={{ swiper, setSwiper }}>
      <div className="app-style">
        <NavBar className="nav-section"/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/stats" element={<GlobalStats />} />
          <Route path="/products/talc" element={<Talc />} />
          <Route path="/products/quartz" element={<Quartz />} />
          <Route path="/products/levigated-clay" element={<LevigatedClay />} />
          <Route path="/products/ball-clay" element={<BallClay />} />
          <Route path="/products/wollastonite" element={<Wollastonite />} />
          <Route path="/products/china-clay" element={<ChinaClay />} />
          <Route path="/products/calcined-clay" element={<CalciniedClay />} />
          <Route path="/products/sodium-feldspar" element={<SodiumFeldspar />} />
          <Route path="/products/potassium-feldspar" element={<PotassiumFeldspar />} />
          <Route path="/speciality-minerals/rk-bc" element={<RKBC />} />
          <Route path="/speciality-minerals/rk-high-cast" element={<RKHighCast />} />
          <Route path="/speciality-minerals/rk-ball-clay" element={<BallClayRk />} />
          <Route path="/industries/paint" element={<Paint />} />
          <Route path="/industries/paper" element={<Paper />} />
          <Route path="/industries/ceramics" element={<Ceramic />} />
          <Route path="/industries/soaps" element={<Soaps />} />
          <Route path="/industries/glass" element={<Glass />} />
          <Route path="/industries/rubber" element={<Rubber />} />
          <Route path="/speciality-minerals" element={<SpecialityMinerals />} />
          <Route path="/business-operations" element={<BusinessOperations />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
       </SwiperContext.Provider>
    </Router>
   
  );
};

export default App;
