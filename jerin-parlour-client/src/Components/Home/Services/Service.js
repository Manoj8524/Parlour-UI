import React from 'react';
import service1 from '../../../assets/Image_Icon/Icon/Group 1372.png'
import service2 from '../../../assets/Image_Icon/Icon/Group 1373.png'
import service3 from '../../../assets/Image_Icon/Icon/Group 1374.png'

const Service = () => {
    return (
        <>
            <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10'>
                <div className='text-center shadow-xl p-10 rounded-xl bg-[#ffffff6b]'>
                    <div className='w-20 mx-auto'>
                        <img className='mx-auto w-full' src={service1} alt="" />
                    </div>
                    <h1 className='text-xl font-semibold'>Anti Age Face Treatment</h1>
                    <h1 className='text-xl font-medium text-primary'>$199</h1>
                    <p className='text-sm font-normal leading-[28px] '>We craft stunning and amazing <br /> web UI, using a well drafted UX <br /> to fit your product.</p>
                </div>

                <div className='text-center shadow-xl p-10 rounded-xl bg-[#ffffff6b]'>
                    <div className='w-20 mx-auto'>
                        <img className='mx-auto w-full' src={service2} alt="" />
                    </div>
                    <h1 className='text-xl font-semibold'>Anti Age Face Treatment</h1>
                    <h1 className='text-xl font-medium text-primary'>$99</h1>
                    <p className='text-sm font-normal leading-[28px] '>We craft stunning and amazing <br /> web UI, using a well drafted UX <br /> to fit your product.</p>
                </div>

                <div className='text-center shadow-xl p-10 rounded-xl bg-[#ffffff6b]'>
                    <div className='w-20 mx-auto'>
                        <img className='mx-auto w-full' src={service3} alt="" />
                    </div>
                    <h1 className='text-xl font-semibold'>Anti Age Face Treatment</h1>
                    <h1 className='text-xl font-medium text-primary'>$299</h1>
                    <p className='text-sm font-normal leading-[28px] '>We craft stunning and amazing <br /> web UI, using a well drafted UX <br /> to fit your product.</p>
                </div>
            </div>

            <div className='text-center my-16'>
                <button className='btn btn-primary'>Explore More</button>
            </div>
        </>
    );
};

export default Service;