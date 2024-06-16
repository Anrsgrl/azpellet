import React from "react";

const Location = () => {
  return (
    <div data-aos="zoom-in" className="location">
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1561000.1261505196!2d46.435583621308844!3d40.1683748498289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307cd91aa21ddf%3A0xe6c9526b3e83cd08!2sazrbaycan!5e0!3m2!1str!2saz!4v1685464448314!5m2!1str!2saz"
        style={{ width: "100%", height: "300px", border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Location;
