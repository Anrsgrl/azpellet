import React from 'react';
import "./Footer.scss";
import { BiPhoneCall } from "react-icons/bi";

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-content">
                    <span>Copyright 2023 © All Right Reserved</span>
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