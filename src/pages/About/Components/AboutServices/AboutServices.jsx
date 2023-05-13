import React from 'react';
import { TbTruckDelivery, TbRecycle, TbFileCertificate } from "react-icons/tb";
import "./AboutServices.scss";
import AboutServicesItem from './AboutServicesItem';

const AboutServices = () => {
    return (
        <div className="about-services pt-2 pb-5">
            <div className="row">
                <AboutServicesItem icon={<TbRecycle />} text="Our products are environmentally friendly" />
                <AboutServicesItem icon={<TbTruckDelivery />} text="Our products are delivered to the territory of Azerbaijan and Europe." />
                <AboutServicesItem icon={<TbFileCertificate />} text="All of our products are certified." />
            </div>
        </div>
    )
}

export default AboutServices;