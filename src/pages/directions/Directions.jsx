import Title from "../../conponents/title/Title";
import "./directions.scss";
import direct1 from "./../../img/direct1.png";
import direct2 from "./../../img/direct2.png";
import direct3 from "./../../img/direct3.png";
import direct4 from "./../../img/direct4.png";
import direct5 from "./../../img/direct5.png";
import direct6 from "./../../img/direct6.png";
import horse_boy from "./../../img/horse_boy.png";
import horse_girl from "./../../img/horse_girl.png";
import clouds from "./../../img/clouds.png";
import Button from "../../conponents/button/Button";

function Directions() {
  const styles = {
    margin: "4% auto 15%",
    display: "block",
  };

  return (
    <section className="directions ">
      <Title name={"Напрями клубу"} className="directions__title" />
      <div className="directions__card-box container">
        <div className="directions__card directions__card_first">
          <div className="directions__img-box">
            <img src={direct1} alt="horse" className="directions__img" />
          </div>
          <h4 className="directions__subtitle">Уроки верхової їзди</h4>
          <p className="directions__text">
            Уроки професійної верхової їзди для любителів та початківців
          </p>
        </div>

        <div className="directions__card ">
          <img src={direct2} alt="horse" className="directions__img" />
          <h4 className="directions__subtitle">Прогулянки верхи з тренером</h4>
          <p className="directions__text">
            Тренування клієнтів, підготовка до занять кінним спортом на
            професійному рівні під керівництвом досвідчених тенерів
          </p>
        </div>

        <div className="directions__card">
          <img src={direct3} alt="horse" className="directions__img" />
          <h4 className="directions__subtitle">Фотосесії</h4>
          <p className="directions__text">
            Уроки професійної верхової їзди для любителів та початківців
          </p>
        </div>

        <div className="directions__card">
          <img src={direct4} alt="horse" className="directions__img" />
          <h4 className="directions__subtitle">Прогулянки верхи з тренером</h4>
          <p className="directions__text">
            Тренування клієнтів, підготовка до занять кінним спортом на
            професійному рівні під керівництвом досвідчених тенерів
          </p>
        </div>

        <div className="directions__card directions__card_end">
          <img src={direct5} alt="horse" className="directions__img" />
          <h4 className="directions__subtitle">Фотосесії</h4>
          <p className="directions__text">
            Уроки професійної верхової їзди для любителів та початківців
          </p>
        </div>

        <div className="directions__card">
          <img src={direct6} alt="horse" className="directions__img" />
          <h4 className="directions__subtitle">Прогулянки верхи з тренером</h4>
          <p className="directions__text">
            Тренування клієнтів, підготовка до занять кінним спортом на
            професійному рівні під керівництвом досвідчених тенерів
          </p>
        </div>
      </div>

      <div>
        <Button styles={styles} />
      </div>

      <img src={clouds} alt="" className="clouds" />
      <img className="directions__horse boy" src={horse_boy} />

      <img className="directions__horse girl" src={horse_girl} />
    </section>
  );
}

export default Directions;
