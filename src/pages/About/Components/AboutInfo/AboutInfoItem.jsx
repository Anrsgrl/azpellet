import React from "react";

const AboutInfoItem = (props) => {
  const { text } = props;
  return (
    <p aria-label={text} className="text-muted" data-aos="fade-left">
      {text}
    </p>
  );
};

export default AboutInfoItem;
