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
        <Route path="/industries/paint" element={<Paint />} />
      </Routes>

    </div>
    </Router>
  )
}

export default App
