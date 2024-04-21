import React from "react";
import "./AboutServices.scss";
import AboutServicesItem from "./AboutServicesItem";
import {
  TbFileCertificate,
  TbRecycle,
  TbTree,
  TbTruckDelivery,
} from "react-icons/tb";
import { useTranslation } from "react-i18next";

const AboutServices = () => {
  const { t } = useTranslation();
  const services = [
    {
      icon: <TbTree />,
      text: t("Services5"),
    },
    {
      icon: <TbRecycle />,
      text: t("Services1"),
    },
    {
      icon: <TbTruckDelivery />,
      text: t("Services2"),
    },
    {
      icon: <TbFileCertificate />,
      text: t("Services3"),
      link: t("Services4"),
    },
  ];
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
