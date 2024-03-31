import React from "react";
import "./Hero.scss";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="container text-center">
          <h1 title={t("HeroH")} aria-label={t("HeroH")}>
            {t("HeroH")}
          </h1>
          <p title={t("HeroP")} aria-label={t("HeroP")}>
            {t("HeroP")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
