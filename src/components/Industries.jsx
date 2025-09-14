import React, {useEffect, useRef} from 'react';
import "../styles/Industries.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Ceramics from "../assets/industries/ceramics.png";
import Glass from "../assets/industries/glass.png";
import Paper from "../assets/industries/paper.png";
import Rubber from "../assets/industries/rubber.png";
import Soap from "../assets/industries/soap.png";
import Coating from "../assets/industries/coating.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';





const Industries = () => {
    
  // return (
  //   <div className="industries-page">
  //     <div className="industries-section">
  //       <div className="industries-left-most">
  //           <div className="industry-top">
  //               <div className="industry-image">
  //                   <img src={Ceramics}/>
  //               </div>
  //                   <h1 className="industry-name"> Ceramics </h1>

  //           </div>
  //           <div className="industry-bottom">
  //               <div className="industry-image">
  //                   <img src={Paper}/>
  //               </div>
  //                   <h1 className="industry-name"> Paper </h1>

  //           </div>
            
  //       </div>
  //       <div className="industries-center-right">

  //         <div className="industries-top">
  //         <div className="industry-top-left">
  //           <div className="industry-image">
  //                   <img src={Glass}/>
  //               </div>
  //                   <h1 className="industry-name"> Glass </h1>
  //         </div>
  //         <div className="industry-top-right">
  //           <div className="industry-image">
  //                   <img src={Coating}/>
  //               </div>
  //                   <h1 className="industry-name"> Coatings </h1>
  //         </div>
  //         </div>

  //         <div className="industries-bottom">
  //         <div className="industry-bottom-left">
  //           <div className="industry-image">
  //                   <img src={Rubber}/>
  //               </div>
  //                   <h1 className="industry-name"> Rubber </h1>
  //         </div>
  //         <div className="industry-bottom-right">
  //           <div className="industry-image">
  //                   <img src={Soap}/>
  //               </div>
  //                   <h1 className="industry-name"> Soap </h1>
  //         </div>
  //         </div>
          



  //       </div>
  //     </div>
  //   </div>
  // )

  return(
    <div className='industries-page'>

      <div  className='industries-section'>
        <div className='industries-mobile-heading'>
        INDUSTRIES WE SERVE
      </div>
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
          <div className="industry-slide">
          <div className="industry-image">
               <img src={Paper}/>
           </div>
             <h1 className="industry-name"> Paper </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="industry-slide">
          <div className="industry-image">
               <img src={Glass}/>
           </div>
             <h1 className="industry-name"> Paper </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="industry-slide">
          <div className="industry-image">
               <img src={Coating}/>
           </div>
             <h1 className="industry-name"> Paper </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="industry-slide">
          <div className="industry-image">
               <img src={Ceramics}/>
           </div>
             <h1 className="industry-name"> Paper </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="industry-slide">
          <div className="industry-image">
               <img src={Paper}/>
           </div>
             <h1 className="industry-name"> Paper </h1> 

         </div>
        </SwiperSlide>
         <SwiperSlide>
          <div className="industry-slide">
          <div className="industry-image">
               <img src={Paper}/>
           </div>
             <h1 className="industry-name"> Paper </h1> 

         </div>
        </SwiperSlide> 
        <SwiperSlide>
          <div className="industry-slide">
          <div className="industry-image">
               <img src={Paper}/>
           </div>
             <h1 className="industry-name"> Paper </h1> 

         </div>
        </SwiperSlide>

        
      </Swiper>

      <div className='industries-heading'>
        INDUSTRIES WE SERVE
      </div>
      </div>

    </div>
  )
}

export default Industries
