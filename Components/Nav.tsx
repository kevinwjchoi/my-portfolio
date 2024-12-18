import { Bars3Icon } from '@heroicons/react/16/solid'
import React from 'react'

interface Props {
    openNav:()=> void;  
}

const Nav = ({openNav}:Props) => {
    return (
        <div className="w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#1e242c] shadow-md">
          <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
            <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
              FULL
              <span className="text-yellow-300">STACK</span>
            </h1>
            <a href="#home" className="nav-link">Home</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#services" className="nav-link">Services</a>
            <a href="#skills" className="nav-link">Skills</a>
            {/* <a href="#projects" className="nav-link">Projects</a> */}
            <a href="#contact" className="nav-link">Contact</a>
            <div onClick={openNav}>
              <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300'/>
            </div>
          </div>
        </div>
    );
}

export default Nav