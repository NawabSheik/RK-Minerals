import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/Products.css';

// Import all product images
import Talc from "../assets/products/Talc L.png";
import SodiumFeldspar from "../assets/products/sodium-feldspar-grains.png";
import PotassiumFeldspar from "../assets/products/potassium-feldspar L.png";
import Wollastonite from "../assets/products/wollastonite L.png";
import Quartz from "../assets/products/quartz L.png";
import ChinaClay from "../assets/products/china clay L.png";
import BallClay from "../assets/products/ball clay L.png";
import LevigatedClay from "../assets/products/levigated-clay L.png";
import CalcinedClay from "../assets/products/calcined-clay L.png";

const products = [
  { name: "Talc", image: Talc, link: "/products/talc" },
  { name: "Sodium Feldspar", image: SodiumFeldspar, link: "/products/sodium-feldspar" },
  { name: "Potassium Feldspar", image: PotassiumFeldspar, link: "/products/potassium-feldspar" },
  { name: "Wollastonite", image: Wollastonite, link: "/products/wollastonite" },
  { name: "Quartz", image: Quartz, link: "/products/quartz" },
  { name: "China Clay", image: ChinaClay, link: "/products/china-clay" },
  { name: "Ball Clay", image: BallClay, link: "/products/ball-clay" },
  { name: "Levigated Clay", image: LevigatedClay, link: "/products/levigated-clay" },
  { name: "Calcined Clay", image: CalcinedClay, link: "/products/calcined-clay" },
];

const ProductsPage = () => {
  return (
    <div className="product-home">
      <h2 className='product-mobile-head'>OUR PRODUCTS</h2>
      <p className='product-home-para'>
        High-quality industrial minerals relied on by leading global manufacturers — ensured through in-house laboratories, continuous research and development, and consistent product excellence.
      </p>

      <div className="product-section">
        <Swiper
          slidesPerView={3}
          spaceBetween={20}
          speed={500}
          navigation={true}
          grabCursor={true}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1.25 },
            640: { slidesPerView: 1.75 },
            1024: { slidesPerView: 4 },
          }}
          modules={[Navigation]}
          className="mySwiper"
          style={{ transitionTimingFunction: "linear" }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
               <Link to={product.link}>
              <div className="product">
                <img src={product.image} alt={product.name} />
                <h1 className="product-name">
                 {product.name}
                </h1>
              </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProductsPage;
