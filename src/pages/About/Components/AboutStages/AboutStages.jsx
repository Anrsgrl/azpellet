import React from "react";
import "./AboutStages.scss";
import AboutStagesItem from "./AboutStagesItem";
import log from "../../../../assets/images/log.webp";
import wood from "../../../../assets/images/wood.webp";
import woodChips from "../../../../assets/images/woodChips.webp";
import woodPellet from "../../../../assets/images/woodPellet.webp";
import { useTranslation } from "react-i18next";
import { AiOutlineArrowRight } from "react-icons/ai";
const AboutStages = () => {
  const { t } = useTranslation();
  const stages = [
    {
      text: t("Stage3"),
      image: woodChips,
    },
    {
      text: <AiOutlineArrowRight />,
      y: "180deg",
    },
    {
      text: t("Stage2"),
      image: wood,
    },
    {
      text: <AiOutlineArrowRight />,
      y: "90deg",
    },
    {
      h2: t("StagesH"),
    },
    {
      text: <AiOutlineArrowRight />,
      y: "270deg",
    },
    {
      text: t("Stage4"),
      image: woodPellet,
    },
    {
      id: "space",
    },
    {
      text: t("Stage1"),
      image: log,
    },
  ];

  return (
    <div className="about-stages container p-5">
      <div className="row">
        {stages.map((e) => (
          <AboutStagesItem
            text={e?.text}
            y={e?.y}
            image={e?.image}
            h2={e?.h2}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutStages;
