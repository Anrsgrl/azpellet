import React from 'react';
import "./AboutStages.scss";
import tree from "../../../../assets/images/tree.jpg";
import wood from "../../../../assets/images/wood.png";
import woodChips from "../../../../assets/images/woodChips.jpeg";
import woodPellet from "../../../../assets/images/woodPellet.jpeg";
import { AiOutlineArrowRight } from "react-icons/ai";
import AboutStagesItem from './AboutStagesItem';
const AboutStages = () => {
    return (
        <div className="about-stages p-5">
            <div className="row">
                <AboutStagesItem text="Wood Chips" image={woodChips} />
                <AboutStagesItem text={<AiOutlineArrowRight />} y="180deg" />
                <AboutStagesItem text="Wood" image={wood} />
                <AboutStagesItem text={<AiOutlineArrowRight />} y="90deg" />
                <AboutStagesItem h2="Production Stages" />
                <AboutStagesItem text={<AiOutlineArrowRight />} y="270deg" />
                <AboutStagesItem text="Wood Pellet" image={woodPellet} />
                <AboutStagesItem />
                <AboutStagesItem text="Tree" image={tree} />
            </div>
        </div>
    )
}

export default AboutStages;