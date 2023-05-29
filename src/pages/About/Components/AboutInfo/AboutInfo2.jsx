import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { useTranslation } from 'react-i18next';
import AboutInfoItem from './AboutInfoItem';

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
                            <img data-aos="fade-right" src="https://www.barskras.ru/content/images/136.jpg" alt="" />
                        </SwiperSlide>
                        <SwiperSlide>
                            <img data-aos="fade-right" src="https://www.kurutma-makineleri.com/wp-content/uploads/2017/12/i_Cay.Pelet_.Makinalari_1445863745.jpg" alt="" />
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