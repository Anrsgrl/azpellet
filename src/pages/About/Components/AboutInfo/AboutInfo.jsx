import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import "./AboutInfo.scss"
const AboutInfo = () => {
    const [more, setMore] = useState(false);
    return (
        <div className="about-info px-md-5 py-4">
            <h2 data-aos="zoom-in">Fuel Pellets</h2>
            <p data-aos="fade-left">
                Fuel pellets Most of all, comfort and warmth are valued in any home. Therefore, before each owner of the house, especially when cold weather approaches, the question arises: how to heat the room. The market offers many options: firewood, coal, gas or peat. Worthy competition with this material can be fuel pellets, pellets of small sizes, made from waste from the woodworking industry.
            </p>
            <p data-aos="fade-left">
                In Europe, they are quite popular fuel. In our country, they began to resort to them only recently. This alternative fuel became especially popular when the issue of environmental pollution and the need to use environmentally friendly materials became acute.
            </p>
            {more ? ("") : (<button data-aos="fade-left" onClick={() => setMore(true)} className='clean-button'>...more</button>)}
            {more &&
                <>
                    <p data-aos="fade-left">
                        What is the reason for the popularity of fuel pellets? In our country, the popularity of alternative biofuels is just beginning to grow. This is the reason for the many positive aspects of the use of such biofuels.
                    </p>
                    <p data-aos="fade-left">
                        Waste-free production. Wood is a very valuable material, so they try to use it to the maximum. Wood shavings, sawdust, trimmings or chips, inexpensive wood that has nowhere else to use, are used to make fuel. Environmental Safety.
                    </p>
                </>
            }
            {more && (<button data-aos="fade-left" onClick={() => setMore(false)} className='clean-button'>...less</button>)}
            <h2 data-aos="zoom-in" className='py-3'>Production</h2>
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
                    <p data-aos="fade-left">
                        Pellets are produced by compressing the wood material which has first passed through a hammer mill to provide a uniform dough-like mass. This mass is fed to a press, where it is squeezed through a die having holes of the size required (normally 6 mm diameter, sometimes 8 mm or larger). The high pressure of the press causes the temperature of the wood to increase greatly, and the lignin plasticizes slightly, forming a natural "glue" that holds the pellet together as it cools.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo;