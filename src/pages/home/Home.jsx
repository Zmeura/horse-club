import Button from "../../conponents/button/Button";
import "./home.scss";
import clouds from "./../../img/main_clouds.png";
import main_left_tree from "./../../img/main_left_tree.png";
import main_right_tree from "./../../img/main_right_tree.png";
import little_horse from "./../../img/little_horse.png";
import big_horse from "./../../img/big_horse.png";
import ambar from "./../../img/ambar.png";
import seagulls from "./../../img/seagulls.png";

function Home() {
  return (
    <div className="main-page container">
      <div className="main-page__box">
        <h1 className="main-page__title">
          Пориньте у світ коней разом із нами
        </h1>
        <p className="main-page__text">
          Уроки верхової їзди, фотосесії та заходи у приватному кінному клубі
          <span className="main-page__logo"> Stetson</span> м.Одеса
        </p>
        <Button />
      </div>
      <img className="main-page__clouds" src={clouds} alt="clouds" />

      <img className="main-page__big-horse" src={big_horse} alt="horse" />
      <img
        className="main-page__tree main-page__tree_2"
        src={main_right_tree}
        alt="tree"
      />
      <img
        className="main-page__tree main-page__tree_1"
        src={main_left_tree}
        alt="tree"
      />

      <img className="main-page__seagulls" src={seagulls} alt="seagulls" />
    </div>
  );
}

export default Home;
