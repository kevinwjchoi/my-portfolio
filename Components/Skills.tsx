import React from 'react';
import { SkillsItem } from './SkillsItem';
import SkillsLanguage from './SkillsLanguage';

const Skills = () => {
  return (
    <div id="skills" className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#09101a]">
      <h1 className="heading">
        Education & <span className="text-yellow-400">Skill</span>
      </h1>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem 
            title="Full-stack Developer" 
            year="2024-Present" 
            description="As a full-stack developer, I build scalable, user-friendly web applications using React, Next.js, and Flask. My freelancing experience includes developing end-to-end solutions for clients, managing projects independently, and delivering tailored software. I specialize in creating seamless user experiences, integrating APIs, and deploying applications on Heroku and AWS."
          />  

          <SkillsItem 
            title="Post-Closer" 
            year="2023-2024" 
            description="Ensured accurate and timely finalization of mortgages, refining my organizational and analytical skills in a fast-paced, high-stakes environment. I developed strong attention to detail, data management, and organizational abilities, which were essential for ensuring seamless operations. This experience strengthened my ability to manage complex tasks and deliver results under pressure."
          />
          <SkillsLanguage 
            skill1="JavaScript" 
            skill2="Python" 
            skill3="React" 
            level1="w-[91%]" 
            level2="w-[88%]" 
            level3="w-[90%]"
          />
        </div>
        <div>
          <SkillsItem 
            title="Flatiron School" 
            year="Graduated 2024" 
            description="Completed a rigorous software engineering bootcamp, mastering full-stack development with a focus on JavaScript, React, Python, and Flask. Gained hands-on experience through intensive project-based learning and real-world application of cutting-edge technologies. Collaborated on complex team projects to design and develop scalable, dynamic web applications, showcasing expertise in both front-end and back-end development."
          />
          <SkillsItem 
            title="NVCC" 
            year="Graduated 2018" 
            description="I graduated from Northern Virginia Community College in 2018 with an Associate of Applied Science degree in Information Systems. The program provided a strong foundation in software engineering, including software and web development, database management, and networking." 
          />
          <SkillsLanguage 
            skill1="TypeScript" 
            skill2="Next Js" 
            skill3="Flask" 
            level1="w-[75%]" 
            level2="w-[78%]" 
            level3="w-[80%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
