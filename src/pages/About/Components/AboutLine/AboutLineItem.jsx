import React from 'react'

const AboutLineItem = (props) => {
    const { title, p } = props;
    return (
        <div className="pallet-info col-12">
            <div className="py-2 product-desc text-main text-center d-flex">
                <span data-aos="fade-left" className='product-info'>  {title} </span>
                <span data-aos="fade-left" className='text-white'>    {p} </span>
            </div>
        </div>
    )
}

export default AboutLineItem