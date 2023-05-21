import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import "./AboutInfo.scss"
import { useTranslation } from 'react-i18next';
import AboutInfoItem from './AboutInfoItem';
const AboutInfo = () => {
    const [more, setMore] = useState(false);
    const { t } = useTranslation();
    return (
        <div className="about-info px-md-5 py-5">
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
            <h2 data-aos="zoom-in" className='py-4'>{t('InfoH2')}</h2>
            <div className="row">
                <div className="col-12 col-lg-7 production-images">
                    <Swiper
                        modules={[Navigation, A11y]}
                        spaceBetween={50}
                        slidesPerView={1}
                        navigation
                    >
                        <SwiperSlide>
                            <img data-aos="fade-right" src="https://www.naturallywood.com/wp-content/uploads/wood-pellet-manufacturing.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img data-aos="fade-right" src="https://www.timberindustrynews.com/wp-content/uploads/2018/01/wood-pellets-734x458.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img data-aos="fade-right" src="https://www.globalwoodmarketsinfo.com/wp-content/uploads/2020/03/pellet.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img data-aos="fade-right" src="https://img2.exportersindia.com/product_images/bc-full/dir_65/1938995/standards-wood-pellets-1830441.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img data-aos="fade-right" src="https://sc01.alicdn.com/kf/A95e8b98a66334e27962f121efa677563a.jpg" alt="" />
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className="col-12 col-lg-5">
                    <AboutInfoItem text={t('Info5')} />
                </div>
            </div>
        </div>
    )
}

export default AboutInfo;