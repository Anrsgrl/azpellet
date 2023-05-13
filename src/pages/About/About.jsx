import React from 'react';
import AboutStages from './Components/AboutStages/AboutStages';
import AboutStagesMobile from './Components/AboutStages/AboutStagesMobile';
import AboutServices from './Components/AboutServices/AboutServices';
import AboutInfo from './Components/AboutInfo/AboutInfo';

const About = () => {
    return (
        <div className="about container">
            <AboutStages />
            <AboutStagesMobile />
            <AboutServices />
            <AboutInfo />
        </div>
    )
}

export default About;