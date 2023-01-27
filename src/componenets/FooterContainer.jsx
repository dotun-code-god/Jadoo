import React from 'react';
import Jadoo from '../img/Jadoo..png';
import SocialFaceBook from '../img/SocialFacebook.png';
import SocialTwitter from '../img/SocialTwitter.png'
import SocialInstagram from '../img/SocialInstagram.png';
import GooglePlay from '../img/GooglePlay.png';
import ApplePlay from '../img/ApplePlayStore.png';

const FooterContainer = () => {
  return (
    <div className='mt-32 font-Poppins'>
        <div className='grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-3 text-header_secondary-0'>
            <div className='flex flex-col justify-start sm:items-start items-center'>
                <img src={Jadoo} className='w-[152px]' alt="" />
                <p className='xl:w-[207px] w-[195px] xxs:w-[150px] mt-7 text-[14px] xxs:text-[13px]'>Book your trip in minute, get full Control for much longer.</p>
            </div>
            <div className='flex flex-col items-center justify-start'>
                <div className='sm:block flex flex-col items-center'>
                    <h1 className='text-[#080809] font-bold text-[21px]'>Company</h1>
                    <ul className='mt-7 text-[15px]'>
                        <li className='mt-2'>About</li>
                        <li className='mt-2'>Careers</li>
                        <li className='mt-2'>Mobile</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start sm:mt-0 mt-5'>
                <div className='sm:block flex flex-col items-center'>
                    <h1 className='text-[#080809] font-bold text-[21px]'>Contact</h1>
                    <ul className='mt-7 text-[15px]'>
                        <li className='mt-2'>Help/FAQ</li>
                        <li className='mt-2'>Press</li>
                        <li className='mt-2'>Affilates</li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col items-center justify-start md:mt-0 mt-5'>
                <div className='sm:block flex flex-col items-center'>
                    <h1 className='text-[#080809] font-bold text-[21px]'>More</h1>
                    <ul className='mt-7 text-[15px]'>
                        <li className='mt-2'>Airline fees</li>
                        <li className='mt-2'>Airline</li>
                        <li className='mt-2'>Low fare tips</li>
                    </ul>
                </div>
            </div>
            <div className='sm:flex hidden flex-col items-center justify-start md:col-start-2 lg:col-start-5 md:col-span-2 lg:col-span-1 lg:mt-0 mt-5 sm:col-start-3 col-span-1'>
                <div>
                    <div className='flex items-center'>
                        <img src={SocialFaceBook} alt="" />
                        <img src={SocialInstagram} className='w-16' alt="" />
                        <img src={SocialTwitter} className='w-16' alt="" />
                    </div>
                    <h1 className='mt-3'>Discover our app</h1>
                    <div className='flex items-center justify-between mt-4'>
                        <img className='w-[90px]' src={GooglePlay} alt="" />
                        <img className='w-[90px]' src={ApplePlay} alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className='flex sm:hidden flex-col items-center justify-start md:col-start-2 lg:col-start-5 md:col-span-2 lg:col-span-1 lg:mt-0 mt-5 sm:col-start-3 col-span-1'>
            <div>
                <div className='flex items-center'>
                    <img src={SocialFaceBook} alt="" />
                    <img src={SocialInstagram} className='w-16' alt="" />
                    <img src={SocialTwitter} className='w-16' alt="" />
                </div>
                <h1 className='mt-3'>Discover our app</h1>
                <div className='flex items-center justify-between mt-4'>
                    <img className='w-[90px]' src={GooglePlay} alt="" />
                    <img className='w-[90px]' src={ApplePlay} alt="" />
                </div>
            </div>
        </div>
        <p className='my-20 xs:my-16 xxs:my-12 text-center text-header_secondary-0 text-sm'>All rights reserved@jadoo.co</p>
        {/* <span className='absolute top-[4357px] w-[30rem] h-[31rem] bg-[#D5AEE4]/30 blur-[75px] rounded-full'></span> */}
    </div>
  )
}

export default FooterContainer