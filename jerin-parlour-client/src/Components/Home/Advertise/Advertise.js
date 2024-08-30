import React from 'react';
import img from '../../../assets/Image_Icon/Image/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'

const Advertise = () => {
    return (
        <div className='grid lg:grid-cols-2 lg:gap-24 gap-10 mid-container'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='lg:flex items-center '>
                <div>
                    <h1 className='text-4xl font-semibold lg:text-start text-center'>Let us handle your  screen <span className='text-primary'>Professionally</span>.</h1>
                    <p className='lg:text-start text-center text-neutral text-sm font-normal lg:my-10 md:my-10 my-7 leading-[24px] w-[70%] lg:mx-0 mx-auto'>With well written codes, we build amazing apps for all platforms, mobile and web apps in general ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum.</p>

                    <div className='flex gap-10 lg:justify-start justify-center'>
                        <div>
                            <h1 className='text-4xl font-bold text-primary'>500+</h1>
                            <p className='text-sm font-normal'>Happy Customer</p>
                        </div>
                        <div>
                            <h1 className='text-4xl font-bold text-primary'>160+</h1>
                            <p className='text-sm font-normal'>Total Service</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Advertise;