import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.scss";
import { useTranslation } from "react-i18next";
import { MdDoDisturbOn } from "react-icons/md";

const Contact = ({ form }) => {
  const { t } = useTranslation();
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [error, setError] = useState(false);

  const message = useRef();
  const subject = useRef();
  const email = useRef();
  const name = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(form.current);
    const fromName = formData.get("from_name");
    const fromEmail = formData.get("from_email");
    const fromSubject = formData.get("from_subject");
    const message = formData.get("message");

    if (!fromName || !fromEmail || !fromSubject || !message) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    emailjs
      .sendForm(
        "service_59rni3m",
        "template_fnauhp9",
        form.current,
        "BK44KEKY-acwTlRTN"
      )
      .then(
        () => {
          console.log("sent");
          message.current.value = "";
          email.current.value = "";
          name.current.value = "";
          subject.current.value = "";
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
      <form className="py-5" ref={form} onSubmit={sendEmail}>
        <h3 data-aos="zoom-in" className="content-title">
          {t("ContactH")}
        </h3>
        <div className="row form-part">
          <div data-aos="fade-left" className="col-12 col-md-6">
            <input
              title={t("PH1")}
              aria-label={t("PH1")}
              ref={name}
              className="form-item"
              type="text"
              placeholder={t("PH1")}
              name="user_name"
              required
            />
          </div>
          <div data-aos="fade-left" className="col-12 col-md-6">
            <input
              title={t("PH2")}
              aria-label={t("PH2")}
              ref={email}
              className="form-item"
              type="email"
              placeholder={t("PH2")}
              name="user_email"
              required
            />
          </div>
          <div data-aos="fade-left" className="col-12">
            <input
              title={t("PH3")}
              aria-label={t("PH3")}
              ref={subject}
              className="form-item"
              type="text"
              placeholder={t("PH3")}
              name="subject"
              required
            />
          </div>
          <div data-aos="fade-left" className="col-12">
            <textarea
              ref={message}
              className="form-item"
              style={{ height: "165px" }}
              name="message"
              cols="30"
              rows="10"
              placeholder={t("PH4")}
              title={t("PH4")}
              aria-label={t("PH4")}
              required
            ></textarea>
          </div>
          <div className="col-12">
            {!loading && error && (
              <div
                title={t("Danger")}
                aria-label={t("Danger")}
                className="col-12 danger mb-2"
              >
                <MdDoDisturbOn className="me-1" />
                {t("Danger")}
              </div>
            )}
            {!toast ? (
              <button
                type="button"
                aria-label={t("Button")}
                title={t("Button")}
                data-aos="fade-up"
                className="contact-button"
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
          <input
            title="made by github/Anrsgrl"
            aria-label="made by github/Anrsgrl"
            type="hidden"
            name="made by github/Anrsgrl"
          />
        </div>
      </form>
    </div>
  );
};

export default Contact;
