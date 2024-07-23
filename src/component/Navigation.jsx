import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAtlassian } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faFlask,
  faHouse,
  faIdBadge,
  faListCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

const links = [
  { id: 1, link: "Home", icon: faHouse, section: "home" },
  { id: 2, link: "Skills", icon: faFlask, section: "skills" },
  { id: 3, link: "Projects", icon: faListCheck, section: "projects" },
  { id: 4, link: "Contact", icon: faIdBadge, section: "contact" },
];

const Navigation = ({ nav, setNav }) => {
  return (
    <motion.nav
      className="bg-gradient-to-r from-slate-900 to-slate-800 h-20 font-mono flex justify-between items-center w-full fixed z-10 px-5 md:px-10"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
    >
      <motion.div
        className="text-white text-6xl hover:cursor-pointer"
        whileHover={{ scale: 1.1, color: "#f87171" }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={faAtlassian} />
      </motion.div>

      <ul className="h-full hidden md:flex items-center justify-end text-white gap-5 text-xl">
        {links.map(({ id, link, icon, section }) => (
          <motion.li
            key={id}
            className="p-2 hover:text-red-400 hover:cursor-pointer font-bold"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <a href={`#${section}`} className="flex items-center">
              <FontAwesomeIcon icon={icon} className="mr-2" />
              {link}
            </a>
          </motion.li>
        ))}
      </ul>

      <motion.div
        onClick={() => setNav(!nav)}
        className="text-white text-4xl z-10 hover:cursor-pointer md:hidden"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FontAwesomeIcon icon={nav ? faXmark : faBars} />
      </motion.div>

      <AnimatePresence>
        {nav && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: "easeInOut" }}
            className="fixed top-0 right-0 w-full h-screen bg-black bg-opacity-90 flex flex-col items-center justify-center md:hidden"
          >
            <ul className="flex flex-col items-center justify-center h-full w-full">
              {links.map(({ id, link, icon, section }) => (
                <motion.li
                  key={id}
                  className="my-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: id * 0.1 }}
                >
                  <a
                    href={`#${section}`}
                    onClick={() => setNav(false)}
                    className="text-white text-4xl hover:text-red-400 flex items-center"
                  >
                    <FontAwesomeIcon icon={icon} className="mr-4" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
