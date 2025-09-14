import React from 'react'
import talc from "../assets/products/talc-web.png";
import feldspar from "../assets/products/feldspar-web.png"
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
        
               <img src={talc}/>
     
             <h1 className="product-name"> Paper </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="product">
         
               <img src={talc}/>
       
             <h1 className="product-name"> Paper </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="product">
         
               <img src={feldspar}/>
      
             <h1 className="product-name"> Paper </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="product">
          
               <img src={feldspar}/>
       
             <h1 className="product-name"> Paper </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="product">
        
               <img src={feldspar}/>
           
             <h1 className="product-name"> Paper </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="product">
          
               <img src={feldspar}/>

             <h1 className="product-name"> Paper </h1> 

         </div>
        </SwiperSlide> 
        <SwiperSlide>
          <div className="product">
       
               <img src={feldspar}/>
       
             <h1 className="product-name"> Paper </h1> 

         </div>
        </SwiperSlide>

        
      </Swiper>

       
        <h1 className="product-head">PRODUCTS</h1>
      </div>
   
    </div>
  )
}

export default ProductsPage
