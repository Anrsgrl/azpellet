import React, { useState } from 'react';
import "./AboutInfo.scss"
import { useTranslation } from 'react-i18next';
import AboutInfoItem from './AboutInfoItem';
const AboutInfo = () => {
    const [more, setMore] = useState(false);
    const { t } = useTranslation();
    return (
        <div className="about-info px-md-5 container">
            <h2 data-aos="zoom-in">{t('InfoH1')}</h2>
            <AboutInfoItem text={t('Info1')} />
            <AboutInfoItem text={t('Info2')} />
            {more ? ("") : (<button data-aos="fade-left" onClick={() => setMore(true)} className='clean-button'>{t('More')}</button>)}
            {more &&
                <>
                    <AboutInfoItem text={t('Info3')} />
                    <AboutInfoItem text={t('Info4')} />
                </>
            }
            {more && (<button data-aos="fade-left" onClick={() => setMore(false)} className='clean-button'>{t('Less')}</button>)}
        </div>
    )
}

export default AboutInfo;