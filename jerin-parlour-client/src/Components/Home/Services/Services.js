import React from 'react';
import Service from './Service';

const Services = () => {
    return (
        <div className='mid-container'>
            <h1 className='text-4xl font-bold text-center lg:mt-24 md:mt-16 my-10'>Our Awesome <span className='text-primary'>Services</span></h1>

            <div className=' lg:my-16 md:my-10'>
                <Service />
            </div>
        </div>
    );
};

export default Services;