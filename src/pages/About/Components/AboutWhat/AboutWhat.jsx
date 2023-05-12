import React from 'react';
import Whatimg from "../../../../assets/images/aboutwhat.jpg";
import "./AboutWhat.scss";

const AboutWhat = () => {
    return (
        <div className="what-is py-5">
            <div className="row">
                <div className="col-12 col-md-6">
                    <img src={Whatimg} alt="" />
                </div>
                <div className="col-12 col-md-6 py-3">
                    <h2>What is Wood Pepper?</h2>
                    <p>Pellet fuels are a type of solid fuel made from compressed organic material. Pellets can be made from any one of five general categories of biomass: industrial waste and co-products, food waste, agricultural residues, energy crops, and untreated lumber.</p>
                </div>
            </div>
        </div>
    )
}

export default AboutWhat;