import React from 'react';
import ModalImage from "react-modal-image";

const ModalPhoto = (props) => {
    const { image } = props;
    return (
        <>
            <ModalImage
                alt="Azpellet"
                small={image}
                medium={image}
                hideZoom={true}
                large={image}
            />
            <div className="div-modal"></div>
        </>
    )
}

export default ModalPhoto;