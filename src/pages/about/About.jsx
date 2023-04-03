import "./about.scss";
import { useState, useEffect } from "react";
import jumping from "./../../img/jumping.png";
import Title from "../../conponents/title/Title";
import choose1 from "./../../img/choose1.png";
import choose2 from "./../../img/choose2.png";
import choose3 from "./../../img/choose3.png";
import choose4 from "./../../img/choose4.png";
import AboutText from "../../conponents/AboutText";

function About() {
  const [showElement, setShowElement] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1000) {
        setShowElement(true);
      } else {
        setShowElement(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <section className="about container">
        <Title name={"Про наш клуб"} className="about__title" />
        <div className="about__box">
          <img src={jumping} alt="jumping horse" className="about__img" />

          <div className="about__info">
            <div className="about__facts facts">
              <div>
                <span className="facts__numb">1100+</span>
                <p className="facts__text">
                  Задоволених відвідувачів за останній рік
                </p>
              </div>

              <div>
                <span className="facts__numb">50+</span>
                <p className="facts__text">Проведених заходів за 6 місяців</p>
              </div>

              <div>
                {" "}
                <span className="facts__numb">20+</span>
                <p className="facts__text">
                  Випущених професійних спортсменів за 1 рік
                </p>
              </div>

              <div>
                <span className="facts__numb">15+</span>
                <p className="facts__text">
                  Регулярних занять на тиждень із професійними наставниками
                </p>
              </div>
            </div>
            {showElement && <AboutText />}
          </div>
        </div>
        {!showElement && <AboutText />}
      </section>

      <section className="choose container">
        <Title name={"Чому нас обирають"} className="choose__title" />

        <div className="choose__box">
          <div className="choose__item">
            <div className="choose__img-box">
              <img src={choose1} alt="navigation" className="choose__img" />
            </div>

            <div className="choose__text-box">
              <h4 className="choose__title">Зручне розташування</h4>
              <p className="choose__text">
                Ми знаходимось недалеко від Селекційного інституту / Аеропорт
                для вашої зручності
              </p>
            </div>
          </div>
          <div className="choose__item">
            <div className="choose__img-box">
              <img src={choose2} alt="table" className="choose__img  " />
            </div>

            <div className="choose__text-box">
              <h4 className="choose__title">Затишна обідня зона</h4>
              <p className="choose__text">
                Є їдальня, щоб Ви могли перекусити та трохи відпочити.
                Безкоштовно чай, кава, печіво
              </p>
            </div>
          </div>
          <div className="choose__item">
            <div className="choose__img-box">
              <img src={choose3} alt="clock" className="choose__img " />
            </div>

            <div className="choose__text-box">
              <h4 className="choose__title">Професійні тренери</h4>

              <p className="choose__text">
                Наші викладачі мають нагороди у кінному спорті, та відмінні
                відгуки серед наших учнів
              </p>
            </div>
          </div>
          <div className="choose__item">
            <div className="choose__img-box">
              <img
                src={choose4}
                alt="car"
                className="choose__img choose__img_big"
              />
            </div>

            <div className="choose__text-box">
              <h4 className="choose__title">Безкоштовне паркування</h4>
              <p className="choose__text">
                У нас є просторе паркування, щоб ви могли без проблем
                припаркувати свій автомобіль
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
