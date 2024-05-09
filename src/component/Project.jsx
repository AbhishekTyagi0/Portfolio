import React from "react";
import cv_builder from "../assets/Images/cv.png";
import memory_game from "../assets/Images/memory-game.png";
import shoppingo from "../assets/Images/shoppingo.png";
import portfolio from "../assets/Images/portfolio.png";
import { TbPoint } from "react-icons/tb";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import airbnb from "../assets/Images/airbnb.png";
import acre from "../assets/Images/acre.png";

const projectList = [
  {
    id: 0,
    subject: "Airbnb Clone",
    src: airbnb,
    about: [
      `Developed a feature-rich Airbnb clone using React and TypeScript, replicating key functionalities of
      the popular accommodation booking platform.`,
      `Demonstrated proficiency in front-end development, state
      management, and TypeScript’s static type-checking for enhanced code quality and maintainability.`,
    ],
    code: "https://github.com/AbhishekTyagi0/Airbnb-Clone",
    live: "https://a-bnb-clone.vercel.app/",
  },
  {
    id: 1,
    subject: "1acre-Clone",
    src: acre,
    about: [
      `Built captivating single-page React project with API integration & state management, leveraging
      typescript for type-checking and tailwind css for a sleek, interactive UI.`,
      `Leveraged Hooks, component-based architecture, JSX, and props to enhance development efficiency and maintainability.`,
    ],
    code: "https://github.com/AbhishekTyagi0/gamyamProject",
    live: "https://1acre-clone.vercel.app/",
  },
  {
    id: 2,
    subject: "CV Builder",
    src: cv_builder,
    about: [
      "Built a user-friendly web app for effortless CV creation, empowering individuals to craft professional and visually appealing resumes.",
      "Leveraged Hooks, component-based architecture, JSX, and props to enhance development efficiency and maintainability.",
    ],
    code: "https://github.com/AbhishekTyagi0/CV-Builder",
    live: "https://cvbuilderr.netlify.app/",
  },
  {
    id: 3,
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
    id: 4,
    subject: "Shopping Cart",
    src: shoppingo,
    about: [
      "Crafted an interactive shopping cart in ReactJS, showcasing front-end expertise and proficient React library usage.",
      "Seamlessly navigated user journey through React Router, enhancing engagement and simplifying online purchases with CRUD operations.",
    ],
    code: "https://github.com/AbhishekTyagi0/React-shopping-cart",
    live: "https://react-shoppingo.netlify.app/",
  },
  {
    id: 6,
    subject: "Portfolio",
    src: portfolio,
    about: [
      "Created my portfolio website using ReactJs, Tailwind CSS.",
      "It showcases all my current skills acquired as a frontend developer and some recent projects crafted using ReactJS.",
    ],
    code: "https://github.com/AbhishekTyagi0/Portfolio",
    live: "https://abhishek-tyagi-portfolio.vercel.app/",
  },
];

const Projects = () => {
  return (
    <div
      id="projects"
      className="w-full bg-gradient-to-b from-slate-950 to-slate-800 flex flex-col justify-center items-center p-4"
    >
      <h1 className="text-white text-4xl md:text-5xl font-bold mt-4 mb-8">
        Frontend <span className="text-red-400">Projects</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectList.map(({ id, subject, src, about, code, live }) => (
          <div
            key={id}
            className="bg-gradient-to-t from-slate-950 to-slate-800 border p-3 rounded-3xl border-red-400 flex flex-col justify-between items-center p-1 w-full"
          >
            <div className="flex-none w-full h-3/6">
              <a href={live} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt={`${subject} project`}
                  className="w-full hover:scale-105 h-auto transition-all duration-300 ease-in-out rounded-xl object-cover"
                />
              </a>
            </div>

            <div className="w-full p-4">
              <div className="flex justify-between">
                <h2 className="text-white font-bold text-2xl mb-2 md:text-4xl max-md:text-xl">
                  {subject}
                </h2>
                <div className="text-white font-bold flex mt-2 gap-4 max-md:text-sm text-2xl">
                  <a
                    href={code}
                    className="hover:scale-125 text-2xl"
                    target="_blank"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={live}
                    className="hover:scale-125 text-2xl"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {about.map((aboutText, index) => (
                <p
                  key={index}
                  className="text-zinc-400 flex items-center mt-2 max-md:text-sm text-xs"
                >
                  <TbPoint className="pr-2 font-bold text-2xl max-md:pr-1 max-md:text-sm" />
                  {aboutText}
                </p>
              ))}

              {/* <div className="text-white font-bold flex flex-col md:flex-row mt-2 gap-4 max-md:text-sm text-2xl">
                <a href={code} className="hover:scale-125" target="_blank">
                  <FaGithub />
                </a>
                <a
                  href={live}
                  className="hover:scale-125 mt-2 md:mt-0 text-2xl"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt />
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      {/* <div className="mt-8 flex justify-start w-full text-3xl text-white font-bold max-md:mt-8 max-sm:text-lg max-md:mb-8">
        FullStack Projects:
        <span className="text-red-400 pl-4"> Coming Soon . . .</span>
      </div> */}
    </div>
  );
};

export default Projects;
