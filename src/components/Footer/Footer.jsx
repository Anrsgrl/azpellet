import React from 'react';
import "./Footer.scss";
import { FiMail } from "react-icons/fi";
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <span>{t('Copyright')}</span>
                    <div className="contact-info">
                        <FiMail />
                        <a href="mailto:info@azpellet.com">info@azpellet.com</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;