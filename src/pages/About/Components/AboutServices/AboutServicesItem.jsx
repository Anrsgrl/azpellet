import React from "react";

const AboutServicesItem = (props) => {
  const { icon, text, link, lang } = props;
  return (
    <div
      aria-label={text}
      title={text}
      className="col-12 col-md-6 col-lg-3 services-item flex-column flex-md-row pt-4"
    >
      <span className="p-2" data-aos="fade-up">
        {icon}
      </span>
      <p
        data-aos="fade-up"
        className="pt-2 pt-md-0 m-0 ps-2 text-muted text-center"
      >
        {text}
        {lang === "aze" ? (
          <a
            className="ps-1"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1ibJycIGbE8pH0PT7CYLlni9cRl9WknoN/view?usp=sharing"
          >
            {" "}
            {link}{" "}
          </a>
        ) : (
          <a
            className="ps-1"
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1oIuejhn1eqvdaXQ2jsq1nvNh4tddCRPS/view?usp=share_link"
          >
            {link}{" "}
          </a>
        )}
      </p>
    </div>
  );
};

export default AboutServicesItem;
