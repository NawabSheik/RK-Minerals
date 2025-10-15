import React from 'react'
import MainPage from '../components/MainPage';
import About from '../components/About';
import Industries from "../components/Industries";
import ProductsPage from '../components/ProductsPage';
import GlobalStats from "../components/GlobalStats";
import ReactFullpage from "@fullpage/react-fullpage";
import Footer from '../components/Footer';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, EffectFade, } from 'swiper/modules';
import 'swiper/css/effect-fade';

import 'swiper/css';
import 'swiper/css/pagination';





function HomePage() {
  return (
    <>
      <Swiper
        direction={'vertical'}
        slidesPerView={1}
        effect={'fade'}
        spaceBetween={30}
         fadeEffect={{ crossFade: true }}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide><MainPage/></SwiperSlide>
        <SwiperSlide><About/></SwiperSlide>
        <SwiperSlide><ProductsPage/></SwiperSlide>
        <SwiperSlide><Industries/></SwiperSlide>
        <SwiperSlide><GlobalStats/></SwiperSlide>
        <SwiperSlide><Footer/></SwiperSlide>
       
      </Swiper>
    </>
  );
}
   

export default HomePage
