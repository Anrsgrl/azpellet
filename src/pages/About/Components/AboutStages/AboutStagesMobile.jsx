import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import log from "../../../../assets/images/log.webp";
import wood from "../../../../assets/images/wood.webp";
import woodChips from "../../../../assets/images/woodChips.webp";
import woodPellet from "../../../../assets/images/woodPellet.webp";
import { useTranslation } from "react-i18next";

const AboutStagesMobile = () => {
  const { t } = useTranslation();
  return (
    <div className="about-stages-mobile container">
      <h2 data-aos="zoom-in">{t("StagesH")}</h2>
      <Swiper
        modules={[Navigation, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide>
          <div className="stages-item p-5">
            <img data-aos="fade-left" src={log} alt="tree" />
            <p data-aos="fade-left">{t("Stage1")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="stages-item p-5">
            <img data-aos="fade-left" src={wood} alt="wood" />
            <p data-aos="fade-left">{t("Stage2")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="stages-item p-5">
            <img data-aos="fade-left" src={woodChips} alt="woodChips" />
            <p data-aos="fade-left">{t("Stage3")}</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="stages-item p-5">
            <img data-aos="fade-left" src={woodPellet} alt="woodPellet" />
            <p data-aos="fade-left">{t("Stage4")}</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AboutStagesMobile;
