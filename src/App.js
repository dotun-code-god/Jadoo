import React from 'react';
import { HeaderContainer, HeroContainer, CategoryContainer } from './componenets';

const App = () => {
  return (
    <div className='xl:mx-[140.92px] lg:mx-[95px] md:mx-[65px] mx-[3%]'>
      <HeaderContainer />
      <HeroContainer />
      <CategoryContainer />
    </div>
  )
}

export default App