import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./clientsTalk.scss";

import autor1 from "./../../img/autor-1.png";
import autor2 from "./../../img/autor-2.png";
import autor3 from "./../../img/autor-3.png";
import autor4 from "./../../img/autor-4.jpg";
import autor5 from "./../../img/autor-5.jpg";
import autor6 from "./../../img/autor-6.jpg";

import Title from "../../conponents/title/Title";

function ClientTalk() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 4000,

    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="clients container">
      <Title name="Про нас говорять клієнти" />

      <Slider {...settings}>
        <div>
          <div className="clients-card">
            <p className="clients-card__text">
              Розвиває силу, гнучкість та координацію вершника; Випрямляється
              постава і підвищується стресостійкість; Спілкування з конем лікує
              розумові відхилення.
            </p>
            <div className="clients-card__box">
              <img className="clients-card__img" src={autor5} alt="" />
              <h2>Анжела Джоуль</h2>
            </div>
          </div>
        </div>

        <div>
          <div className="clients-card">
            <p className="clients-card__text">
              Позитивні емоції, розслаблення, почуття відповідальності і навіть
              деякої казковості, одразу з'являється гарна постава, працюють усі
              групи м'язів.
            </p>

            <div className="clients-card__box">
              <img className="clients-card__img" src={autor1} alt="" />
              <h2>Костянтин Туман</h2>
            </div>
          </div>
        </div>

        <div>
          <div className="clients-card">
            <p className="clients-card__text">
              Реакція, спілкування з твариною, любов, розуміння, порозуміння,
              терпіння, тут можна перераховувати та перераховувати дуже багато
              всього!
            </p>

            <div className="clients-card__box">
              <img className="clients-card__img" src={autor2} alt="" />
              <h2>Олена Даль</h2>
            </div>
          </div>
        </div>

        <div>
          <div className="clients-card">
            <p className="clients-card__text">
              Позитивні емоції, розслаблення, почуття відповідальності і навіть
              деякої казковості, одразу з'являється гарна постава, працюють усі
              групи м'язів.
            </p>

            <div className="clients-card__box">
              <img className="clients-card__img" src={autor3} alt="" />
              <h2>Вероніка Святкова</h2>
            </div>
          </div>
        </div>

        <div>
          <div className="clients-card">
            <p className="clients-card__text">
              Розвиває силу, гнучкість та координацію вершника; Випрямляється
              постава і підвищується стресостійкість; Спілкування з конем лікує
              розумові відхилення.
            </p>

            <div className="clients-card__box">
              <img className="clients-card__img" src={autor4} alt="" />
              <h2>Євген Мом</h2>
            </div>
          </div>
        </div>

        <div>
          <div className="clients-card">
            <p className="clients-card__text">
              Розвиває силу, гнучкість та координацію вершника; Випрямляється
              постава і підвищується стресостійкість; Спілкування з конем лікує
              розумові відхилення.
            </p>

            <div className="clients-card__box">
              <img className="clients-card__img" src={autor6} alt="" />
              <h2>Світлана Бобер</h2>
            </div>
          </div>
        </div>
      </Slider>

      {/* <Swiper
        effect={"coverflow"}
        slidesPerView={3}
        spaceBetween={15}
        centeredSlides={true}
        speed={800}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          1400: {
            slidesPerView: 2,
          },

          1400: {
            slidesPerView: 2,
          },

          1800: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="clients-card">
          <p className="clients-card__text">
            Розвиває силу, гнучкість та координацію вершника; Випрямляється
            постава і підвищується стресостійкість; Спілкування з конем лікує
            розумові відхилення.
          </p>

          <div className="clients-card__box">
            <img className="clients-card__img" src={autor5} alt="" />
            <h2>Анжела Джоуль</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="clients-card">
          <p className="clients-card__text">
            Позитивні емоції, розслаблення, почуття відповідальності і навіть
            деякої казковості, одразу з'являється гарна постава, працюють усі
            групи м'язів.
          </p>

          <div className="clients-card__box">
            <img className="clients-card__img" src={autor1} alt="" />
            <h2>Костянтин Туман</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="clients-card">
          <p className="clients-card__text">
            Реакція, спілкування з твариною, любов, розуміння, порозуміння,
            терпіння, тут можна перераховувати та перераховувати дуже багато
            всього!
          </p>

          <div className="clients-card__box">
            <img className="clients-card__img" src={autor2} alt="" />
            <h2>Олена Даль</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="clients-card">
          <p className="clients-card__text">
            Позитивні емоції, розслаблення, почуття відповідальності і навіть
            деякої казковості, одразу з'являється гарна постава, працюють усі
            групи м'язів.
          </p>

          <div className="clients-card__box">
            <img className="clients-card__img" src={autor3} alt="" />
            <h2>Вероніка Святкова</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="clients-card">
          <p className="clients-card__text">
            Розвиває силу, гнучкість та координацію вершника; Випрямляється
            постава і підвищується стресостійкість; Спілкування з конем лікує
            розумові відхилення.
          </p>

          <div className="clients-card__box">
            <img className="clients-card__img" src={autor4} alt="" />
            <h2>Євген Мом</h2>
          </div>
        </SwiperSlide>

        <SwiperSlide className="clients-card">
          <p className="clients-card__text">
            Розвиває силу, гнучкість та координацію вершника; Випрямляється
            постава і підвищується стресостійкість; Спілкування з конем лікує
            розумові відхилення.
          </p>

          <div className="clients-card__box">
            <img className="clients-card__img" src={autor6} alt="" />
            <h2>Світлана Бобер</h2>
          </div>
        </SwiperSlide>
      </Swiper> */}
    </section>
  );
}

export default ClientTalk;
