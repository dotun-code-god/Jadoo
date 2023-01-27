import React from 'react';
import Testimonial from '../img/Testimonial.png';
import { TfiAngleUp, TfiAngleDown } from 'react-icons/tfi';

const TestimonialsContainer = () => {
  return (
    <div className='relative mt-40 md:flex items-start justify-between'>
      <div>
        <h2 className='uppercase text-header_secondary-0 font-Poppins font-semibold text-[18px] mb-[10px]'>Testimonials</h2>
        <h1 className='capitalize text-header_primary-0 font-Volkhov font-medium xl:text-5xl xlg:text-[2.7rem] text-4xl xs:text-3xl xxs:text-2xl mt-2 w-[409px] xs:w-[300px]'>What people say about Us.</h1>
        <div className='hidden md:flex items-center justify-between w-20 mt-20'>
          <span className='rounded-full w-3 h-3 bg-slate-900'></span>
          <span className='rounded-full w-3 h-3 bg-slate-300'></span>
          <span className='rounded-full w-3 h-3 bg-slate-300'></span>
        </div>
      </div>
      <div className='relative font-Poppins flex items-center mt-20 md:mt-0'>
        <div className='relative md:-left-14 -left-6 xs:-left-3 xxs:-left-0 md:w-auto w-[380px] xs:w-[300px] mx-auto'>
          <img src={Testimonial} alt="" className='w-14 xsm:w-12 xs:w-10 absolute -top-5 -left-5' />
          <div className='bg-white xs:p-4 p-7 xsm:p-5 xl:w-[504px] lg:w-[400px] leading-[32px] xs:leading-[24px] xs:text-[0.85rem] xsm:leading-[28px] text-header_secondary-0 custom-shadow rounded-[10px]'>
            <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            <h1 className='mt-6 font-semibold'>Mike taylor</h1>
            <p className='text-sm'>Lahore, Pakistan</p>
          </div>
          <div className='relative -top-[168px] -z-10 border-2 border-[#F7F7F7] left-[58px] xs:p-4 p-7 xsm:p-5 xl:w-[504px] lg:w-[400px] h-[245px] leading-[32px] text-header_secondary-0 rounded-[10px] flex justify-end flex-col'>
            <h1 className='mt-6 font-semibold'>Chris Thomas</h1>
            <p className='text-sm'>CEO of Red Button</p>
          </div>
        </div>
        <div className='absolute top-1/4 md:-right-12 xsm:right-6 right-6 xs:-top-12 xsm:-top-12 xxs:-right-6'>
          <TfiAngleUp className='text-gray-300 text-xs font-semibold mb-8' />
          <TfiAngleDown className='text-gray-900 text-xs font-semibold' />
        </div>
      </div>
      <div className='flex md:hidden items-center justify-between w-20 xs:w-16 absolute left-1/2 -translate-x-1/2 bottom-20'>
        <span className='rounded-full w-3 xs:w-2 xs:h-2 h-3 bg-slate-900'></span>
        <span className='rounded-full w-3 xs:w-2 xs:h-2 h-3 bg-slate-300'></span>
        <span className='rounded-full w-3 xs:w-2 xs:h-2 h-3 bg-slate-300'></span>
      </div>
    </div>
  )
}

export default TestimonialsContainer