import React from "react";
import "./AboutServices.scss";
import AboutServicesItem from "./AboutServicesItem";
import { services } from "../../../../mocks/general";

const AboutServices = () => {
  return (
    <div className="about-services pt-3 pb-5 container">
      <div className="row">
        {services.map((service) => (
          <AboutServicesItem
            icon={service.icon}
            text={service.text}
            link={service?.link}
          />
        ))}
      </div>
    </div>
  );
};

export default AboutServices;
