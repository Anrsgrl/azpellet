import React, { useState } from 'react';
import "./AboutInfo.scss"

const AboutInfo = () => {
    const [more, setMore] = useState(false);
    return (
        <div className="about-info px-md-5 py-4">
            <h2>Fuel Pellets</h2>
            <p>
                Fuel pellets Most of all, comfort and warmth are valued in any home. Therefore, before each owner of the house, especially when cold weather approaches, the question arises: how to heat the room. The market offers many options: firewood, coal, gas or peat. Worthy competition with this material can be fuel pellets, pellets of small sizes, made from waste from the woodworking industry.
            </p>
            <p>
                In Europe, they are quite popular fuel. In our country, they began to resort to them only recently. This alternative fuel became especially popular when the issue of environmental pollution and the need to use environmentally friendly materials became acute.
            </p>
            {more ? ("") : (<button onClick={() => setMore(true)} className='clean-button'>...more</button>)}
            {more &&
                <>
                    <p>
                        What is the reason for the popularity of fuel pellets? In our country, the popularity of alternative biofuels is just beginning to grow. This is the reason for the many positive aspects of the use of such biofuels.
                    </p>
                    <p>
                        Waste-free production. Wood is a very valuable material, so they try to use it to the maximum. Wood shavings, sawdust, trimmings or chips, inexpensive wood that has nowhere else to use, are used to make fuel. Environmental Safety.
                    </p>
                </>
            }
            <h2 className='py-3'>Production</h2>
            <div className="row">
                <div className="col-12 col-lg-7">
                    <img src="https://www.naturallywood.com/wp-content/uploads/wood-pellet-manufacturing.jpg" alt="" className='w-100 h-100' />
                </div>
                <div className="col-12 col-lg-5">
                    <p>
                        Pellets are produced by compressing the wood material which has first passed through a hammer mill to provide a uniform dough-like mass. This mass is fed to a press, where it is squeezed through a die having holes of the size required (normally 6 mm diameter, sometimes 8 mm or larger). The high pressure of the press causes the temperature of the wood to increase greatly, and the lignin plasticizes slightly, forming a natural "glue" that holds the pellet together as it cools.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutInfo;