import React from "react";
import "./AboutStages.scss";
import AboutStagesItem from "./AboutStagesItem";
import { stages } from "../../../../mocks/general";
const AboutStages = () => {
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
