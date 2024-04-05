import React from "react";
import "./Footer.scss";
import { FiMail } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const today = new Date();
  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-info pb-2 pb-md-0 flex-column">
            <p className="footer-item">{t("Seller")}</p>
            <span className="footer-item">
              {t("Copyright").replace("2023", today.getFullYear())}
            </span>
          </div>
          <div className="footer-info flex-column">
            <p className="footer-item">
              <FiMail />
              <a
                href="mailto:ttc@azpellet.com"
                title="ttc@azpellet.com"
                aria-label="ttc@azpellet.com"
              >
                ttc@azpellet.com
              </a>
            </p>
            <p className="footer-item">
              <FiMail />
              <a
                href="mailto:office@azpellet.com"
                title="office@azpellet.com"
                aria-label="office@azpellet.com"
              >
                office@azpellet.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
