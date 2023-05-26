import React from 'react'

const Location = () => {
    return (
        <div data-aos="zoom-in" className="location">
            <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3034.0598800124453!2d49.8260738!3d40.4960589!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40308ec2727af697%3A0xc466712141b59f59!2sMehdiabad!5e0!3m2!1sen!2saz!4v1685126730697!5m2!1sen!2saz"
                style={{ width: "100%", height: "200px", border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    )
}

export default Location