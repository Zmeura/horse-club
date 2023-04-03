// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper";

import "./slider.scss";

import { horsesList } from "../../data/horses-list";

export default function Slider() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        slidesPerView={3}
        spaceBetween={1}
        centeredSlides={true}
        // autoplay={{
        //   delay: 5000,
        //   disableOnInteraction: false,
        // }}
        speed={800}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          1400: {
            slidesPerView: 3,
          },

          1800: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Navigation, Autoplay, EffectCoverflow]}
        className="mySwiper"
      >
        {horsesList.map((horse) => (
          <SwiperSlide className="card" key={horse.id}>
            <h3 className="card__title">{horse.name}</h3>
            <img
              src={Object.values(horse.photo)[0]}
              alt="horse"
              className="card__img"
            />
            <p className="card__text">
              Уроки професійної верхової їзди для любителів та початківців
            </p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
