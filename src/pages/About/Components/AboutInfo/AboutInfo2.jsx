import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { useTranslation } from 'react-i18next';
import AboutInfoItem from './AboutInfoItem';
import construction1 from "../../../../assets/images/construction1.png";
import construction2 from "../../../../assets/images/construction2.png";
import construction3 from "../../../../assets/images/construction3.png";
import construction4 from "../../../../assets/images/construction4.png";
import construction5 from "../../../../assets/images/construction5.png";

const AboutInfo2 = () => {
    const { t } = useTranslation();
    return (
        <div className="container px-md-5 about-production">
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
                            <img data-aos="fade-right" src={construction1} alt="construction" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img data-aos="fade-right" src={construction2} alt="construction" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img data-aos="fade-right" src={construction3} alt="construction" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img data-aos="fade-right" src={construction4} alt="construction" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img data-aos="fade-right" src={construction5} alt="construction" />
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

export default AboutInfo2;