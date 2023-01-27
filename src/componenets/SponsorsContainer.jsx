import React from 'react';
import Sponsor1 from '../img/Sponsor1.png'
import Sponsor2 from '../img/Sponsor2.png'
import Sponsor3 from '../img/Sponsor3.png'
import Sponsor4 from '../img/Sponsor4.png'
import Sponsor5 from '../img/Sponsor5.png'

const SponsorsContainer = () => {
  return (
    <div className='grid grid-cols-5 items-center md:-mt-16 xs:-mt-8'>
      <div className='flex items-center justify-start '>
        <img src={Sponsor1} className='mix-blend-luminosity' alt="" />
      </div>
      <div className='flex items-center justify-start '>
        <img src={Sponsor2} className='mix-blend-luminosity' alt="" />
      </div>
      <div className='flex items-center justify-center '>
        <img src={Sponsor3} className='mix-blend-luminosity' alt="" />
      </div>
      <div className='flex items-center justify-end '>
        <img src={Sponsor4} className='mix-blend-luminosity' alt="" />
      </div>
      <div className='flex items-center justify-end '>
        <img src={Sponsor5} className='mix-blend-luminosity' alt="" />
      </div>
    </div>
  )
}

export default SponsorsContainer