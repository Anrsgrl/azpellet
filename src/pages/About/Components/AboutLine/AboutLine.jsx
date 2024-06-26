import React from "react";
import "./AboutLine.scss";
import pelletcover from "../../../../assets/images/pelletcover.webp";
import AboutLineItem from "./AboutLineItem";
import { useTranslation } from "react-i18next";
import ModalPhoto from "../../../../components/ModalPhoto/ModalPhoto";

const AboutLine = () => {
  const { t } = useTranslation();

  const aboutLine = [
    {
      title: t("LineInfo1"),
      content: "6mm",
    },
    {
      title: t("LineInfo2"),
      content: "200-300mm",
    },
    {
      title: t("LineInfo3"),
      content: t("LineInfo5"),
    },
    {
      title: t("LineInfo4"),
      content: "0.63%",
    },
  ];
  return (
    <div className="about-line my-4">
      <div className="line-content  py-5">
        <div className="container">
          <div className="row">
            <div data-aos="fade-right" className="col-12 col-lg-4">
              <ModalPhoto image={pelletcover} />
            </div>
            <div className="pellet-infos col-12 col-lg-8">
              <div className="row text-center align-items-center h-100">
                <div className="col-12 col-lg-5">
                  <div className="row pt-2">
                    {aboutLine.map((item) => (
                      <AboutLineItem title={item.title} p={item.content} />
                    ))}
                  </div>
                </div>
                <div
                  data-aos="fade-left"
                  className="pt-3 pt-lg-0 col-12 col-lg-7"
                >
                  <p className="weight-product m-0">
                    <span className="text-main">
                      900-1000
                      <sup className="text-white">{t("Ton")}</sup>
                    </span>
                  </p>
                  <p className="weight-info">{t("LineContent1")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutLine;
