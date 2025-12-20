import React from 'react'
import "../styles/Team.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import Leader1 from "../assets/leaders/leader1.png";
import Leader2 from "../assets/leaders/leader2.png";
import Leader3 from "../assets/leaders/leader3.png";
import Leader4 from "../assets/leaders/leader4.png";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const Team = () => {
  return (
    <div className='team-section'>
      <h2 className='team-head'>Our Leadership Team</h2>

      <Swiper navigation={true} modules={[Navigation]} className="teamSwiper" slidesPerView={1} loop={true}>
        <SwiperSlide>
          <div className='team-slide'>
            <img src={Leader1} className='team-lead-img'/>
            <div className='team-lead-right'>
              <h2 className='team-lead-name'>Mr. Sanjay Jain</h2>
              <h3 className='team-lead-position'>Owner at RK Minerals</h3>
              <p className="team-lead-para">
              Every empire needs a sturdy foundation to stand strong and still
              for a longer period, so he is the foundation of our organization.
              He is bestowed with an experience of more than a decade in this
              line of trade, which gives him the confidence to conclude the
              needs of our clients in a finer manner. He understands the quality
              and technical background of every material, which in a way
              makes RK Mineral a more progressive entity.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-slide'>
            <img src={Leader2} className='team-lead-img'/>
            <div className='team-lead-right'>
              <h2 className='team-lead-name'>Mr. Akshay Jain</h2>
              <h3 className='team-lead-position'>Export Manager</h3>
              <p className="team-lead-para">
              A young and energetic youth with a thrive to take the business to
              greater heights and purposeful in meeting the targets. Being a
              Chartered Accountant by profession, he is always calculative and
              result oriented. He has a good experience in management and
              negotiation with the ability to build sustainable and fair business
              relationships. He always aims in improving the national and
              international expansions and optimization.
              </p>
            </div>
          </div>
        </SwiperSlide>
        
        <SwiperSlide>
          <div className='team-slide'>
            <img src={Leader4} className='team-lead-img'/>
            <div className='team-lead-right'>
              <h2 className='team-lead-name'>Mrs. Payas Jain</h2>
              <h3 className='team-lead-position'>Manager - Export Sales</h3>
              <p className="team-lead-para">
              A highly motivated and confident professional, focused to grow
              the business at major centers of this industry. Payas jain is
              Chartered Accountant and has worked with a CA firm and a
              renowned MNC named as DHL International in the field of
              Finance, accounting and Banking. With this passion and zeal for
              acquiring new business, she is always aggressive in realizing
              credible clients in new markets. 
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='team-slide'>
            <img src={Leader3} className='team-lead-img'/>
            <div className='team-lead-right'>
              <h2 className='team-lead-name'>Mr. R Vineeth</h2>
              <h3 className='team-lead-position'>Business Advisor South East Asia Region</h3>
              <p className="team-lead-para">
              R.Vineeth, completed the CFAB ( Certificate of Finance,
              Accounting and Business) In the past, he served in multiple
              finance related roles within renowned multinational organisations
              notably BDO (Public Accounting, Tax and Advisory) and
              Schlumberger (Energy). Presently, he personally owns and
              manages multiple registered business entities in his homeland,
              Malaysia. 
              </p>
            </div>
          </div>
        </SwiperSlide>
      
      </Swiper>
    </div>
  )
}

export default Team
