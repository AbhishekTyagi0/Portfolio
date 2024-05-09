import React from "react";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import {
  SiApifox,
  SiCss3,
  SiDiscord,
  SiFigma,
  SiJirasoftware,
  SiNetlify,
  SiNextdotjs,
  SiNpm,
  SiPostman,
  SiReduxsaga,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
  SiVisualstudiocode,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";

const list = [
  { id: 10, icon: <SiTypescript />, name: "TypeScript" },
  { id: 11, icon: <SiNextdotjs />, name: "NextJS" },
  { id: 1, icon: <TbBrandRedux />, name: "Redux" },
  { id: 9, icon: <SiReduxsaga />, name: "Redux Saga" },
  { id: 3, icon: <FaReact />, name: "React" },
  { id: 4, icon: <IoLogoJavascript />, name: "JavaScript" },
  { id: 5, icon: <SiCss3 />, name: "CSS" },
  { id: 6, icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { id: 2, icon: <IoLogoHtml5 />, name: "HTML" },
  { id: 7, icon: <GrMysql />, name: "MySQl" },
  { id: 8, icon: <FaGitAlt />, name: "Git" },
  { id: 12, icon: <SiApifox />, name: "API" },
];

const tools = [
  { id: 1, icon: <FaGithub />, name: "Github" },
  { id: 2, icon: <SiNpm />, name: "NPM" },
  { id: 3, icon: <SiVisualstudiocode />, name: "Visual Studio" },
  { id: 4, icon: <SiNetlify />, name: "Netlify" },
  { id: 5, icon: <SiJirasoftware />, name: "Jira" },
  { id: 6, icon: <SiFigma />, name: "Figma" },
  { id: 7, icon: <SiPostman />, name: "Postman" },
  { id: 8, icon: <SiVercel />, name: "Vercel" },
  { id: 9, icon: <SiDiscord />, name: "Discord" },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="h-full bg-slate-950 flex items-center w-full flex-col"
    >
      <h1 className="text-white text-4xl md:text-6xl font-bold mt-4 md:mt-16">
        Professional <span className="text-red-400">Skillset</span>
      </h1>

      <div className="bg-grey-700 w-full gap-4 md:gap-8 md:w-11/12 grid grid-cols-2 md:grid-cols-4 p-6 md:p-12 mt-4 md:mt-12">
        {list.map(({ id, icon, name }) => (
          <div
            key={id}
            className="rounded-2xl h-32 md:h-44 flex border border-red-400 shadow-md hover:shadow-red-400 hover:scale-105 duration-300 ease-in-out"
          >
            <div className="flex flex-col items-center justify-center w-full">
              <div className="text-white text-2xl md:text-4xl font-semibold flex gap-1 items-center">
                {icon}
                <p className="text-white text-xl md:text-3xl mt-2">{name}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-slate-950 flex items-center w-full flex-col mt-4">
        <div className="text-white text-4xl md:text-5xl font-semibold flex justify-center mt-8 items-center">
          <span className="text-red-400 pr-3">Tools </span> I use
        </div>

        <div className="bg-grey-700 w-full gap-4 md:gap-8 md:w-11/12 grid grid-cols-2 md:grid-cols-5 p-6 md:p-12 mt-4 md:mt-10">
          {tools.map(({ id, icon, name }) => (
            <div
              key={id}
              className="rounded-2xl h-32 md:h-44 flex border border-red-400 shadow-md hover:shadow-red-400 hover:scale-105 duration-300 ease-in-out"
            >
              <div className="flex flex-col items-center justify-center w-full">
                <div className="text-white text-2xl md:text-4xl font-semibold flex gap-1 items-center">
                  {icon}
                  <p className="text-white text-xl md:text-3xl mt-2">{name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
