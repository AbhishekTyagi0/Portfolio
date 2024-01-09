import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Home = ({ nav }) => {
  const resume = "/docs/Abhishek_Tyagi_Resume.doc";
  return (
    <div
      id="home"
      className="h-dvh w-full bg-slate-950 bg-gradient-to-b from-slate-900 to-slate-950  text-white flex justify-between items-center max-md:flex-col"
    >
      <div className="flex flex-col p-20 gap-3 -mt-32 max-md:mt-0 max-md:p-32 max-sm:p-12">
        <h3 className="text-4xl max-md:text-2xl">
          Hello there!{" "}
          {nav ? "" : <span className="wave inline-block">👋</span>}
          {nav ? (
            ""
          ) : (
            <a href={resume} download>
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg ml-96 max-sm:text-xs max-sm:p-1 max-sm:px-3 max-sm:font-light max-sm:w-32 max-sm:ml-12 max-sm:top-44 max-sm:absolute">
                Download Resume
              </button>
            </a>
          )}
        </h3>
        <h1 className="text-5xl mb-11 max-md:text-2xl max-sm:text-xl">
          I'm{" "}
          <span className="text-red-400 font-bold max-md:text-2xl max-sm:text-xl">
            Abhishek Tyagi
          </span>
        </h1>
        <h2 className="text-7xl w-10/12 max-md:text-3xl max-md:w-8/12 max-sm:text-xl">
          I'm a{" "}
          <span className="text-red-400 font-bold max-md:text-2xl">
            Frontend Developer
          </span>
        </h2>
        <p className="w-11/12 text-lg max-md:text-sm">
          Passionate frontend developer with a knack for crafting user-centric
          interfaces. Proficient in ReactJS and responsive web development, I'm
          eager to leverage my skills and build seamless, visually compelling
          experiences. From dynamic shopping carts to interactive memory games,
          my GitHub portfolio showcases my dedication to delivering engaging and
          impactful projects.
        </p>
        <ul className="flex gap-8 lg:text-4xl mt-3 items-center">
          <p className="text-red-400 lg:font-semibold">Find Me On:</p>
          <li className="hover:scale-125 transition-all duration-300 ease-out">
            <a href="https://github.com/AbhishekTyagi0" target="_blank">
              <FaGithub />
            </a>
          </li>
          <li className="hover:scale-125 transition-all duration-300 ease-out">
            <a
              href="https://www.linkedin.com/in/abhishek-tyagi007/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </li>
          <li className="hover:scale-125 transition-all duration-300 ease-out">
            <a href="https://twitter.com/abhishek43100" target="_blank">
              <FaXTwitter />
            </a>
          </li>
          <li className="hover:scale-125 transition-all duration-300 ease-out">
            <a
              href="https://www.instagram.com/i_abhishek_tyagi/"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </li>
        </ul>
      </div>

      <div className="p-1 mr-32 flex justify-start -mt-32 max-md:justify-center max-md:mr-0 max-sm:mt-20">
        {nav ? (
          ""
        ) : (
          <img
            src="/mypic.jpg"
            alt="my image"
            className="w-full h-full rounded-3xl bg-cover scale-150 max-md:h-4/6 max-sm:h-3/6"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
