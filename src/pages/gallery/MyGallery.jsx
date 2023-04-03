import React, { useState } from "react";
import "./myGallery.scss";
import viz1 from "./../../img/viz1.png";
import viz2 from "./../../img/viz2.png";
import viz3 from "./../../img/viz3.png";
import viz4 from "./../../img/viz4.png";
import viz5 from "./../../img/viz5.png";
import viz6 from "./../../img/viz6.png";
import viz7 from "./../../img/viz7.png";
import viz8 from "./../../img/viz8.png";
import viz9 from "./../../img/viz9.png";
import viz10 from "./../../img/viz10.png";
import viz11 from "./../../img/viz11.png";
import viz12 from "./../../img/viz12.png";
import viz13 from "./../../img/viz13.png";
import Button from "../../conponents/button/Button";

const MyGallery = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImageSrc, setModalImageSrc] = useState("");
  const [seeMore, setSeeMore] = useState(false);
  const [hiden, setHiden] = useState(false);

  const btnStyles = {
    display: "block",
    margin: "3% auto",
  };

  const handleImageClick = (src) => {
    setModalImageSrc(src);
    setShowModal(true);
  };

  const see = () => {
    setSeeMore(true);
    setHiden(true);
  };

  const hidenn = () => {
    setSeeMore(false);
    setHiden(false);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <section className="gallery">
      <h2 className="gallery__title title">Наші відвідувачі</h2>
      <div className="gallery__box">
        <div className="gallery__wrap">
          <div className="gallery__img gallery__img_big" id="img-big">
            <img
              className="gallery__p"
              src={viz1}
              alt="vizitor"
              onClick={() => handleImageClick(viz1)}
            />
          </div>

          <div className="gallery__img" id="img-2">
            <img
              className="gallery__p"
              src={viz2}
              alt="vizitor"
              onClick={() => handleImageClick(viz2)}
            />
          </div>

          <div className="gallery__img" id="img-2">
            <img
              className="gallery__p"
              src={viz3}
              alt="vizitor"
              onClick={() => handleImageClick(viz3)}
            />
          </div>

          <div className="gallery__img" id="img-2">
            <img
              className="gallery__p"
              src={viz4}
              alt="vizitor"
              onClick={() => handleImageClick(viz4)}
            />
          </div>

          <div className="gallery__img" id="img-2">
            <img
              className="gallery__p"
              src={viz5}
              alt="vizitor"
              onClick={() => handleImageClick(viz5)}
            />
          </div>
        </div>

        <div className="gallery__wrap">
          <div className="gallery__img" id="img-2">
            <img
              className="gallery__p"
              src={viz6}
              alt="vizitor"
              onClick={() => handleImageClick(viz6)}
            />
          </div>

          <div className="gallery__img" id="img-2">
            <img
              className="gallery__p"
              src={viz7}
              alt="vizitor"
              onClick={() => handleImageClick(viz7)}
            />
          </div>

          <div className="gallery__img" id="img-2">
            <img
              className="gallery__p"
              src={viz8}
              alt="vizitor"
              onClick={() => handleImageClick(viz8)}
            />
          </div>

          <div className="gallery__img" id="img-2">
            <img
              className="gallery__p"
              src={viz9}
              alt="vizitor"
              onClick={() => handleImageClick(viz9)}
            />
          </div>

          <div className="gallery__img" id="img-2">
            <img
              className="gallery__p"
              src={viz10}
              alt="vizitor"
              onClick={() => handleImageClick(viz10)}
            />
          </div>
        </div>

        {!seeMore && (
          <Button funk={() => see()} title="Більше фото" styles={btnStyles} />
        )}

        {seeMore && (
          <div className="more gallery__wrap">
            <div className="gallery__img" id="img-2">
              <img
                className="gallery__p"
                src={viz11}
                alt="vizitor"
                onClick={() => handleImageClick(viz11)}
              />
            </div>

            <div className="gallery__img" id="img-2">
              <img
                className="gallery__p"
                src={viz12}
                alt="vizitor"
                onClick={() => handleImageClick(viz12)}
              />
            </div>

            <div className="gallery__img" id="img-2">
              <img
                className="gallery__p"
                src={viz13}
                alt="vizitor"
                onClick={() => handleImageClick(viz13)}
              />
            </div>

            <div className="gallery__img" id="img-2">
              <img
                className="gallery__p"
                src={viz5}
                alt="vizitor"
                onClick={() => handleImageClick(viz5)}
              />
            </div>
            <div className="gallery__img" id="img-2">
              <img
                className="gallery__p"
                src={viz3}
                alt="vizitor"
                onClick={() => handleImageClick(viz3)}
              />
            </div>
          </div>
        )}

        {hiden && (
          <Button funk={() => hidenn()} title="Сховати" styles={btnStyles} />
        )}
      </div>

      {showModal && (
        <div className="gallery__modal modal">
          <div
            id="modal_background"
            className="modal__background"
            onClick={closeModal}
          >
            <span className="modal__closebtn" id="modal_close">
              ✖
            </span>
            <img
              id="modal_content"
              className="modal__content"
              alt="modal picture"
              src={modalImageSrc}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default MyGallery;
