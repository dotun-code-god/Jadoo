import React from 'react';
import Group_4 from '../img/Group_4.png';
import SatelliteDish from '../img/Satellite.png';
import Plane from '../img/Plane.png';
import MicroPhone from '../img/Microphone.png';
import Settings from '../img/Settings.png';

const CategoryContainer = () => {
    return (
        <div className='relative mt-[175px]'>
            <img src={Group_4} className='absolute -right-[58px] w-[153px] h-[166px]' alt="" />
            <div className='flex items-center justify-center flex-col'>
                <h2 className='uppercase text-header_secondary-0 font-Poppins font-semibold text-[18px] mb-[10px]'>Category</h2>
                <h1 className='text-header_primary-0 font-Volkhov font-medium text-5xl'>We Offer Best Services</h1>
                <div className='grid grid-cols-4 mt-[90px]'>
                    <div className='flex items-center justify-center flex-col px-11 py-10'>
                        <div className='relative'>
                            <img src={SatelliteDish} alt="" className='w-[56px]' />
                            <span className='absolute -z-10 -bottom-2 -right-7 bg-[#FFF1DA] w-12 h-12' style={{borderRadius:"18px 5px 10px", transform:"rotate(-180deg)"}}></span>
                        </div>
                        <div className='flex flex-col items-center justify-center mt-[30px]'>
                            <h1 className='font-[600] font-Open_Sans text-header_primary-0'>Calculated Weather</h1>
                            <p className='text-center mt-4 font-Poppins font-medium text-header_secondary-0'>Built Wicket longer admire do barton vanity itself do in it.</p>
                        </div>
                    </div>
                    <div className='relative flex items-center justify-center flex-col px-11 py-10 rounded-[36px] bg-white' 
                        style={{ boxShadow:"0px 100px 80px rgba(0, 0, 0, 0.02), 0px 64.8148px 46.8519px rgba(0, 0, 0, 0.0151852), 0px 38.5185px 25.4815px rgba(0, 0, 0, 0.0121481), 0px 20px 13px rgba(0, 0, 0, 0.01), 0px 8.14815px 6.51852px rgba(0, 0, 0, 0.00785185), 0px 1.85185px 3.14815px rgba(0, 0, 0, 0.00481481)"}}>
                        <div className='relative'>
                            <img src={Plane} alt="" className='w-[88px] relative z-10' />
                            <span className='absolute -top-2 left-4 bg-[#FFF1DA] w-12 h-12' style={{ borderRadius: "18px 5px 10px", transform:"matrix(1, 0, 0, -1, 0, 0)"}}></span>
                        </div>
                        <div className='flex flex-col items-center justify-center mt-[31px]'>
                            <h1 className='font-[600] font-Open_Sans text-header_primary-0'>Best Flights</h1>
                            <p className='text-center mt-4 font-Poppins font-medium text-header_secondary-0'>Engrossed listening. Park gate sell they west hard for the.</p>
                        </div>
                        <span className='bg-[#DF6951] w-[100px] h-[100px] absolute -bottom-[35px] -left-[40px] -z-10' style={{ borderRadius: "30px 0px 10px" }}></span>
                    </div>
                    <div className='flex items-center justify-center flex-col px-11 py-10'>
                        <div className='relative'>
                            <img src={MicroPhone} alt="" className='w-[48px]' />
                            <span className='absolute -z-10 -top-1 -right-6 bg-[#FFF1DA] w-[50px] h-[50px]' style={{ borderRadius: "18px 5px 10px", transform: "matrix(-1, 0, 0, 1, 0, 0)" }}></span>
                        </div>
                        <div className='flex flex-col items-center justify-center mt-[30px]'>
                            <h1 className='font-[600] font-Open_Sans text-header_primary-0'>Local Events</h1>
                            <p className='text-center mt-4 font-Poppins font-medium text-header_secondary-0'>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                        </div>
                    </div>
                    <div className='flex items-center justify-center flex-col px-11 py-10'>
                        <div className='relative'>
                            <img src={Settings} alt="" className='w-[80px]' />
                            <span className='absolute -z-10 -bottom-2 -right-3 bg-[#FFF1DA] w-12 h-12' style={{ borderRadius: "18px 5px 10px", transform: "matrix(1, 0, 0, -1, 0, 0)" }}></span>
                        </div>
                        <div className='flex flex-col items-center justify-center mt-[30px]'>
                            <h1 className='font-[600] font-Open_Sans text-header_primary-0'>Customization</h1>
                            <p className='text-center mt-4 font-Poppins font-medium text-header_secondary-0'>We deliver outsourced aviation services for military customers</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryContainer