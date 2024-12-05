import { ArrowDownTrayIcon } from '@heroicons/react/20/solid';
import React from 'react'
import Image from 'next/image';

const About = () => {
  return (
    <div id="about" className='bg-[#121121] pb-[3rem] pt-[4rem] md:pt-[8rem]'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center'>
            <div>
                <h1 className='text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]'>
                    ABOUT ME
                </h1>
                <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white '>
                    Transforming <span className='text-yellow-400'>Visions</span>
                </h2>
                <div className='mb-[3rem] flex items-center md:space-x-10'>
                    {/* <span className='w-[20px] hidden md:block h-[5px] bg-slate-400 rounded-sm'></span> */}
                    <p className='text-[19px] text-slate-300 w-[80%]'>
                    My journey into software engineering began with a bold leap from the mortgage industry into tech—a decision fueled by my desire for a more dynamic, creative, and challenging career. Along the way, I’ve gained experience in Python, JavaScript, TypeScript, Flask, React, Next.js, and cloud technologies like AWS, combining my problem-solving skills with a passion for innovation.
                    <br/>
                    <br/>
                    Transitioning from the mortgage industry to full-stack development taught me the value of adaptability and perseverance. Whether collaborating with a team or tackling a complex solo project, I bring a solution-driven mindset and a commitment to continuous learning.
                    <br/>
                    <br/>
                    Outside of coding, I find inspiration in the outdoors—hiking, kayaking with my dog, and staying active through boxing and cycling. These experiences fuel my creativity and drive to transform ambitious ideas into reality.                
                    </p>
                </div>
                <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2'>
                <p>Download CV</p>
                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                </button>
            </div>
            <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
                <Image 
                    src="/images/about.jpeg" 
                    alt="user" 
                    layout="fill" 
                    objectFit="contain" 
                    className="relative z-[11] w-[100%] h-[100%] object-contain" 
                />
                <div className='absolute w-[100%] h-[100%] z-[10] bg-[#55e6a5] top-[-2rem] right-[-2rem]'></div>
            </div>
        </div>

    </div>
  );
};

export default About