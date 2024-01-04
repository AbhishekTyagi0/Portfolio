import React from "react";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaGitAlt, FaGithub, FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiNetlify,
  SiNpm,
  SiTailwindcss,
  SiVisualstudiocode,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { GrMysql } from "react-icons/gr";

const list = [
  { id: 1, icon: <TbBrandRedux />, name: "Redux" },
  { id: 2, icon: <IoLogoHtml5 />, name: "HTML" },
  { id: 3, icon: <FaReact />, name: "React" },
  { id: 3, icon: <IoLogoJavascript />, name: "JavaScript" },
  { id: 4, icon: <SiCss3 />, name: "CSS" },
  { id: 5, icon: <SiTailwindcss />, name: "Tailwind CSS" },
  { id: 6, icon: <GrMysql />, name: "MySQl" },
  { id: 6, icon: <FaGitAlt />, name: "Git" },
];

const tools = [
  { id: 1, icon: <FaGithub />, name: "Github" },
  { id: 2, icon: <SiNpm />, name: "NPM" },
  { id: 3, icon: <SiVisualstudiocode />, name: "Visual Studio" },
  { id: 4, icon: <SiNetlify />, name: "Netlify" },
];

const Skills = () => {
  return (
    <div className="h-dvh bg-slate-950 flex items-center w-full flex-col">
      <h1 className="text-white text-6xl font-bold -mt-16">
        Professional <span className="text-red-400">Skillset</span>
      </h1>
      <div className="bg-grey-700 -mr-20 w-11/12 gap-12 grid grid-cols-4 p-12">
        {list.map(({ id, icon, name }) => (
          <ul
            key={id}
            className=" rounded-2xl h-44 w-56 flex border border-red-400  shadow-md shadow-red-300 hover:shadow-md hover:shadow-red-400 hover:scale-105 duration-300 ease-in-out"
          >
            <li className="font-semibold text-white text-6xl flex gap-1 justify-center flex-col items-center h-full w-full">
              {icon}
              <p className="text-white text-3xl mt-4">{name}</p>
            </li>
          </ul>
        ))}
      </div>
      <div className=" bg-slate-950 flex items-center w-full flex-col">
        <div className="text-white text-5xl font-semibold flex justify-center mt-8 items-center">
          <span className="text-red-400 pr-3">Tools </span> I use
        </div>
        <div className="bg-grey-700 -mr-24 w-11/12 gap-7 grid grid-cols-4 p-10">
          {tools.map(({ id, icon, name }) => (
            <ul
              key={id}
              className=" rounded-2xl h-44 w-56 flex border border-red-400 border-red-400  shadow-md shadow-red-300 hover:shadow-md hover:shadow-red-400 hover:scale-105 duration-300 ease-in-out"
            >
              <li className="text-white text-6xl font-semibold flex gap-1 justify-center flex-col items-center h-full w-full">
                {icon}
                <p className="text-white text-3xl mt-4">{name}</p>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
