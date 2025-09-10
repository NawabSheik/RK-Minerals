import React from 'react'
import MainPage from '../components/MainPage';
import About from '../components/About';
import Industries from "../components/Industries";
import ProductsPage from '../components/ProductsPage';
import GlobalStats from "../components/GlobalStats";

function HomePage() {
  return (
    <div>
      <MainPage className="main-section"/>
      <About/>
      <ProductsPage/>
      <Industries/>
      <GlobalStats/>
    </div>
  )
}

export default HomePage
