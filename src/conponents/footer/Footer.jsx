import footer from "./footer.scss";
import logo_yellow from "./../../img/logo_yellow.png";
import Social from "../social/Social";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__box container">
        <div className="logo-footer">
          <img src={logo_yellow} alt="logo" className="logo-box_logo logo" />
          <h3>Stetson</h3>
        </div>

        <Social />
      </div>
    </footer>
  );
}

export default Footer;
