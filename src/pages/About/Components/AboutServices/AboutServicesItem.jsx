import React from 'react';

const AboutServicesItem = (props) => {
    const { icon, text } = props;
    return (
        <div className="col-12 col-md-4 services-item flex-column flex-md-row pt-4">
            <span className='p-2' data-aos="fade-up">{icon}</span>
            <p data-aos="fade-up" className="pt-2 pt-md-0 m-0 ps-2 text-muted text-center">
                {text}
            </p>
        </div>
    )
}

export default AboutServicesItem;