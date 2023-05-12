import React, { useState } from 'react';
import "./Header.scss";

const Header = () => {
    const [color, setColor] = useState();
    const changeColor = () => {
        if (window.scrollY >= 96) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    window.addEventListener('scroll', changeColor);
    return (
        <header className={color ? "scrolled py-2" : "py-2"}>
            <div className="container">
                <div className="header-content">
                    <h2>Azleppet</h2>
                    <ul className='p-0 pe-5'>
                        <li><button className='clean-button'>Home</button></li>
                        <li><button className='clean-button'>About</button></li>
                        <li><button className='clean-button'>Contact</button></li>
                    </ul>
                    <select name="sort-list" id="sort-list">
                        <option value="en">EN</option>
                        <option value="aze">AZE</option>
                        <option value="ru">RU</option>
                    </select>
                </div>
            </div>
        </header>
    )
}

export default Header;