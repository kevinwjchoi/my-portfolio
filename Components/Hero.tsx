import React from 'react';
import Particle from './Particle';
import TextEffect from './TextEffect';
import Image from 'next/image';
import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';

const Hero = () => {
  return (
    <div id="home" className="h-[88vh] bg-[url('/images/banner.jpg')] mt-[12vh] bg-cover bg-center">
      <Particle />
      <div className='relative z-10 w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
        <div>
          <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
            HI, IM <span className='text-yellow-400'>KEVIN</span>
          </h1>
          <TextEffect />
          <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
            Dedicated software engineer who specializes in building intuitive, functional, and impactful applications. With expertise in both front-end and back-end technologies, I’m passionate about crafting solutions that enhance user experiences and drive meaningful results.          </p>
          <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
            <a 
              href="/Kevin-Choi-Resume.pdf" 
              download
              className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'
            >
              <p>Download CV</p>
              <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
            </a>
          </div>
        </div>
        <div className='w-[500px] hidden bg-[#55e6a5] relative lg:flex items-center rounded-full h-[500px]'>
          <Image src="/images/u1.jpg" alt="user" layout="fill" className="object-cover rounded-full"/>
        </div>
      </div>
    </div> 
  );
}

export default Hero;
