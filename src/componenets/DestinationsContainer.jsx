import React from 'react';
import Italy from '../img/Italy.png';
import London from '../img/London.jpg';
import Europe from '../img/Europe.png';
import Navigation from '../img/Navigation.png';
import Decore2 from '../img/Decore2.png';

const DestinationsContainer = () => {
    return (
        <div className='lg:mt-[160px] md:mt-[155px] mt-[120px] xs:mt-[90px] flex items-center justify-center flex-col xs:mx-2'>
            <h2 className='text-header_secondary-0 font-Poppins font-semibold text-[18px] mb-[10px]'>Top Selling</h2>
            <h1 className='text-header_primary-0 font-Volkhov font-medium md:text-5xl text-4xl xs:text-3xl xxs:text-2xl mt-2'>Top Destinations</h1>
            <div className='relative grid grid-cols-3 xs:grid-cols-1 sm-max:grid-cols-4 xl:gap-12 lg:gap-10 sm-max:gap-6 md:gap-6 md:my-24 my-20 font-Poppins font-medium text-header_secondary-0'>
                <img src={Decore2} className='absolute lg:-right-16 md:-right-10 xl:top-36 md:top-16 w-24 lg:h-64 h-56 -z-10 sm:block hidden' alt="" />
                <div
                    className='sm-max:col-span-2 relative rounded-[24px] xl:w-[320px] lg:w-[250px] xlg:w-[295px] md:w-[205px] xmd:w-[235px]  xxsm:w-[220px] sm-max:w-[260px] xs-[200px] '>
                    <img src={Italy} className='object-cover w-full custom-drop-shadow' alt=""
                    />
                    <div className='lg:text-base text-sm absolute -bottom-[0.3rem] bg-white w-full rounded-[0px_0px_24px_24px] px-6 pt-6 pb-10'>
                        <div className='flex items-center justify-between'>
                            <p>Rome, Italy</p>
                            <p>$5,42k</p>
                        </div>
                        <div className='pt-5 flex items-center'>
                            <img src={Navigation} alt="Navigation Icon" className='w-4 mr-4' />
                            <p>10 Days Trip</p>
                        </div>
                    </div>
                </div>
                <div
                    className='sm-max:col-span-2 relative rounded-[24px] xl:w-[320px] lg:w-[250px] xlg:w-[295px] md:w-[205px] xmd:w-[235px] xxsm:w-[220px] sm-max:w-[260px] xs-[200px] '>
                    <img src={London} className='object-cover w-ful custom-drop-shadow' alt=""
                    />
                    <div className='lg:text-base text-sm absolute -bottom-[0.3rem] bg-white w-full rounded-[0px_0px_24px_24px] px-6 pt-6 pb-10'>
                        <div className='flex items-center justify-between'>
                            <p>London, UK</p>
                            <p>$4.2k</p>
                        </div>
                        <div className='pt-5 flex items-center'>
                            <img src={Navigation} alt="Navigation Icon" className='w-4 mr-4' />
                            <p>12 Days Trip</p>
                        </div>
                    </div>
                </div>
                <div
                    className='sm-max:col-start-2 sm-max:col-span-2 relative rounded-[24px] xl:w-[320px] lg:w-[250px] xlg:w-[295px] md:w-[205px] xmd:w-[235px]  xxsm:w-[220px] sm-max:w-[260px] xs-[200px] '>
                    <img src={Europe} className='object-cover w-full custom-drop-shadow' alt=""
                    />
                    <div className='lg:text-base text-sm absolute -bottom-[0.3rem] bg-white w-full rounded-[0px_0px_24px_24px] px-6 pt-6 pb-10'>
                        <div className='flex items-center justify-between'>
                            <p>Full Europe</p>
                            <p>$15k</p>
                        </div>
                        <div className='pt-5 flex items-center'>
                            <img src={Navigation} alt="Navigation Icon" className='w-4 mr-4' />
                            <p>28 Days Trip</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DestinationsContainer