import React from 'react';
import Brand from './components/Brand';
import MainPage from './components/MainPage';
import NavBar from './components/NavBar';
import AboutPage from './components/AboutPage';
import Industries from "./components/Industries";
import ProductsPage from './components/ProductsPage';
import GlobalStats from "./components/GlobalStats";




const App = () => {
  return (
    <div className="app-style">
      <MainPage className="main-section"/>
      
      <AboutPage/>
      <Brand className="brand-section"/>
      
      <Industries/>
      <ProductsPage/>
      <GlobalStats/>
      <NavBar className="nav-section"/>

      
    </div>
  )
}

export default App
