import React from "react";
import "./AboutStages.scss";
import log from "../../../../assets/images/log.webp";
import wood from "../../../../assets/images/wood.webp";
import woodChips from "../../../../assets/images/woodChips.webp";
import woodPellet from "../../../../assets/images/woodPellet.webp";
import { AiOutlineArrowRight } from "react-icons/ai";
import AboutStagesItem from "./AboutStagesItem";
import { useTranslation } from "react-i18next";
const AboutStages = () => {
  const { t } = useTranslation();
  return (
    <div className="about-stages container p-5">
      <div className="row">
        <AboutStagesItem text={t("Stage3")} image={woodChips} />
        <AboutStagesItem text={<AiOutlineArrowRight />} y="180deg" />
        <AboutStagesItem text={t("Stage2")} image={wood} />
        <AboutStagesItem text={<AiOutlineArrowRight />} y="90deg" />
        <AboutStagesItem h2={t("StagesH")} />
        <AboutStagesItem text={<AiOutlineArrowRight />} y="270deg" />
        <AboutStagesItem text={t("Stage4")} image={woodPellet} />
        <AboutStagesItem />
        <AboutStagesItem text={t("Stage1")} image={log} />
      </div>
    </div>
  );
};

export default AboutStages;
