import React from 'react'
import './certificates.css'
import certificate from '../../assets/certificate.png'
import react from '../../assets/React_JS.jpg'
import js from '../../assets/JS.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle'
import 'swiper/css/autoplay'
// Also import Swiper modules if you are using them
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
function Certificates() {

  return (
    <section id='certificates'>
      <h5>My Achievement</h5>
      <h2>Certificates</h2>
      <Swiper className="container certificates__container"
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      // scrollbar={{ draggable: true }}
      >
        <SwiperSlide id='certificate'>
          <div className="images__certi">
            <img src={react} alt="" />
            
          </div>

        </SwiperSlide>
        <SwiperSlide id='certificate'>
          <div className="images__certi">
            <img src={certificate} alt="" />
            
          </div>
          
        </SwiperSlide>
        <SwiperSlide id='certificate'>
          <div className="images__certi">
            <img src={js} alt="" />
           
          </div>

        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Certificates;