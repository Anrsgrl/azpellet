import React from "react";
import { useTranslation } from "react-i18next";

const AboutServicesItem = ({ icon, text, link }) => {
  const { i18n } = useTranslation();

  return (
    <div
      className="col-12 col-md-6 col-lg-3 services-item flex-column flex-md-row pt-4"
      aria-label={text}
      title={text}
    >
      <span className="p-2" data-aos="fade-up">
        {icon}
      </span>
      <p
        className="pt-2 pt-md-0 m-0 ps-2 text-muted text-center"
        data-aos="fade-up"
      >
        {text}
        <a
          className="ps-1"
          aria-label="Certificate link"
          title="Certificate link"
          target="_blank"
          rel="noreferrer"
          href={
            i18n.language === "aze"
              ? "https://drive.google.com/file/d/1ibJycIGbE8pH0PT7CYLlni9cRl9WknoN/view?usp=sharing"
              : "https://drive.google.com/file/d/1oIuejhn1eqvdaXQ2jsq1nvNh4tddCRPS/view?usp=share_link"
          }
        >
          {link}
        </a>
      </p>
    </div>
  );
};

export default AboutServicesItem;
