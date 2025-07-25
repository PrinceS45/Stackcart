import React, { useEffect, useState } from 'react'
import HeroSection from '../sections/HeroSection'
import Section2 from '../sections/Section2'
import Section3 from '../sections/Section3'
import Section4 from '../sections/Section4'
import Section5 from '../sections/Section5'
import Section6 from '../sections/Section6'
import Section7 from '../sections/Section7'
import Section8 from '../sections/Section8'
import Section9 from '../sections/Section9'
import Section10 from '../sections/Section10'
import Section11 from '../sections/Section11'
import Section12 from '../sections/Section12'
import Section13 from '../sections/Section13'
import Navbar from '../components/Navbar'

function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='relative z-10'>
      {scrolled && (
        <div className='fixed top-0 left-0 w-full z-50 bg-[#fdfdfd] text-[#001128] shadow-md'>
          <Navbar />
        </div>
      )}
      <HeroSection />
      <div className='relative z-10'><Section2 /></div>
      <div className='relative z-10'><Section3 /></div>
      <div className='relative z-10'><Section4 /></div>
      <div className='relative z-10'><Section5 /></div>
      <div className='relative z-10'><Section6 /></div>
      <div className='relative z-10'><Section7 /></div>
      <div className='relative z-10'><Section8 /></div>
      <div className='relative z-10'><Section9 /></div>
      <div className='relative z-10'><Section10 /></div>
      <div className='relative z-10'><Section11 /></div>
      <div className='relative z-10'><Section12 /></div>
      <div className='relative z-10'><Section13 /></div>
    </div>
  )
}

export default Home