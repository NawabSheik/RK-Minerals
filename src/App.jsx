import React from 'react';
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



const App = () => {
  return (

    <Router>
    
    <div className="app-style">
      <NavBar className="nav-section"/>
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/about-us" element={<AboutPage/>}/>
      <Route path="/about" element={<About />} />
      <Route path="/industries" element={<Industries />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/stats" element={<GlobalStats />} />
      <Route path="/products/talc" element={<Talc />} />
      <Route path="/products/quartz" element={<Quartz />} />
      <Route path="/products/levigated-clay" element={<LevigatedClay />} />
      <Route path="/products/ball-clay" element={<BallClay />} />
      <Route path="/products/wollastonite" element={<Wollastonite />} />
      <Route path="/products/china-clay" element={<ChinaClay/>} />
      <Route path="/products/calcinied-clay" element={<CalciniedClay />} />
      <Route path="/products/sodium-feldspar" element={<SodiumFeldspar/>} />
      <Route path="/products/potassium-feldspar" element={<PotassiumFeldspar/>} />
      <Route path="/industries/paint" element={<Paint />} />
      </Routes>

    </div>
    </Router>
  )
}

export default App
