import React, { useState } from 'react';
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from 'react-i18next';

const Header = ({ home, about, form }) => {
    const { t, i18n } = useTranslation();
    const [color, setColor] = useState();
    const [hamburger, setHamburger] = useState(false);
    const changeColor = () => {
        setHamburger(false)
        if (window.scrollY >= 96) {
            setColor(true);
        } else {
            setColor(false);
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current?.offsetTop - 60,
            behavior: 'smooth'
        });
    };
    const clickHandle = (lang) => {
        i18n.changeLanguage(lang)
    }

    window.addEventListener('scroll', changeColor);
    return (
        <header className={color ? "scrolled py-2" : "py-2"}>
            <div className="container">
                <div className="header-content">
                    <h2>
                        <button onClick={() => { scrollToTop() }} className='clean-button'>
                            Azpellet
                        </button>
                    </h2>
                    <ul className='p-0 pe-5'>
                        <li><button onClick={() => scrollToSection(home)} className='clean-button'>{t('Nav1')}</button></li>
                        <li><button onClick={() => scrollToSection(about)} className='clean-button'>{t('Nav2')}</button></li>
                        <li><button onClick={() => scrollToSection(form)} className='clean-button'>{t('Nav3')}</button></li>
                    </ul>
                    <div className="header-right">
                        <select name="sort-list" id="sort-list" onChange={(e) => { clickHandle(e.target.value) }}>
                            <option value="aze">AZE</option>
                            <option value="en">EN</option>
                            <option value="ru">RU</option>
                        </select>
                        <div className="hamburger">
                            <button className="hamburger-button clean-button" onClick={() => setHamburger(!hamburger)}><GiHamburgerMenu /></button>
                            <AnimatePresence>
                                {hamburger &&
                                    <motion.aside key={hamburger}
                                        initial={{ right: -200, opacity: 0 }}
                                        animate={{ right: 0, opacity: 1 }}
                                        exit={{ right: -200, opacity: 0 }}
                                        transition={{
                                            duration: 0.3, opacity: { ease: "linear" },
                                        }} >
                                        <button className='close-button clean-button' onClick={() => setHamburger(false)}><AiOutlineCloseCircle /></button>
                                        <ul>
                                            <li><button onClick={() => scrollToSection(home)} className='clean-button'>{t('Nav1')}</button></li>
                                            <li><button onClick={() => scrollToSection(about)} className='clean-button'>{t('Nav2')}</button></li>
                                            <li><button onClick={() => scrollToSection(form)} className='clean-button'>{t('Nav3')}</button></li>
                                        </ul>
                                    </motion.aside>}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;