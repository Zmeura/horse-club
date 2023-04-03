import "./contacts.scss";
import map_tree from "./../../img/map_tree.png";
import map_tree2 from "./../../img/map_tree2.png";
import Title from "../../conponents/title/Title";
import pin from "./../../img/svg/pin.svg";
import tel from "./../../img/svg/tel.svg";
import mail from "./../../img/svg/mail.svg";
import clock from "./../../img/svg/clock.svg";

function Contacts() {
  return (
    <section className="contacts">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31101.59203405373!2d30.656166591165963!3d46.44833385475965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c6320a1688f4a5%3A0xfb886ceaf3793d38!2z0KHRgtC10YLRgdC-0L0!5e0!3m2!1sru!2s!4v1680182866696!5m2!1sru!2s"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="contacts__info">
        <Title name={"Контакти"} />
        <div className="contacts__item-box">
          <p className="contacts__item">
            <img src={pin} alt="icon" className="contacts__icon" />
            <a
              className="contacts__adress"
              href="https://www.google.com/maps?ll=46.452688,30.676594&z=13&t=m&hl=ru&gl=US&mapclient=embed&cid=18124856456715517240"
            >
              Одеса, Овідіопольська дорога, 8
            </a>
          </p>

          <p className="contacts__item">
            <img src={tel} alt="icon" className="contacts__icon" />
            <a href="tel:+380487896496">Тел.: +380 48 789-64-96</a>
          </p>

          <p className="contacts__item">
            <img src={mail} alt="icon" className="contacts__icon" />
            <a href="mailto:stetson@stetson.com.ua">stetson@stetson.com.ua</a>
          </p>

          <p className="contacts__item">
            <img src={clock} alt="icon" className="contacts__icon" />
            Щодня 10:00–19:00
          </p>
        </div>
      </div>

      <img
        className="contacts__tree contacts__tree_1"
        src={map_tree}
        alt="tree"
      />
      <img
        className="contacts__tree contacts__tree_2"
        src={map_tree2}
        alt="tree"
      />
    </section>
  );
}

export default Contacts;
