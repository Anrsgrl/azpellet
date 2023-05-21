import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import tree from "../../../../assets/images/tree.jpg";
import wood from "../../../../assets/images/wood.png";
import woodChips from "../../../../assets/images/woodChips.png";
import woodPellet from "../../../../assets/images/woodPellet.png";

const AboutStagesMobile = () => {
    return (
        <div className="about-stages-mobile">
            <h2 data-aos="zoom-in">Production Stages</h2>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
            >
                <SwiperSlide>
                    <div className="stages-item p-5">
                        <img data-aos="fade-left" src={tree} alt="tree" />
                        <p data-aos="fade-left">Tree</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="stages-item p-5">
                        <img data-aos="fade-left" src={wood} alt="wood" />
                        <p data-aos="fade-left">Wood</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="stages-item p-5">
                        <img data-aos="fade-left" src={woodChips} alt="woodChips" />
                        <p data-aos="fade-left">Wood Chips</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="stages-item p-5">
                        <img data-aos="fade-left" src={woodPellet} alt="woodPellet" />
                        <p data-aos="fade-left">Wood Pellet</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AboutStagesMobile;