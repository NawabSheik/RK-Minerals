import React from 'react';
import "../styles/Industries.css";
import Ceramics from "../assets/industries/ceramics.png";
import Glass from "../assets/industries/glass.png";
import Paper from "../assets/industries/paper.png";
import Rubber from "../assets/industries/rubber.png";
import Soap from "../assets/industries/soap.png";
import Coating from "../assets/industries/coating.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";

const Industries = () => {
  const slides = [
    { name: "Paper", img: Paper, link: "/industries/paper" },
    { name: "Glass", img: Glass, link: "/industries/glass" },
    { name: "Coating", img: Coating, link: "/industries/paint" },
    { name: "Ceramics", img: Ceramics, link: "/industries/ceramics" },
    { name: "Rubber", img: Rubber, link: "/industries/rubber" },
    { name: "Soaps & Detergents", img: Soap, link: "/industries/soaps" },
  ];

  return (
    <div className='industries-page'>
      <div className='industries-mobile-heading'>INDUSTRIES WE SERVE</div>
      <p className="industries-para">Relied on by global manufacturers. Refined with expertise. Made for performance.</p>

      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        speed={500}
        navigation={true}
        loop={true}
      
        modules={[Autoplay, Navigation]}
        className="industries-section"
        breakpoints={{
          320: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 4 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="industry-slide">
              <Link to={slide.link}>
              <div className="industry-image">
                
                <img src={slide.img} alt={slide.name} />
              </div>
              <h1 className="industry-name">
                {slide.name}
              </h1>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Industries;
