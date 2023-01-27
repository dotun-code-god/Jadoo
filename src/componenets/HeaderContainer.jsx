import React, { useRef } from 'react';
import Logo from '../img/Logo.png';
import { TfiAngleDown} from 'react-icons/tfi';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle, Navigation } from './index';

const sidebar = {
  open: (height = 1000) => ({
    // clipPath: "circle(30px at 40px 40px)",
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const HeaderContainer = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef= useRef(null);
  
  return (
    <div className='md:py-8 py-5 fixed top-0 w-full right-0 z-[990] shadow-lg bg-white'>
      <div className='flex items-center justify-between xl:px-[140.92px] lg:px-[95px] md:px-[65px] px-[4%]'>
        <img src={Logo} alt="Logo" className='w-28'/>
          <ul className='md:flex hidden xl:gap-16 lg:gap-10 md:gap-4 text-[#212832] font-Google_Sans items-center font-medium'>
            <li><a href="/">Destinations</a></li>
            <li><a href="/">Hotels</a></li>
            <li><a href="/">Flights</a></li>
            <li><a href="/">Bookings</a></li>
            <li><a href="/">Login</a></li>
            <li className='border-[#212832] border-[1px] px-[14px] py-1 rounded-md'>Sign up</li>
            <li className='flex items-center'>
              <span className='mr-1'>EN</span> 
              <TfiAngleDown className='text-[0.6rem]' />
            </li>       
        </ul>
      {/* On mobile devices */}
      <motion.nav
        className='md:hidden block rounded-full'
        initial={false}
        animate={isOpen ? "open" : "closed"}
        ref={containerRef}
      >
          <motion.div className='absolute z-[99] -top-[5px] right-0 bg-[#D5AEE4]/80 bottom-0 w-[90px]' variants={sidebar}>
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </motion.nav>
      </div>
    </div>
  )
}

export default HeaderContainer