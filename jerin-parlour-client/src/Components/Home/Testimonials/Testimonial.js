import React from 'react';
import img1 from '../../../assets/Image_Icon/Image/Ellipse 90.png'
import img2 from '../../../assets/Image_Icon/Image/Ellipse 91.png'
import img3 from '../../../assets/Image_Icon/Image/Ellipse 92.png'

const Testimonial = () => {
    return (
        <div className='grid lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 gap-10 lg:text-start md:text-start text-center'>
            <div>
                <div className='flex gap-4 lg:justify-start md:justify-start justify-center'>
                    <div className='w-16'>
                        <img src={img1} alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Nash Patrik</h1>
                        <p className='text-sm font-medium'>CEO, Manpol</p>
                    </div>
                </div>
                <p className='text-sm font-normal my-5 leading-[28px] tracking-wider'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum <br /> duis laoreet maecenas. Feugiat </p>

                <div class="rating rating-md">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                </div>
            </div>
            <div>
                <div className='flex gap-4 lg:justify-start md:justify-start justify-center'>
                    <div className='w-16'>
                        <img src={img2} alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Miriam Barron</h1>
                        <p className='text-sm font-medium'>CEO, Manpol</p>
                    </div>
                </div>
                <p className='text-sm font-normal my-5 leading-[28px] tracking-wider'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum <br /> duis laoreet maecenas. Feugiat </p>

                <div class="rating rating-md">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                </div>
            </div>
            <div>
                <div className='flex gap-4 lg:justify-start md:justify-start justify-center'>
                    <div className='w-16'>
                        <img src={img3} alt="" />
                    </div>
                    <div>
                        <h1 className='text-xl font-semibold'>Bria Malone</h1>
                        <p className='text-sm font-medium'>CEO, Manpol</p>
                    </div>
                </div>
                <p className='text-sm font-normal my-5 leading-[28px] tracking-wider'>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit. Purus commodo ipsum <br /> duis laoreet maecenas. Feugiat </p>

                <div class="rating rating-md">
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                    <input type="radio" name="rating-2" class="mask mask-star-2 bg-orange-400" checked />
                </div>
            </div>
        </div>
    );
};

export default Testimonial;