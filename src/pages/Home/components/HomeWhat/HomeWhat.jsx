import React from "react";
import Whatimg from "../../../../assets/images/aboutwhat.webp";
import "./HomeWhat.scss";
import { useTranslation } from "react-i18next";

const AboutWhat = () => {
  const { t } = useTranslation();
  return (
    <div className="what-is py-5">
      <div className="row">
        <div data-aos="fade-right" className="col-12 col-md-6">
          <img src={Whatimg} alt="what-img" />
        </div>
        <div className="col-12 col-md-6 py-3">
          <h2 data-aos="fade-left">{t("WhatH")}</h2>
          <p className="text-muted" data-aos="fade-left">
            {t("WhatP")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutWhat;
