import React from 'react';
import AboutWhat from './components/HomeWhat/HomeWhat';
import Hero from './components/Hero/Hero';

const Home = ({ home }) => {
    return (
        <div ref={home} className="home">
            <Hero />
            <div className="container">
                <AboutWhat />
            </div>
        </div>
    )
}

export default Home;