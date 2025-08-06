import './App.css'
import HeroSection from './HeroSection.jsx'
import Navbar from  './Navbar.jsx'
import RestaurantSlider from './RestaurantSlider.jsx'
import 'aos/dist/aos.css'; 
import WhatWeServe from './WhatWeServe.jsx';
import MenuTabs from './MenuTabs.jsx';
import AnimatedImageText from  './AnimatedImageText.jsx'
import RestaurantFooter from './RestaurantFooter.jsx';

function App() {
  
  return (
    <>
   <Navbar/>
   <HeroSection/>
   <RestaurantSlider/>
   <WhatWeServe/>
   <MenuTabs/>
   <AnimatedImageText/>
   <RestaurantFooter/>
          </>
  )
}

export default App
