import React, { useEffect, useRef, useState } from 'react';
import Testimonial from '../img/Testimonial.png';
import { TfiAngleUp, TfiAngleDown } from 'react-icons/tfi';
import { motion } from 'framer-motion';

const TestimonialsContainer = () => {
  const [inViewIndex, setInViewIndex] = useState(0);
  const [subViewIndex, setSubViewIndex] = useState(1);
  const imagesRef = useRef(null);
  const [imageLength, setImageLength] = useState(0);
  
  useEffect(() => {
    const imageNode = imagesRef.current.querySelectorAll('div');
    imageNode.forEach(element => element.style.display = 'none');
    imageNode[inViewIndex].style.display = 'block';
    imageNode[subViewIndex].style.display = 'block';
    setImageLength(imageNode.length);
  }, [inViewIndex, subViewIndex]);
  
  const handleView = (toggler) => {
    if (toggler) {
      setInViewIndex(inViewIndex + 1);
      setSubViewIndex(subViewIndex + 1);
      if (inViewIndex === (imageLength - 2)){
        setInViewIndex(imageLength-1);
        setSubViewIndex(0);
      }
      else if(inViewIndex === (imageLength - 1)){
        setInViewIndex(0);
        setSubViewIndex(1);
      }
    } 
    else{
      setInViewIndex(inViewIndex - 1);
      setSubViewIndex(subViewIndex - 1);
      if (inViewIndex === (imageLength - 1)){
        setInViewIndex(imageLength-2);
        setSubViewIndex(imageLength-1);
      }
      else if(!inViewIndex){
        setInViewIndex(imageLength-1);
        setSubViewIndex(0);
      }
    }
  }

  const handleView2 = (index) => {
    setInViewIndex(index);
    setSubViewIndex(index+1);
    if(index === (imageLength - 1)){
      setInViewIndex(imageLength-1);
      setSubViewIndex(0);
    }
    if(index === (imageLength - 2)){
      setInViewIndex(imageLength-2);
      setSubViewIndex(imageLength-1);
    }
  }
  
  return (
    <div className='relative my-40 md:flex items-start justify-between'>
      <div>
        <h2 className="uppercase text-header_secondary-0 font-Poppins font-semibold text-[18px] mb-[10px]">Testimonials</h2>
        <h1 className='capitalize text-header_primary-0 font-Volkhov font-medium xl:text-5xl xlg:text-[2.7rem] text-4xl xs:text-3xl xxs:text-2xl mt-2 w-[409px] xs:w-[300px]'>What people say about Us.</h1>
        <div className='hidden md:flex items-center justify-between w-20 mt-20'>
          {
            imageLength && Array.from({length:imageLength}).map((v,i) => i).map(index => (
              <span key={index} 
                className={`rounded-full w-3 h-3 cursor-pointer ${index === inViewIndex ? 'bg-slate-900' : 'bg-slate-300'}`}
                onClick={() => handleView2(index)}
                ></span>
            ))
          } 
        </div>  
      </div>
      <div className='relative font-Poppins flex items-center mt-20 md:mt-0'>
        <div className='relative md:-left-14 -left-6 xs:-left-3 xxs:-left-0 md:w-auto w-[380px] xs:w-[300px] mx-auto' ref={imagesRef}>
          <motion.div 
            className={`relative ${subViewIndex === 0 ? 'top-[4.2rem] -z-10 border-2 border-[#F7F7F7] left-[58px]' : 'bg-white custom-shadow'} xs:p-4 p-7 xsm:p-5 xl:w-[504px] lg:w-[400px] leading-[32px] xs:leading-[24px] xs:text-[0.85rem] xsm:leading-[28px] text-header_secondary-0 rounded-[10px]`}
          >
            <img src={Testimonial} alt="" className='w-14 xsm:w-12 xs:w-10 absolute -top-5 -left-5' />
            <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            <h1 className='mt-6 font-semibold'>Dotun Joseph</h1>
            <p className='text-sm'>Lahore, Pakistan</p>
          </motion.div>
          <motion.div 
            className={`relative ${subViewIndex === 1 ? '-top-40 -z-10 border-2 border-[#F7F7F7] left-[58px]' : 'bg-white custom-shadow'} xs:p-4 p-7 xsm:p-5 xl:w-[504px] lg:w-[400px] leading-[32px] xs:leading-[24px] xs:text-[0.85rem] xsm:leading-[28px] text-header_secondary-0 rounded-[10px]`}
          >
            <img src={Testimonial} alt="" className='w-14 xsm:w-12 xs:w-10 absolute -top-5 -left-5' />
            <p>“Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.”</p>
            <h1 className='mt-6 font-semibold'>Akanji Oluwasen</h1>
            <p className='text-sm'>CEO of Red Button</p>
          </motion.div>
          <motion.div 
            className={`relative ${subViewIndex === 2 ? '-top-40 -z-10 border-2 border-[#F7F7F7] left-[58px]' : 'bg-white custom-shadow'} xs:p-4 p-7 xsm:p-5 xl:w-[504px] lg:w-[400px] leading-[32px] xs:leading-[24px] xs:text-[0.85rem] xsm:leading-[28px] text-header_secondary-0 rounded-[10px]`}
          >
            <img src={Testimonial} alt="" className='w-14 xsm:w-12 xs:w-10 absolute -top-5 -left-5' />
            <p>“Engrossed listening. Park gate sell they west hard for the. Engrossed listening. Park gate sell they west hard for the.”</p>
            <h1 className='mt-6 font-semibold'>Ibukun Gabriel</h1>
            <p className='text-sm'>CTO Alusoft</p>
          </motion.div>
          <motion.div 
            className={`relative ${subViewIndex === 3 ? '-top-40 -z-10 border-2 border-[#F7F7F7] left-[58px]' : 'bg-white custom-shadow'} ${inViewIndex === 3 ? '-top-[14.5rem]' : ''} xs:p-4 p-7 xsm:p-5 xl:w-[504px] lg:w-[400px] leading-[32px] xs:leading-[24px] xs:text-[0.85rem] xsm:leading-[28px] text-header_secondary-0 rounded-[10px]`}
          >
            <img src={Testimonial} alt="" className='w-14 xsm:w-12 xs:w-10 absolute -top-5 -left-5' />
            <p>“Engrossed listening. Park gate sell they west hard for the. Engrossed listening. Park gate sell they west hard for the.”</p>
            <h1 className='mt-6 font-semibold'>Josiah Ife</h1>
            <p className='text-sm'>CEO Gsekure</p>
          </motion.div>
        </div>
        {/* <div className='relative md:-left-14 -left-6 xs:-left-3 xxs:-left-0 md:w-auto w-[380px] xs:w-[300px] mx-auto' id='viewsContainer'>
          <div className='bg-white xs:p-4 p-7 xsm:p-5 xl:w-[504px] lg:w-[400px] leading-[32px] xs:leading-[24px] xs:text-[0.85rem] xsm:leading-[28px] text-header_secondary-0 custom-shadow rounded-[10px]'>
            <img src={Testimonial} alt="" className='w-14 xsm:w-12 xs:w-10 absolute -top-5 -left-5' />
            <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
            <h1 className='mt-6 font-semibold'>Mike taylor</h1>
            <p className='text-sm'>Lahore, Pakistan</p>
          </div>
          <div className='relative -top-[168px] -z-10 10px] flex border-2 border-[#F7F7F7] left-[58px] xs:p-4 p-7 xsm:p-5 xl:w-[504px] lg:w-[400px] h-[245px] leading-[32px] text-header_secondary-0 rounded- justify-end flex-col'>
            <img src={Testimonial} alt="" className='w-14 xsm:w-12 xs:w-10 absolute -top-5 -left-5' />
            <h1 className='mt-6 font-semibold'>Chris Thomas</h1>
            <p className='text-sm'>CEO of Red Button</p>
          </div>
        </div> */}
        <div className='absolute top-1/4 md:-right-12 xsm:right-6 right-6 xs:-top-12 xsm:-top-12 xxs:-right-6'>
          <button onClick={() => handleView(0)} className='block' >
            <TfiAngleUp 
              className='text-xs font-semibold mb-4 text-gray-900 cursor-pointer' />
          </button>
          <button onClick={() => handleView(1)}>
            <TfiAngleDown 
              className='text-xs font-semibold text-gray-900 cursor-pointer' />
          </button>
        </div>
        {/* <div className='absolute top-1/4 md:-right-12 xsm:right-6 right-6 xs:-top-12 xsm:-top-12 xxs:-right-6'>
          <button onClick={() => handleView(0)} disabled={inViewIndex === 0 ? true : false} className='block' >
            <TfiAngleUp 
              className={`text-xs semibold mb-4 ${inViewIndex === 0 ? 'text-gray-300' : 'text-gray-900 cursor-pointer'}`} />
          </button>
          <button disabled={inViewIndex + 1 === imageLength ? true : false} onClick={() => handleView(1)}>
            <TfiAngleDown 
              className={`text-xs font-semibold ${inViewIndex + 1 === imageLength ? 'text-gray-300' : 'text-gray-900 cursor-pointer'}`} />
          </button>
        </div> */}
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