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
                    <div className="contact-info d-flex flex-column">
                        <p className='container d-flex justify-content-end w-100'>{t('Seller')}</p>
                        <p className='d-flex'>
                            <FiMail />
                            <a href="mailto:office@azpellet.com">office@azpellet.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;