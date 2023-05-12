import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import tree from "../../../../assets/images/tree.jpg";
import wood from "../../../../assets/images/wood.png";
import woodChips from "../../../../assets/images/woodChips.jpeg";
import woodPellet from "../../../../assets/images/woodPellet.jpeg";

const AboutStagesMobile = () => {
    return (
        <div className="about-stages-mobile">
            <h2>Production Stages</h2>
            <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
            >
                <SwiperSlide>
                    <div className="stages-item p-5">
                        <img src={tree} alt="tree" />
                        <p>Tree</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="stages-item p-5">
                        <img src={wood} alt="wood" />
                        <p>Wood</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="stages-item p-5">
                        <img src={woodChips} alt="woodChips" />
                        <p>Wood Chips</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="stages-item p-5">
                        <img src={woodPellet} alt="woodPellet" />
                        <p>Wood Pellet</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}

export default AboutStagesMobile;