import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io5";
import { FaAws, FaGitAlt, FaGithub, FaNode, FaReact } from "react-icons/fa";
import {
  SiApifox,
  SiCss3,
  SiDiscord,
  SiFigma,
  SiJirasoftware,
  SiMongodb,
  SiNetlify,
  SiNextdotjs,
  SiNpm,
  SiPostman,
  SiReduxsaga,
  SiSupabase,
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
  { id: 13, icon: <SiMongodb />, name: "MongoDB" },
  { id: 14, icon: <SiSupabase />, name: "Supabase" },
  { id: 15, icon: <FaNode />, name: "NodeJS" },
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
  { id: 10, icon: <FaAws />, name: "AWS S3" },
];

const SkillCard = ({ icon, name, index }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: { duration: 0.5, delay: index * 0.1 },
        },
        hidden: { opacity: 0, y: 50, scale: 0.8 },
      }}
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.95 }}
      className="bg-slate-800 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-slate-700 transition-colors duration-300 transform"
    >
      <motion.div
        className="text-5xl text-red-400"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{
          type: "spring",
          stiffness: 260,
          damping: 20,
          delay: index * 0.1 + 0.2,
        }}
      >
        {icon}
      </motion.div>
      <motion.p
        className="text-white text-lg font-medium text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: index * 0.1 + 0.4 }}
      >
        {name}
      </motion.p>
    </motion.div>
  );
};

const SectionTitle = ({ children }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
        hidden: { opacity: 0, y: -50 },
      }}
      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-16"
    >
      {children}
    </motion.h2>
  );
};

const Skills = () => {
  return (
    <div
      id="skills"
      className="min-h-screen bg-slate-900 py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto text-white">
        <SectionTitle>
          Professional <span className="text-red-400">Skillset</span>
        </SectionTitle>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mb-16"
          initial="hidden"
          animate="visible"
          variants={{
            visible: { transition: { staggerChildren: 0.1 } },
            hidden: {},
          }}
        >
          {list.map((skill, index) => (
            <SkillCard
              key={skill.id}
              icon={skill.icon}
              name={skill.name}
              index={index}
            />
          ))}
        </motion.div>

        <SectionTitle>
          <span className="text-red-400">Tools</span> I Use
        </SectionTitle>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: { staggerChildren: 0.1, delayChildren: 0.3 },
            },
            hidden: {},
          }}
        >
          {tools.map((tool, index) => (
            <SkillCard
              key={tool.id}
              icon={tool.icon}
              name={tool.name}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
