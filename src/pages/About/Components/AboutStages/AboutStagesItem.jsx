import React from 'react';

const AboutStagesItem = (props) => {
    const { text, image, y, h2 } = props;
    return (
        <div className="col-4 stages-item p-5">
            {image && <img src={image} alt="" />}
            {text && <p style={{ rotate: y }}>{text}</p>}
            {h2 && <h2>{h2}</h2>}
        </div>
    )
}

export default AboutStagesItem;