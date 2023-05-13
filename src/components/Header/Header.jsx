import React, { useState } from 'react';
import "./Header.scss";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
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
                        <li><button className='clean-button'>Home</button></li>
                        <li><button className='clean-button'>About</button></li>
                        <li><button className='clean-button'>Contact</button></li>
                    </ul>
                    <div className="header-right">
                        <select name="sort-list" id="sort-list">
                            <option value="en">EN</option>
                            <option value="aze">AZE</option>
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
                                            duration: 1.1, opacity: { ease: "linear" },
                                        }} >
                                        <button className='close-button clean-button' onClick={() => setHamburger(false)}><AiOutlineCloseCircle /></button>
                                        <ul>
                                            <li><button className='clean-button'>Home</button></li>
                                            <li><button className='clean-button'>About</button></li>
                                            <li><button className='clean-button'>Contact</button></li>
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