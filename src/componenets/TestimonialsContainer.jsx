import React from 'react';
import Trip_Rome from '../img/Trip_Rome.png';

const TestimonialsContainer = () => {
  return (
    <div className='mt-40 flex items-center justify-between'>
      <div>
        <h2 className='uppercase text-header_secondary-0 font-Poppins font-semibold text-[18px] mb-[10px]'>Testimonials</h2>
        <h1 className='capitalize text-header_primary-0 font-Volkhov font-medium md:text-5xl text-4xl xs:text-3xl xxs:text-2xl mt-2 w-[409px]'>What people say about Us.</h1>
        <div className='flex items-center justify-between w-20 mt-20'>
          <span className='rounded-full w-3 h-3 bg-slate-900'></span>
          <span className='rounded-full w-3 h-3 bg-slate-300'></span>
          <span className='rounded-full w-3 h-3 bg-slate-300'></span>
        </div>
      </div>
      <div className='relative font-Poppins'>
        <div>
          <img src={Trip_Rome} alt="" className='w-12' />
          <div className='p-9 w-[504px] leading-[32px] text-header_secondary-0'>
            <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            <h1>Mike taylor</h1>
            <p>Lahore, Pakistan</p>
          </div>
          <div>
            <h1>Chris Thomas</h1>
            <p>CEO of Red Button</p>
          </div>
        </div>
        <div>
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default TestimonialsContainer