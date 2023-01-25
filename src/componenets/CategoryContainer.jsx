import React from 'react';
import Group_4 from '../img/Group_4.png';
import SatelliteDish from '../img/Satellite.png';
import Plane from '../img/Plane.png';
import MicroPhone from '../img/Microphone.png';
import Settings from '../img/Settings.png';

const CategoryContainer = () => {
    return (
        <div className='relative lg:mt-[200px] md:mt-[175px] mt-[130px] xs:mt-[100px]'>
            <img src={Group_4} className='absolute lg:-right-[58px] sm:right-0 right-10 xs:right-5 lg:-top-10 sm:-top-28 -top-20 lg:w-[153px] md:w-[120px] sm-max:w-[95px] xs:w-[85px] lg:h-[166px] h-[135x]' alt="" />
            <div className='flex items-center justify-center flex-col'>
                <h2 className='uppercase text-header_secondary-0 font-Poppins font-semibold text-[18px] mb-[10px]'>Category</h2>
                <h1 className='text-header_primary-0 font-Volkhov font-medium md:text-5xl text-4xl xs:text-3xl xxs:text-2xl'>We Offer Best Services</h1>
                <div className='grid md:grid-cols-4 grid-cols-2 md:gap-0 gap-y-6 mt-[90px] xs:mt-[70px] xxs:mt-[35px]'>
                    <div className='flex items-center justify-center flex-col xl:px-11 px-5 xxs:px-3 md:w-auto sm:w-[250px] sm-max:w-[220px] xs:w-[185px] xxs:w-[145px] xl:py-10 py-4'>
                        <div className='relative'>
                            <img src={SatelliteDish} alt="" className='w-[56px]' />
                            <span className='rounded-[18px_5px_10px] absolute -z-10 -bottom-2 -right-7 bg-[#FFF1DA] w-12 h-12' style={{transform:"rotate(-180deg)"}}></span>
                        </div>
                        <div className='flex flex-col items-center justify-center mt-[30px]'>
                            <h1 className='font-[600] font-Open_Sans text-header_primary-0 lg:text-base text-[0.9rem] text-center'>Calculated Weather</h1>
                            <p className='text-center sm:mt-4 mt-3 xs:mt-2 font-Poppins font-medium text-header_secondary-0 xl:text-base lg:text-[0.9rem] md:text-[0.8rem] text-sm xxs:text-xs'>Built Wicket longer admire do barton vanity itself do in it.</p>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center flex-col xl:px-11 px-5 xxs:px-3 md:w-auto sm:w-[250px] sm-max:w-[220px] xs:w-[185px] xxs:w-[145px] xl:py-10 :py-4 rounded-[36px] bg-white' 
                        style={{ boxShadow:"0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)"}}>
                        <div className='relative'>
                            <img src={Plane} alt="" className='lg:w-[88px] w-[80px] relative z-10' />
                            <span className='rounded-[18px_5px_10px] absolute -top-2 left-4 bg-[#FFF1DA] w-12 h-12' style={{ transform:"matrix(1, 0, 0, -1, 0, 0)"}}></span>
                        </div>
                        <div className='flex flex-col items-center justify-center mt-[31px]'>
                            <h1 className='font-[600] font-Open_Sans text-header_primary-0 lg:text-base text-[0.9rem] text-center'>Best Flights</h1>
                            <p className='text-center sm:mt-4 mt-3 xs:mt-2 font-Poppins font-medium text-header_secondary-0 xl:text-base lg:text-[0.9rem] md:text-[0.8rem] text-sm xxs:text-xs'>Engrossed listening. Park gate sell they west hard for the.</p>
                        </div>
                        <span className='bg-[#DF6951] xl:w-[100px] md:w-[75px] w-[55px] xl:h-[100px] md:h-[75px] h-[55px] absolute xl:-bottom-[35px] md:-bottom-[20px] -bottom-[18px] xl:-left-[40px] md:-left-[25px] -left-[18px] -z-10 md:rounded-[30px_0px_10px] rounded-[20px_0px_5px]'></span>
                    </div>
                    <div className='bg-white relative flex items-center justify-center flex-col xl:px-11 px-5 xxs:px-3 md:w-auto sm:w-[250px] sm-max:w-[220px] xs:w-[185px] xxs:w-[145px] xl:py-10 py-4 rounded-[36px] md:shadow-0 md:shadow-white
                    shadow-[0px_100px_80px_rgba(0,0,0,0.02),0px_64.8148px_46.8519px_rgba(0,0,0,0.0151852),0px_38.5185px_25.4815px_rgba(0,0,0,0.0121481),0px_20px_13px_rgba(0,0,0,0.01),0px_8.14815px_6.51852px_rgba(0,0,0,0.00785185),0px_1.85185px_3.14815px_rgba(0,0,0,0.00481481)]'>
                        <div className='relative'>
                            <img src={MicroPhone} alt="" className='xl:w-[48px] w-[33px]' />
                            <span className='rounded-[18px_5px_10px] absolute -z-10 -top-1 -right-6 bg-[#FFF1DA] w-[50px] h-[50px]' style={{ transform: "matrix(-1, 0, 0, 1, 0, 0)" }}></span>
                        </div>
                        <div className='flex flex-col items-center justify-center mt-[30px]'>
                            <h1 className='font-[600] font-Open_Sans text-header_primary-0 lg:text-base text-[0.9rem] text-center'>Local Events</h1>
                            <p className='text-center sm:mt-4 mt-3 xs:mt-2 font-Poppins font-medium text-header_secondary-0 xl:text-base lg:text-[0.9rem] md:text-[0.8rem] text-sm xxs:text-xs'>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                        </div>
                        <span className='bg-[#DF6951] md:hidden xl:w-[100px] md:w-[75px] w-[55px] xl:h-[100px] md:h-[75px] h-[55px] absolute xl:-bottom-[35px] md:-bottom-[20px] -bottom-[18px] xl:-left-[40px] md:-left-[25px] -left-[18px] -z-10 md:rounded-[30px_0px_10px] rounded-[20px_0px_5px]'></span>
                    </div>
                    <div className='flex items-center justify-center flex-col xl:px-11 px-5 xxs:px-3 md:w-auto sm:w-[250px] sm-max:w-[220px] xs:w-[185px] xxs:w-[145px] xl:py-10 py-4'>
                        <div className='relative'>
                            <img src={Settings} alt="" className='xl:w-[80px] w-[56px]' />
                            <span className='rounded-[18px_5px_10px] absolute -z-10 -bottom-2 -right-3 bg-[#FFF1DA] w-12 h-12' style={{ transform: "matrix(1, 0, 0, -1, 0, 0)" }}></span>
                        </div>
                        <div className='flex flex-col items-center justify-center mt-[30px]'>
                            <h1 className='font-[600] font-Open_Sans text-header_primary-0 lg:text-base text-[0.9rem] text-center'>Customization</h1>
                            <p className='text-center sm:mt-4 mt-3 xs:mt-2 font-Poppins font-medium text-header_secondary-0 xl:text-base lg:text-[0.9rem] md:text-[0.8rem] text-sm xxs:text-xs'>We deliver outsourced aviation services for military customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryContainer