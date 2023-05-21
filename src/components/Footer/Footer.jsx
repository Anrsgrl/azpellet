import React from 'react';
import "./Footer.scss";
import { BiPhoneCall } from "react-icons/bi";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <span>{t('Copyright')}</span>
                    <div className="contact-info">
                        <BiPhoneCall />
                        <a href="tel:+9943003030">+994 300 30 30</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;