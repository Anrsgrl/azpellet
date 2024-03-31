import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import { useTranslation } from "react-i18next";
import AboutInfoItem from "./AboutInfoItem";
import construction1 from "../../../../assets/images/construction1.webp";
import construction2 from "../../../../assets/images/construction2.webp";
import construction3 from "../../../../assets/images/construction3.webp";
import construction4 from "../../../../assets/images/construction4.webp";
import construction5 from "../../../../assets/images/construction5.webp";

const constructions = [
  construction1,
  construction2,
  construction3,
  construction4,
  construction5,
];

const AboutInfo2 = () => {
  const { t } = useTranslation();
  return (
    <div className="container px-md-5 about-production">
      <h2
        title={t("InfoH2")}
        aria-label={t("InfoH2")}
        data-aos="zoom-in"
        className="py-4"
      >
        {t("InfoH2")}
      </h2>
      <div className="row">
        <div className="col-12 col-lg-7 production-images">
          <Swiper
            modules={[Navigation, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
          >
            {constructions.map((e, index) => (
              <SwiperSlide>
                <img
                  data-aos="fade-right"
                  src={e}
                  alt={`construction ${index + 1}`}
                  title={`construction ${index + 1}`}
                  aria-label={`construction ${index + 1}`}
                  loading="lazy"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="col-12 col-lg-5">
          <AboutInfoItem text={t("Info5")} />
        </div>
      </div>
    </div>
  );
};

export default AboutInfo2;
