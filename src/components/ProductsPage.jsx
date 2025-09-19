import React from 'react'
import Talc from "../assets/products/talc.png"
import SodiumFeldspar from "../assets/products/sodium-feldspar.png"
import PotassiumFeldspar from "../assets/products/potassium-feldspar.png"
import Wollastonite from "../assets/products/wollastonite.png"
import Quartz from "../assets/products/quartz.png"
import ChinaClay from "../assets/products/china-clay.png"
import BallClay from "../assets/products/ball-clay.png"
import LevigatedClay from "../assets/products/levigated-clay.png"
import CalcinedClay from "../assets/products/calcined-clay.png"
import "../styles/Products.css";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';


const ProductsPage = () => {
  return (
    <div className="product-home">
      <div className="product-section">
        <h2 className='product-mobile-head'>
          PRODUCTS <br/> WE OFFER
        </h2>
        {/* <div className="all-products">
        <div className="product">
            <img src={talc}/>
            <h2 href="" className='product-name'> <Link to="/products/talc">Talc</Link></h2>
        </div>
        <div className="product">
            <img src={feldspar}/>
            <h2 className='product-name'>Feldspar</h2>
        </div>
        <div className="product">
            <img src={feldspar}/>
            <h2 className='product-name'>Feldspar</h2>
        </div>
        <div className="product">
            <img src={feldspar}/>
            <h2 className='product-name'>Feldspar</h2>
        </div>
        
        
        </div> */}
        <Swiper
        slidesPerView={3}
        spaceBetween={50}
        navigation={true}
        breakpoints={{
          320: {
            slidesPerView: 1,},
          640: {
            slidesPerView: 2, },
          1024:{
            slidesPerView: 3,
          }           
          }}       
        modules={[Pagination]}
        className="mySwiper"
        
      >
        <SwiperSlide>
          <div className="product">
        
               <img src={Talc}/>
     
             <h1 className="product-name"> <Link to="/products/talc">Talc</Link> </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="product">
         
               <img src={SodiumFeldspar}/>
       
             <h1 className="product-name"> <Link to="/products/sodium-feldspar">Sodium Feldspar</Link> </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="product">
         
               <img src={PotassiumFeldspar}/>
      
             <h1 className="product-name"> <Link to="/products/potassium-feldspar">Potassium Feldspar</Link> </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="product">
          
               <img src={Quartz}/>
       
             <h1 className="product-name"> <Link to="/products/quartz">Quartz</Link> </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="product">
        
               <img src={ChinaClay}/>
           
             <h1 className="product-name"> <Link to="/products/china-clay">China Clay</Link> </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="product">
          
               <img src={CalcinedClay}/>

             <h1 className="product-name"> <Link to="/products/calcinied-clay">Calcined Clay</Link> </h1> 

         </div>
        </SwiperSlide> 
        <SwiperSlide>
          <div className="product">
       
               <img src={BallClay}/>
       
             <h1 className="product-name"> <Link to="/products/ball-clay">Ball Clay</Link> </h1> 

         </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
       
               <img src={LevigatedClay}/>
       
             <h1 className="product-name"> <Link to="/products/levigated-clay">Levigated Clay</Link> </h1> 

         </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="product">
       
               <img src={Wollastonite}/>
       
             <h1 className="product-name"> <Link to="/products/wollastonite">Wollastonite</Link> </h1> 

         </div>
        </SwiperSlide>

        
      </Swiper>

       
        <h1 className="product-head">PRODUCTS</h1>
      </div>
   
    </div>
  )
}

export default ProductsPage
