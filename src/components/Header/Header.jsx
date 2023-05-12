import React from 'react';
import "./Header.scss";

const Header = () => {
    return (
        <header className='py-3'>
            <div className="container">
                <div className="header-content">
                    <h2>Azleppet</h2>
                    <ul>
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