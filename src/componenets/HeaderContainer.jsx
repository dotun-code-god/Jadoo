import React, { useRef } from 'react';
import Logo from '../img/Logo.png';
import { TfiAngleDown} from 'react-icons/tfi';
import { motion, useCycle } from 'framer-motion';
import { MenuToggle, Navigation } from './index';

const sidebar = {
  open: (height = 1000) => ({
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
    <div className='md:mt-12 mt-8 flex items-center justify-between'>
        <img src={Logo} alt="Logo" className='w-28'/>
          <ul className='md:flex hidden xl:gap-16 lg:gap-10 md:gap-4 text-[#212832] font-Google_Sans items-center font-medium'>
            <li>Destinations</li>
            <li>Hotels</li>
            <li>Flights</li>
            <li>Bookings</li>
            <li>Login</li>
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
        <motion.div className='absolute z-[99] top-[10px] right-0 bottom-0 w-[90px] bg-white' variants={sidebar}>
          <Navigation />
          <MenuToggle toggle={() => toggleOpen()} />
        </motion.div>
      </motion.nav>
    </div>
  )
}

export default HeaderContainer