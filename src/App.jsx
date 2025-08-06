import './App.css';
import HeroSection from './HeroSection.jsx';
import Navbar from './Navbar.jsx';
import RestaurantSlider from './RestaurantSlider.jsx';
import WhatWeServe from './WhatWeServe.jsx';
import MenuTabs from './MenuTabs.jsx';
import AnimatedImageText from './AnimatedImageText.jsx';
import RestaurantFooter from './RestaurantFooter.jsx';

import { useRef } from 'react';

function App() {
  // Refs for each section
  const homeRef = useRef(null);
  const menuRef = useRef(null);
  const specialsRef = useRef(null);
  const galleryRef = useRef(null);
  const serveRef = useRef(null);

  // Scroll function
  const handleScrollTo = (section) => {
    const sectionRefs = {
      home: homeRef,
      menu: menuRef,
      specials: specialsRef,
      gallery: galleryRef,
      serve: serveRef,
    };

    sectionRefs[section]?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar handleScrollTo={handleScrollTo} />

      <div ref={homeRef} className="scroll-mt-24">
        <HeroSection />
      </div>

      <div ref={galleryRef} className="scroll-mt-24">
        <RestaurantSlider />
      </div>

      <div ref={specialsRef} className="scroll-mt-24">
       <AnimatedImageText />
      </div>

      <div ref={menuRef} className="scroll-mt-24">
        <MenuTabs />
      </div>

      <div ref={serveRef} className="scroll-mt-24">
         <WhatWeServe />
      </div>

      <RestaurantFooter />
    </>
  );
}

export default App;
