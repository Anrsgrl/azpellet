import React from 'react';
import AboutStages from './Components/AboutStages/AboutStages';
import AboutStagesMobile from './Components/AboutStages/AboutStagesMobile';
import AboutServices from './Components/AboutServices/AboutServices';
import AboutInfo from './Components/AboutInfo/AboutInfo';
import AboutInfo2 from './Components/AboutInfo/AboutInfo2';
import AboutLine from './Components/AboutLine/AboutLine';

const About = ({ about }) => {
    return (
        <div ref={about} className="about">
            <AboutStages />
            <AboutStagesMobile />
            <AboutServices />
            <AboutInfo />
            <AboutLine />
            <AboutInfo2 />
        </div>
    )
}

export default About;