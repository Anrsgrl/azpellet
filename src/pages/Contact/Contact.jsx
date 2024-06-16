import React, { useState } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { useTranslation } from "react-i18next";
import { yupResolver } from "@hookform/resolvers/yup";
import { getSchema } from "../../schema/schema";

const Contact = () => {
  const { t } = useTranslation();
  const schema = getSchema(t);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);

  const onSubmit = () => {
    setLoading(true);

    emailjs
      .sendForm(
        "service_59rni3m",
        "template_fnauhp9",
        document.querySelector("form"),
        "BK44KEKY-acwTlRTN"
      )
      .then(
        () => {
          reset();
          setLoading(false);
          setToast(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact container">
      <form className="py-5" onSubmit={handleSubmit(onSubmit)}>
        <h3 data-aos="zoom-in" className="content-title">
          {t("ContactH")}
        </h3>
        <div className="row form-part">
          <div data-aos="fade-left" className="col-12 col-md-6 mb-3">
            <input
              title={t("PH1")}
              aria-label={t("PH1")}
              className={`form-item form-control ${
                errors.user_name ? "is-invalid" : ""
              }`}
              type="text"
              placeholder={t("PH1")}
              {...register("user_name")}
            />
            {errors.user_name && (
              <div className="invalid-feedback">
                {t(errors.user_name.message)}
              </div>
            )}
          </div>
          <div data-aos="fade-left" className="col-12 col-md-6 mb-3">
            <input
              title={t("PH2")}
              aria-label={t("PH2")}
              className={`form-item form-control ${
                errors.user_email ? "is-invalid" : ""
              }`}
              type="email"
              placeholder={t("PH2")}
              {...register("user_email")}
            />
            {errors.user_email && (
              <div className="invalid-feedback">
                {t(errors.user_email.message)}
              </div>
            )}
          </div>
          <div data-aos="fade-left" className="col-12 mb-3">
            <input
              title={t("PH3")}
              aria-label={t("PH3")}
              className={`form-item form-control ${
                errors.subject ? "is-invalid" : ""
              }`}
              type="text"
              placeholder={t("PH3")}
              {...register("subject")}
            />
            {errors.subject && (
              <div className="invalid-feedback">
                {t(errors.subject.message)}
              </div>
            )}
          </div>
          <div data-aos="fade-left" className="col-12 mb-3">
            <textarea
              className={`form-item form-control ${
                errors.message ? "is-invalid" : ""
              }`}
              style={{ height: "165px" }}
              name="message"
              cols="30"
              rows="10"
              placeholder={t("PH4")}
              title={t("PH4")}
              aria-label={t("PH4")}
              {...register("message")}
            ></textarea>
            {errors.message && (
              <div className="invalid-feedback">
                {t(errors.message.message)}
              </div>
            )}
          </div>
          <div className="col-12">
            {!toast ? (
              <button
                type="submit"
                aria-label={t("Button")}
                title={t("Button")}
                data-aos="fade-up"
                className="contact-button btn btn-primary"
              >
                {t("Button")}
                {loading && (
                  <div className="spinner-border ms-1" role="status">
                    <span className="sr-only"></span>
                  </div>
                )}
              </button>
            ) : (
              <span
                title={t("Sent")}
                aria-label={t("Sent")}
                data-aos="fade-up"
                className="text-success"
              >
                {t("Sent")}
              </span>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
