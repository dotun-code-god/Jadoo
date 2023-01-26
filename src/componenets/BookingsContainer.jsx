import React from 'react';
import BookingIcon1 from '../img/BookingIcon1.png';
import BookingIcon2 from '../img/BookingIcon2.png';
import BookingIcon3 from '../img/BookingIcon3.png';
import Trip_Greece from '../img/Trip_Greece.jpg';
import Trip_Rome from '../img/Trip_Rome.png';
import MapIcon from '../img/map_icon.png';
import LeafIcon from '../img/LEAF.png';
import SendIcon from '../img/send.png';
import BuildingIcon from '../img/building.png';
import LoveVector from '../img/loveVector.png';
import ProgressBar from '../img/Progress.png';

const BookingsContainer = () => {
    return (
        <div className='md:mt-18 mt-16 xs:mt-10 xmd:flex lg:flex items-center justify-between'>
            <div>
                <h2 className='text-header_secondary-0 font-Poppins font-semibold text-[18px] mb-[10px]'>Easy and Fast</h2>
                <h1 className='capitalize text-header_primary-0 font-Volkhov font-medium lg:text-5xl xlg:text-[2.7rem] text-4xl xs:text-3xl xxs:text-2xl mt-2 w-[511px] xxsm:w-[400px] xs:w-[350px]'>Book your next trip in 3 easy steps</h1>
                <div className='flex flex-col gap-10 mt-10'>
                    <div className='font-Poppins flex items-center justify-between md:w-[395px] xsm:w-[450px] w-[450px] xs:w-full'>
                        <img src={BookingIcon1} alt="" className='w-12 mr-7 xs:mr-5' />
                        <div className='text-header_secondary-0'>
                            <h1 className='font-bold xxs:text-sm'>Choose Destination</h1>
                            <p className='text-sm xxs:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div className='font-Poppins flex items-center justify-between md:w-[395px] xsm:w-[450px] w-[450px] xs:w-full'>
                        <img src={BookingIcon2} alt="" className='w-12 mr-7 xs:mr-5' />
                        <div className='text-header_secondary-0'>
                            <h1 className='font-bold xxs:text-sm'>Make Payment</h1>
                            <p className='text-sm xxs:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                    <div className='font-Poppins flex items-center justify-between md:w-[395px] xsm:w-[450px] w-[450px] xs:w-full'>
                        <img src={BookingIcon3} alt="" className='w-12 mr-7 xs:mr-5' />
                        <div className='text-header_secondary-0'>
                            <h1 className='font-bold xxs:text-sm'>Reach Airport on Selected Date</h1>
                            <p className='text-sm xxs:text-xs'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='relative font-Poppins'>
                <span className='bg-[#59B1E6]/80 blur-[75px] w-[200px] xs:w-[165px] h-[215px] xs:h-[185px] absolute md:left-12 left-32 xsm:left-32 md:top-8 top-11'></span>
                <div className='relative xl:right-28 xlg:right-16 md:right-10 xsm:right-0 right-0 md:top-[25px] xsm:top-[70px] top-[70px] xxs:top-[50px] bg-white rounded-[26px] p-5 xxs:p-3 md:w-auto w-[321px] xsm:w-[321px] xs:w-[285px] xxs:w-[calc(100%-70px)] custom_shadow'>
                    <img src={Trip_Greece} alt="" className='w-[321px]' />
                    <div className='mt-4'>
                        <h1 className='text-[#080809] font-medium xxs:text-sm'>Trip to Greece</h1>
                        <p className='font-Poppins text-header_secondary-0 mt-2 text-sm xxs:text-xs'>14-29 June | by Robbin joseph</p>
                        <div className='mt-3 flex items-center'>
                            <img src={LeafIcon} className='mr-3 w-10 xxs:w-7 xxs:mr-1' alt="" />
                            <img src={MapIcon} className='mr-3 w-10 xxs:w-7 xxs:mr-1' alt="" />
                            <img src={SendIcon} className='mr-3 w-10 xxs:w-7 xxs:mr-1' alt="" />
                        </div>
                        <div className='text-header_secondary-0 mt-5 flex items-center justify-between'>
                            <div className='flex items-center'>
                                <img src={BuildingIcon} className='mr-2 w-6 xxs:w-4 xxs:mr-1' alt="" />
                                <p className='text-sm xxs:text-xs'>24 people going</p>
                            </div>
                            <img src={LoveVector} className='w-7 xs:w-5' alt="" />
                        </div>
                    </div>
                    <div className='bg-white absolute md:top-[205px] top-[190px] xsm:top-[195px] xs:top-[180px] xxs:top-[150px] left-full xxs:left-[calc(100%-10px)] -translate-x-1/2 flex items-start rounded-[18px] p-4 xxs:p-2 xl:w-64 md:w-52 w-56 xsm:w-56 xxs:w-44 custom_shadow'>
                        <img src={Trip_Rome} className='mr-3 xxs:mr-2 w-10 xxs:w-7' alt="" />
                        <div className='text-header_primary-0'>
                            <p className='text-header_secondary-0 text-[14px] font-medium xxs:text-sm'>Ongoing</p>
                            <h2 className='text-[#080809] text-sm xxs:text-xs'>Trip to rome</h2>
                            <div className='mt-1'>
                                <p className='text-xs'><span className='text-[#8A79DF]'>40%</span> complete</p>
                                <img src={ProgressBar} alt="" className='mt-1 xxs:w-[calc(100%-20px)]' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookingsContainer