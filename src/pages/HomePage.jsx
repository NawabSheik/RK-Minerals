import React from 'react'
import MainPage from '../components/MainPage';
import About from '../components/About';
import Industries from "../components/Industries";
import ProductsPage from '../components/ProductsPage';
import GlobalStats from "../components/GlobalStats";
import ReactFullpage from "@fullpage/react-fullpage";


function HomePage() {
  return (
    <div className="App">
      <ReactFullpage
        debug
        licenseKey="xxxxxxxxxxxxxxxxxxxxxxxxx"
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section"><MainPage /></div>
 
            <div className="section"><About/></div>
            <div className="section"><ProductsPage/></div>
            <div className="section"><Industries/></div>
             <div className="section"><GlobalStats/></div>

         
          </ReactFullpage.Wrapper>
        )}
      />
    </div>
  );
}
    // <div>
    //   <MainPage className="main-section"/>
    //   <About/>
    //   <ProductsPage/>
    //   <Industries/>
    //   <GlobalStats/>
    // </div>
  

export default HomePage
