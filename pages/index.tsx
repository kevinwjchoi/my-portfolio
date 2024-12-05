import React, { useState } from 'react'
import Nav from '@/Components/Nav';
import MobileNav from '@/Components/MobileNav';
import Hero from '@/Components/Hero';
import About from '@/Components/About';
import Services from '@/Components/Services';
import Skills from '@/Components/Skills';

import Footer from '@/Components/Footer';

// import Projects from '@/Components/Projects';
// import Testimonials from '@/Components/Testimonials';
// import Blog from '@/Components/Blog';


const HomePage = () => {

  const [nav, setNav] = useState(false);
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false)

  return (
    <div className="overflow-x-hidden relative">
      {/* Particle Background */}
      <div className="relative z-10"> {/* Ensure other content is above particles */}
        {/* NavBar */}
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
        {/* Hero Section */}
        <Hero />
        <div className='relative z-[30]'>
        {/* About me */}
          <About/>
        {/* Services */}
          <Services/>
        {/* Skills */}
        <Skills />
        {/* Skills */}
        {/* <Projects /> */}

        {/* Testimonials */}
        {/* <Testimonials /> */}

        {/* Blog */}
        {/* <Blog /> */}

        {/* Footer */}
        <Footer />
        </div>

      </div>
    </div>
  );
}

export default HomePage;
