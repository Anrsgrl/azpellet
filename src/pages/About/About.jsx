import React from 'react';
import AboutWhat from './Components/AboutWhat/AboutWhat';
import AboutStages from './Components/AboutStages/AboutStages';
import AboutStagesMobile from './Components/AboutStages/AboutStagesMobile';
import AboutServices from './Components/AboutServices/AboutServices';

const About = () => {
    return (
        <div className="about container">
            <AboutWhat />
            <AboutStages />
            <AboutStagesMobile />
            <AboutServices />
        </div>
    )
}

export default About;