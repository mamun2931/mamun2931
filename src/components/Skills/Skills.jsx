import React from 'react';
import data from '../../data/portfolio.json';
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaFigma } from 'react-icons/fa';
import { SiTailwindcss, SiJavascript } from 'react-icons/si';

const iconMap = {
  "react": <FaReact className="text-[#61DAFB]" />,
  "javascript": <SiJavascript className="text-[#F7DF1E]" />,
  "tailwind": <SiTailwindcss className="text-[#38B2AC]" />,
  "html": <FaHtml5 className="text-[#E34F26]" />,
  "nodejs": <FaNodeJs className="text-[#339933]" />,
  "css": <FaCss3Alt className="text-[#1572B6]" />,
  "figma": <FaFigma className="text-[#F24E1E]" />,
  "daisyui": <div className="text-xl font-bold flex gap-1 items-center bg-base-100 px-2 rounded w-min"><span className="text-primary">daisy</span><span className="text-secondary">UI</span></div>
};

const Skills = () => {
  const { skills } = data;

  return (
    <div id="skills" className="py-24 bg-base-300">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-display font-bold mb-4">{skills.titlePrefix} <span className="text-primary">{skills.titleHighlight}</span></h2>
          <p className="text-base-content/70">{skills.subtitle}</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.items.map((skill) => (
            <div key={skill.id} className="card bg-base-200 shadow-xl hover:-translate-y-2 transition-transform duration-300 border border-base-content/5 hover:border-primary/50 cursor-default">
              <div className="card-body items-center text-center p-6">
                <div className="text-5xl mb-2">{iconMap[skill.id]}</div>
                <h3 className="card-title text-lg">{skill.name}</h3>
                <p className="text-sm text-base-content/60">{skill.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
