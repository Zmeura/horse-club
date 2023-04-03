import Button from "../../conponents/button/Button";
import "./form_sect.scss";
import el from "./../../img/el.png";
import { useFormik } from "formik";
import React, { useState } from "react";
import girl_with_horse from "./../../img/girl_with_horse.png";
import clouds_form from "./../../img/clouds_form.png";

function Form_sect() {
  const btnStyles = {
    width: "90%",
    display: "block",
    height: "60px",
    margin: "auto",
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      consent: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validate: (values) => {
      const errors = {};
      if (!/^[a-zA-ZА-Яа-яёЁ ]+$/u.test(values.name)) {
        errors.name = "Введено некоректні символи";
      }
      if (!/^\+380\d{9}$/.test(values.phone)) {
        errors.phone = "Введіть коректний номер телефону";
      }
      if (!values.consent) {
        errors.consent = "Підтвердіть згоду";
      }
      return errors;
    },
  });

  return (
    <div className="form-s">
      <form className="form" onSubmit={formik.handleSubmit}>
        <h3 className="form__title ">Відповідаємо на запитання</h3>
        <p className="form__text">
          Ми відповімо на всі ваші запитання по телефону, або ви можете
          записатися на безкоштовне пробне заняття
        </p>

        <div className="form__box">
          <input
            className={`form__inp${
              formik.errors.name ? " form__inp--error" : ""
            }`}
            type="text"
            placeholder="Ваше ім'я"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
          />
          {formik.errors.name && (
            <div className="form__error">{formik.errors.name}</div>
          )}
        </div>

        <div className="form__box">
          <input
            className={`form__inp${
              formik.errors.phone ? " form__inp--error" : ""
            }`}
            type="tel"
            placeholder="+380 Номер телефону"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
          {formik.errors.phone && (
            <div className="form__error">{formik.errors.phone}</div>
          )}
        </div>

        <Button styles={btnStyles} />

        <div className="form__box">
          <label className="form__label" htmlFor="check">
            <input
              className="form__check"
              type="checkbox"
              id="check"
              name="consent"
              onChange={formik.handleChange}
              checked={formik.values.consent}
            />
            Даю згоду на обробку даних
            <div
              className={`custom-check-icon ${
                formik.errors.consent
                  ? " form__inp--error"
                  : "custom-check-icon"
              }`}
            ></div>
          </label>

          {formik.errors.consent && (
            <div className="form__error">{formik.errors.consent}</div>
          )}
        </div>
      </form>
      <img className="form-s__tree" src={el} alt="tree" />
      <img className="form-s__clouds" src={clouds_form} alt="clouds" />
      <img className="form-s__girl" src={girl_with_horse} alt="girl" />
    </div>
  );
}

export default Form_sect;
