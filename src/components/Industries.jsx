import React from 'react';
import "../styles/Industries.css";
import Ceramics from "../assets/industries/ceramics.png";
import Glass from "../assets/industries/glass.png";
import Paper from "../assets/industries/paper.png";
import Rubber from "../assets/industries/rubber.png";
import Soap from "../assets/industries/soap.png";
import Coating from "../assets/industries/coating.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
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
    <section className="industries-page">
      <h2 className="industries-mobile-heading">Industries We Serve</h2>
      <p className="industries-para">
        Reliable mineral solutions for manufacturers across ceramics, glass,
        coatings, rubber, paper and detergent industries.
      </p>

      <Swiper
        slidesPerView={3}
        spaceBetween={24}
        speed={500}
        navigation={true}
        loop={false}
        modules={[Navigation]}
        className="industries-section"
        breakpoints={{
          320: { slidesPerView: 1.1 },
          640: { slidesPerView: 1.6 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 4 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <Link className="industry-card-link" to={slide.link}>
              <div className="industry-slide">
                <div className="industry-image">
                  <img src={slide.img} alt={`${slide.name} industry`} />
                </div>
                <h3 className="industry-name">{slide.name}</h3>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Industries;