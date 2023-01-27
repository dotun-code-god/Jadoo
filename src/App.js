import React from 'react';
import { HeaderContainer, HeroContainer, CategoryContainer, DestinationsContainer, 
  BookingsContainer, TestimonialsContainer, SponsorsContainer, SubscriptionContainer, FooterContainer } from './componenets';

const App = () => {
  return (
    <div className='xl:mx-[140.92px] lg:mx-[95px] md:mx-[65px] mx-[4%]'>
      <HeaderContainer />
      <HeroContainer />
      <CategoryContainer />
      <DestinationsContainer />
      <BookingsContainer />
      <TestimonialsContainer />
      <SponsorsContainer />
      <SubscriptionContainer />
      <FooterContainer />
    </div>
  )
}

export default App