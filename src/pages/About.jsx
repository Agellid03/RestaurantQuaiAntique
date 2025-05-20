import React from 'react';
import '../styles/about.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const About = () => {
  return (
    <section className="about-page">
      <div className="about-text">
        <h2>Notre histoire</h2>
        <p>
          Le Quai Antique est né de la passion du chef Arnaud Michant pour la
          cuisine traditionnelle revisitée. Niché au cœur de Paimpont, le
          restaurant marie charme rustique et élégance moderne. Chaque plat est
          une invitation à redécouvrir les saveurs françaises dans un cadre
          chaleureux.
        </p>
      </div>

      <div className="about-carrousel">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="carrousel"
        >
          <SwiperSlide>
            <img src="/images/restau.jpeg" alt="Salle du restaurant" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/restau1.jpeg" alt="Chef en cuisine" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/restau2.jpeg" alt="Plat signature" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/resto.jpg" alt="Plat signature" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default About;
