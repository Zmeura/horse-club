import "./header.scss";
import logo from "./../../img/logo.png";
import React, { useState, useEffect } from "react";

function Header() {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY >= 1) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  const headerStyle = {
    background: scroll ? "rgb(196, 235, 242) 100%" : "none",
    boxShadow: scroll ? "0px 1px 5px 0px rgb(0 0 0 / 75%)" : "none",
  };

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header" style={headerStyle}>
      <div className="header__panel container">
        <div className="logo-header">
          <img src={logo} alt="logo" className="logo-box-logo logo" />
          <h3>Stetson</h3>
        </div>

        <nav className={`nav ${isActive ? "active" : ""}`}>
          <ul className="list">
            <li className="list__item">
              <a href="#" className="list__link">
                Про нас{" "}
              </a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">
                {" "}
                Послуги та ціни
              </a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">
                Фотоальбом{" "}
              </a>
            </li>
            <li className="list__item">
              <a href="#" className="list__link">
                Контакти
              </a>
            </li>
          </ul>
          <span
            className={`nav__close ${isActive ? "active" : ""}`}
            onClick={handleClick}
          ></span>
        </nav>

        <div className="header__burger burger" onClick={handleClick}>
          <div className={`burger__box ${isActive ? "active" : ""}`}>
            <span></span>
            Меню
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
