import React from "react";
import cv_builder from "../assets/Images/cv.png";
import memory_game from "../assets/Images/memory-game.png";
import shoppingo from "../assets/Images/shoppingo.png";
import portfolio from "../assets/Images/portfolio.png";
import { TbPoint } from "react-icons/tb";

const projectList = [
  {
    id: 1,
    subject: "CV Builder",
    src: cv_builder,
    about: [
      "Built a user-friendly web app for effortless CV creation, empowering individuals to craft professional and visually appealing resume.",
      "Leveraged Hooks, component-based architecture, JSX, and props to enhance development efficiency and maintainability.",
    ],
    code: "https://github.com/AbhishekTyagi0/CV-Builder",
    live: "https://cvbuilderr.netlify.app/",
  },
  {
    id: 2,
    subject: "Memory Card Game",
    src: memory_game,
    about: [
      "Built captivating single-page React memory game with Giphy API integration & state management, leveraging JSX for a sleek, interactive UI.",
      "Uses the async method to fetch the data and used it in the application.",
    ],
    code: "https://github.com/AbhishekTyagi0/React-Memory-Card-Game",
    live: "https://reactjs-memory-game0.netlify.app/",
  },
  {
    id: 3,
    subject: "Shopping Cart",
    src: shoppingo,
    about: [
      "Crafted interactive shopping cart in ReactJS, showcasing front-end expertise and proficient React library usage.",
      "Seamlessly navigated user journey through React Router, enhancing engagement and simplifying online purchases with CRUD operations. ",
    ],
    code: "https://github.com/AbhishekTyagi0/React-shopping-cart",
    live: "https://react-shoppingo.netlify.app/",
  },
  {
    id: 4,
    subject: "Portfolio",
    src: portfolio,
    about: [
      "created my portfolio website using ReactJs, Tailwind CSS.",
      "It showcases all my current skilled acquired as an frontend developer and some recent projects crafted using reactjs.",
    ],
    code: "https://github.com/AbhishekTyagi0/Portfolio",
    live: "you are already here",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="h-full w-dwh bg-gradient-to-b from-slate-950 to-slate-800 flex flex-col items-center"
    >
      <h1 className="text-white text-3xl font-bold mb-8 max-md:mb-8 mt-4">
        Frontend <span className="text-red-400">Projects</span>
      </h1>
      {projectList.map(({ id, subject, src, about, code, live }) => (
        <div
          key={id}
          className="border border-red-200 flex justify-between m-3 items-center p-1 w-11/12"
        >
          <div className="flex-none">
            <a href={live} target="_blank">
              <img
                src={src}
                alt="project-image"
                className="w-64 hover:scale-105 transition-all duration-300 ease-in-out max-md:w-48 max-sm:w-32"
              />
            </a>
          </div>
          <div className=" w-9/12 h-full p-2 max-md:p-4 max-md:w-8/12">
            <h2 className="text-white font-bold text-2xl mb-2 max-md:text-xl max-sm:text-sm">
              {subject}
            </h2>
            {about.map((about, index) => (
              <p
                key={index}
                className="text-zinc-400 flex items-center -ml-6 max-md:text-sm max-sm:text-xs"
              >
                <TbPoint className="pr-2 font-bold text-2xl max-md:pr-1 max-md:text-sm" />
                {about}
              </p>
            ))}
            <div className="text-white font-bold flex justify-start h-full w-full gap-16 mt-2 max-sm:gap-4">
              <a href={code} className="hover:text-red-400 max-md:text-xs">
                Click me to Check CODE
              </a>
              <a
                href={live}
                className="hover:text-red-400 text-lg max-md:text-xs"
              >
                Go to website
              </a>
            </div>
          </div>
        </div>
      ))}
      <div className="mt-8 flex justify-start pl-16 w-full text-3xl text-white font-bold max-md:mt-8 max-sm:text-lg max-md:mb-8">
        FullStack Projects:
        <span className="text-red-400 pl-4"> Comming Soon . . .</span>
      </div>
    </div>
  );
};

export default Projects;
