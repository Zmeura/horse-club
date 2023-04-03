// import Slider from "../../conponents/slider/Slider";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./horses.scss";
import Title from "../../conponents/title/Title";
import { horsesList } from "../../data/horses-list";

function Horses() {
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
    <section className="horses container ">
      <Title name="Наші коні" />
      {/* <Slider /> */}

      <Slider {...settings}>
        {horsesList.map((horse) => (
          <div key={horse.id}>
            <div className="card">
              <h3 className="card__title">{horse.name}</h3>
              <img
                src={Object.values(horse.photo)[0]}
                alt="horse"
                className="card__img"
              />
              <p className="card__text">
                Уроки професійної верхової їзди для любителів та початківців
              </p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}

export default Horses;
