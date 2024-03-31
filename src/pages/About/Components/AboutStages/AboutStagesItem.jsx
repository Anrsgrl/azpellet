import React from "react";

const AboutStagesItem = (props) => {
  const { text, image, y, h2 } = props;
  return (
    <div className="col-4 stages-item p-5">
      {image && (
        <img
          title={text}
          aria-label={text}
          loading="lazy"
          data-aos="fade-up"
          src={image}
          alt={text}
        />
      )}
      {text && (
        <p
          title={typeof text === "string" ? text : ""}
          aria-label={typeof text === "string" ? text : ""}
          data-aos="fade-up"
          style={{ rotate: y }}
        >
          {text}
        </p>
      )}
      {h2 && (
        <h2 title={h2} aria-label={h2} data-aos="zoom-in">
          {h2}
        </h2>
      )}
    </div>
  );
};

export default AboutStagesItem;
