import React from 'react';

const AboutStagesItem = (props) => {
    const { text, image, y, h2 } = props;
    return (
        <div className="col-4 stages-item p-5">
            {image && <img data-aos="fade-up" src={image} alt="" />}
            {text && <p data-aos="fade-up" style={{ rotate: y }}>{text}</p>}
            {h2 && <h2 data-aos="zoom-in">{h2}</h2>}
        </div>
    )
}

export default AboutStagesItem;