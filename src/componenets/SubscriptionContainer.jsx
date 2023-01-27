import React from 'react';
import Decore3 from '../img/Decore3.png';
import Decore4 from '../img/Decore4.png';
import Decore5 from '../img/Decore5.png';
import Send2 from '../img/send2.png';
import MailIcon from '../img/MailIcon.png';

const SubscriptionContainer = () => {
    return (
        <div className='relative flex items-center justify-center flex-col xl:h-[407px] sm:h-[350px] h-[300px] xxs:w-full xxs:h-[250px] bg-[#DFD7F9]/20 rounded-[129px_20px_20px_20px] font-Poppins px-36'>
            <img src={Decore3} className='absolute bottom-0 left-6 opacity-10 sm:w-auto w-[240px]' alt="" />
            <img src={Decore4} className='absolute top-0 right-0 opacity-10 sm:w-auto w-[150px]' alt="" />
            <h1 className='xl:w-[850px] lg:w-[750px] md:w-[560px] sm:w-[450px] w-[360px] xxs:w-[280px] inline text-center xl:text-[30px] sm:text-[25px] text-[18px] xxs:text-base leading-[25px] xxs:leading-[22px] md:leading-[40px] sm:leading-[35px] xl:leading-[54px] lg:leading-[45px] font-semibold text-header_secondary-0'>Subscribe to get information, latest news and other
                interesting offers about Jadoo
            </h1>
            <div className='lg:mt-[74px] sm:mt-[65px] mt-[45px] xxs:mt-[20px] flex xxs:flex-col items-center z-10'>
                <div className='flex items-center'>
                    <img src={MailIcon} className='w-5 relative sm:left-10 left-8' alt="" />
                    <input type="text" placeholder='Your email' className='sm:text-base text-sm rounded-[10px] px-[31px] sm:pl-[55px] pl-[43px] xl:w-[380px] sm:w-[300px] w-[250px] xs:w-[200px] xxs:w-[250px] xl:py-[23px] md:py-[18px] py-[14px] placeholder:font-normal placeholder:text-header_primary-0 mr-6 font-Montserrat' />
                </div>
                <button className='text-white font-semibold font-Open_Sans rounded-[10px] xl:w-[180px] sm:w-[150px] w-[100px] sm:text-base text-sm xl:h-[68px] md:h-[56px] sm:h-[50px] h-[45px] xxs:mt-3' style={{ backgroundImage: "linear-gradient(180deg, #FF946D 0%, #FF7D68 100%)" }}>Subscribe</button>
            </div>
            <img src={Send2} className='absolute -top-4 -right-4 md:w-[70px] w-[60px] xs:w-[50px] xxs:w-[40px]' alt="" />
            <img src={Decore5} className='absolute xl:-bottom-16 -bottom-10 xl:-right-24 -right-16 xl:w-[140px] md:w-[100px] md:block hidden' alt="" />
        </div>
    )
}

export default SubscriptionContainer