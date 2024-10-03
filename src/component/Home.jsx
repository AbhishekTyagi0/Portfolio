import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

const Home = ({ nav }) => {
  const resume = "/docs/Abhishek-Tyagi-Resume.pdf";

  return (
    <div
      id="home"
      className="min-h-screen w-full max-md:pt-32 bg-gradient-to-b from-slate-900 to-slate-950 text-white flex justify-between items-center px-8 py-16 max-md:flex-col"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col gap-6 max-w-2xl"
      >
        <h3 className="text-4xl max-md:text-2xl flex items-center gap-4">
          Hello there!{" "}
          {!nav && <span className="wave inline-block animate-wave">👋</span>}
        </h3>
        <h1 className="text-5xl mb-6 max-md:text-4xl">
          I'm <span className="text-red-400 font-bold">Abhishek Tyagi</span>
        </h1>
        <h2 className="text-4xl max-md:text-3xl">
          I'm a{" "}
          <span className="text-red-400 font-bold">
            NextJs & ReactJs Developer
          </span>
        </h2>
        <p className="text-lg max-md:text-base">
          Dynamic Next.js, Node.js and React.js Developer with a strong
          foundation in building responsive and scalable web applications.
          Proficient in modern web technologies, including TypeScript, Tailwind
          CSS, and MongoDB. Experienced in integrating third-party services and
          enhancing user experience.
        </p>
        <div className="flex gap-4 mt-6 max-md:grid grid-cols-2">
          <a
            href={resume}
            download
            className="bg-blue-600 hover:bg-blue-700 flex justify-center text-white py-2 px-2 md:px-6 rounded-full text-sm md:text-lg transition-colors duration-300"
          >
            Download Resume
          </a>
          <a
            href="https://shricode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 flex justify-center text-white py-2 px-2 md:px-6 rounded-full text-sm md:text-lg transition-colors duration-300"
          >
            Check Out My Blog
          </a>
          <a
            href="https://www.sunderai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 flex justify-center text-white py-2 px-2 md:px-6 rounded-full text-sm md:text-lg transition-colors duration-300"
          >
            Check Out My AI SAAS
          </a>
        </div>
        <ul className="flex gap-6 mt-8 text-3xl">
          <li className="text-red-400 font-semibold text-xl self-center">
            Find Me On:
          </li>
          {[
            { icon: <FaGithub />, url: "https://github.com/AbhishekTyagi0" },
            {
              icon: <FaLinkedin />,
              url: "https://www.linkedin.com/in/abhishek-tyagi007/",
            },
            { icon: <FaXTwitter />, url: "https://twitter.com/abhishek43100" },
            {
              icon: <FaInstagram />,
              url: "https://www.instagram.com/i_abhishek_tyagi/",
            },
          ].map((social, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-red-400 transition-colors duration-300"
              >
                {social.icon}
              </a>
            </motion.li>
          ))}
        </ul>
      </motion.div>

      {!nav && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-red-400 shadow-lg shadow-red-400/50">
            <img
              src="/newPic.jpg"
              alt="Abhishek Tyagi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-slate-800 px-6 py-2 rounded-full shadow-md">
            <span className="text-red-400 font-bold">Web Developer</span>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Home;
