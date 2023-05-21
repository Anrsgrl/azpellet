import React from 'react';
import { TbTruckDelivery, TbRecycle, TbFileCertificate } from "react-icons/tb";
import "./AboutServices.scss";
import AboutServicesItem from './AboutServicesItem';
import { useTranslation } from 'react-i18next';

const AboutServices = () => {
    const { t } = useTranslation();
    return (
        <div className="about-services pt-3 pb-5">
            <div className="row">
                <AboutServicesItem icon={<TbRecycle />} text={t('Services1')} />
                <AboutServicesItem icon={<TbTruckDelivery />} text={t('Services2')} />
                <AboutServicesItem icon={<TbFileCertificate />} text={t('Services3')} />
            </div>
        </div>
    )
}

export default AboutServices;