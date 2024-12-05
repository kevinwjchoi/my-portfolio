import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid';
import React from 'react'

const Services = () => {
  return (
    <div id="services" className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
        <p className='heading'> 
            My <span className='text-yellow-400'>Services</span>
        </p> 
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
            <div className='bg-blue-700 hover:scale-110 transform transition-all duration-300 hover:-rotate-6 font-semibold text-center p-[2rem]'>
                <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Fullstack</h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                As a full-stack developer, I bring together my frontend and backend skills to create comprehensive and user-centered applications. For SafeBites, I combined Flask and React to build a dietary-focused recipe and restaurant finder that integrated third-party APIs like Spoonacular and Yelp Fusion to provide real-time, personalized recommendations. On the Skill-Share platform, I developed a full-featured project management application with CRUD functionality, secure role management, and responsive design. I’ve also deployed and maintained applications on cloud platforms like Heroku, ensuring stability and continuous availability for users. My ability to integrate technologies across the stack allows me to deliver polished, high-quality solutions tailored to meet user needs.
                </p>
            </div>
            <div className='bg-red-700 hover:scale-110 transform transition-all duration-300  font-semibold text-center p-[2rem]'>
                <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Frontend</h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                I have a strong background in frontend development, with extensive experience using React and JavaScript to create responsive, user-friendly interfaces. I enjoy designing clean, intuitive layouts and have used Material UI to enhance the visual appeal of my projects. For example, when developing the website for Gom Shabu, I built a mobile-friendly interface that optimized accessibility and user interaction. In my SafeBites application, I designed cross-device responsive components and utilized the React Context API to efficiently manage complex application states. I’m also skilled in using Formik and Yup for robust form validation, ensuring smooth and error-free user experiences.
                </p>
            </div>
            <div className='bg-orange-500 hover:scale-110 transform transition-all duration-300  hover:rotate-6  font-semibold text-center p-[2rem]'>
                <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3fae8]'/>
                <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Backend</h1>
                <p className='text-[15px] text-[#d3d2d2] font-normal'>
                On the backend, I specialize in Python and Flask, with a strong emphasis on building secure and scalable solutions. I’ve implemented RESTful APIs with Flask to facilitate smooth communication between the frontend and backend, allowing real-time updates and efficient data handling. In projects like SafeBites and the Skill-Share platform, I used bcrypt to ensure secure password hashing and validation, prioritizing user security. I’m also experienced in working with SQLAlchemy to manage databases effectively, ensuring optimized performance and reliable data storage.
                </p>
            </div>

        </div>
    </div>
  );

};

export default Services 