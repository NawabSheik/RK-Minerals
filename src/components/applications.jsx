// src/components/ApplicationsSlider.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from "react-router-dom";
import "../styles/applications.css";

const Applications = ({ title = "Key Applications", desc, slides = [] }) => {
  return (
    <div className='application-section'>
      <div className='application-heading'>Key Applications</div>
      <div className='application-desc'>{desc}</div>
      <div class="applications">
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        speed={500}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="industries-section application-names"
        breakpoints={{
          320: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 2 },
        }}
       
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="industry-slide">
              <Link to={slide.link}>
                <div className="industry-image">
                  <img src={slide.img} alt={slide.name} />
                </div>
                <h1 className="industry-name">{slide.name}</h1>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      </div>
    </div>
  );
};

export default Applications;
