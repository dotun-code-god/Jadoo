import React from 'react';
import Decore from '../img/Decore.png';
import Decore1 from '../img/Decore1.png';
import PlayButton from '../img/Play_Button.png';
import Traveller from '../img/Traveller.png';

const HeroContainer = () => {
  return (
    <div>
      <span className='absolute -top-16 -left-[26rem] w-[30rem] h-[31rem] bg-[#D5AEE4]/30 blur-[75px] rounded-full'></span>
      <img src={Decore} alt=""
        className='absolute top-0 right-0 -z-10 xl:h-[710px] xl:w-[677px] lg:w-[530px] lg:h-[556px] sm:w-[415px] sm:h-[472px] h-[450px] opacity-70' />
      <div className='xl:mt-[22px] mt-[12px]'>
        <div className='xl:pt-[134px] lg:pt-[95px] md:pt-[65px]'>
          <div className=' sm-max:mt-24'>
            <div className='xsm:mt-6 xs:mt-20 xxs:mt-16'>
              <h2 className='uppercase font-Poppins font-bold text-[17px] sm-max:text-base xxsm:text-sm xs:text-xs text-[#DF6951]'>Best Destinations around <span className='xs:block'>the world</span></h2>
              <p
                className='relative font-Volkhov font-bold lg:w-[545px] w-[450px] sm-max:w-[350px] xxsm:w-[300px] xs:w-[230px] xxs:w-[200px] xl:text-[76px] lg:text-[70px] 
                md:text-[56px] sm-max:text-5xl xxsm:text-[38px] xs:text-[30px] xxs:text-[25px] xl:tracking-[-0.04em] xl:leading-[89px] lg:leading-[80px] md:leading-[65px] 
                sm-max:leading-[60px] xxsm:leading-[48px] xs:leading-[40px] xxs:leading-[33px] mt-6 sm-max:mt-3 xs:mt-3 text-[#181E4B]'>
                Travel, <span>enjoy</span> and live a new and full life
                <img src={Decore1} alt="" 
                  className='absolute lg:w-[385px] w-[300px] lg:top-[69px] top-[50px] lg:left-[230px] 
                    left-[175px] sm-max:left-[150px] sm-max:top-[45px] xxsm:w-[200px] xs:w-[180px] xxs:w-[130px] xxs:left-[75px] xxs:top-[26px] xxsm:left-[120px] xxsm:top-[40px] xs:left-[90px] xs:top-[32px] -z-10' 
                />
              </p>
            </div>
            <div className='sm:block flex items-center justify-center flex-col sm-max:mt-12 xs:mt-8'>
              <p className='xl:w-[477px] w-[400px] xsm:w-[500px] sm-max:w-[450px] xs:w-[350px] xxs:w-[300px] sm:text-left xs:text-sm text-center text-[#5E6282] font-Poppins mt-[30px] leading-[30px] font-medium'>Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p>
              <div className='mt-[34px] flex items-center'>
                <button className='px-6 xs:px-4 py-4 xs:py-2 mr-11 xs:mr-6 rounded-[10px] bg-[#F1A501] font-Google_Sans text-white' style={{ "boxShadow": "0px 20px 35px rgba(241, 165, 1, 0.15)" }} >Find out more</button>
                <span className='bg-[#DF6951] w-[52px] h-[52px] xs:w-10 xs:h-10 rounded-full flex items-center justify-center' style={{ "boxShadow": "0px 15px 30px rgba(223, 105, 81, 0.3)" }}>
                  <img src={PlayButton} alt="" />
                </span>
                <span className='font-Poppins ml-[21px] xs:ml-3 xs:text-sm text-[#686D77]'>Play Demo</span>
              </div>
            </div>
          </div>
          <div className='absolute top-[110px] right-[50px] w-[500px] xsm:w-[385px] sm-max:w-[350px] xxs:w-[210px] xs:w-[270px] xxsm:w-[310px] xs:right-0 sm-max:right-0 lg:hidden block'>
            <img src={Traveller} alt="" />
          </div>
        </div>
        <div className='absolute xl:top-[105px] lg:top-[140px] top-[180px] left-[500px] xl:max-w-[765px] xl:mr-0 md:mr-12 lg:mr-16 h-[764px] lg:block hidden'>
          <img src={Traveller} alt="" />
        </div>
      </div>
    </div>
  )
}

export default HeroContainer