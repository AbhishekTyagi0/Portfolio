import React from "react";
import { motion } from "framer-motion";
import { TbPoint } from "react-icons/tb";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { projectList, NextJsProjectList } from "./list/projectList";

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="bg-gradient-to-t from-slate-950 to-slate-800 border p-3 rounded-3xl border-red-400 flex flex-col justify-between items-center p-1 w-full shadow-lg hover:shadow-red-400/30"
    >
      <motion.div
        className="flex-none w-full h-3/6 overflow-hidden rounded-xl"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <a href={project.live} target="_blank" rel="noopener noreferrer">
          <img
            src={project.src}
            alt={`${project.subject} project`}
            className="w-full h-auto transition-all duration-300 ease-in-out rounded-xl object-cover"
          />
        </a>
      </motion.div>

      <div className="w-full p-4">
        <motion.div
          className="flex justify-between"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          <h2 className="text-white font-bold text-2xl mb-2 md:text-4xl max-md:text-xl">
            {project.subject}
          </h2>
          <div className="text-white font-bold flex mt-2 gap-4 max-md:text-sm text-2xl">
            {project.code && (
              <motion.a
                href={project.code}
                className="hover:scale-125 text-2xl"
                target="_blank"
                whileHover={{ scale: 1.2, color: "#ff4d4d" }}
              >
                <FaGithub />
              </motion.a>
            )}
            <motion.a
              href={project.live}
              className="hover:scale-125 text-2xl"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#ff4d4d" }}
            >
              <FaExternalLinkAlt />
            </motion.a>
          </div>
        </motion.div>

        {project.about.map((aboutText, idx) => (
          <motion.p
            key={idx}
            className="text-zinc-400 flex items-center mt-2 max-md:text-sm text-xs"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 + idx * 0.1 }}
          >
            <TbPoint className="pr-2 font-bold text-2xl max-md:pr-1 max-md:text-sm text-red-400" />
            {aboutText}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <motion.div
      id="projects"
      className="w-full bg-gradient-to-b from-slate-950 to-slate-800 flex flex-col justify-center items-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="mt-8 flex justify-center py-8 w-full text-5xl text-white font-bold max-md:mt-8 max-sm:text-lg max-md:mb-8 "
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        NextJS
        <span className="text-red-400 pl-4">Projects</span>
      </motion.div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        {NextJsProjectList.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
      <motion.h1
        className="text-white text-4xl md:text-5xl py-16 font-bold mt-4 mb-8"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Frontend <span className="text-red-400">Projects</span>
      </motion.h1>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {projectList.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Projects;
