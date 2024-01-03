import { faAtlassian } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faFlask,
  faHouse,
  faIdBadge,
  faListCheck,
  faPersonDigging,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const links = [
  { id: 1, link: "Home", icon: faHouse },
  { id: 2, link: "skills", icon: faFlask },
  { id: 3, link: "Experience", icon: faPersonDigging },
  { id: 4, link: "Projects", icon: faListCheck },
  { id: 5, link: "Contact", icon: faIdBadge },
];

const Navigation = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="bg-slate-900 h-20 font-mono flex justify-between items-center">
      <div className="text-white ml-5 px-5 text-6xl hover:cursor-pointer hover:text-red-400">
        <FontAwesomeIcon icon={faAtlassian} />.
      </div>
      <ul className="h-full hidden md:flex items-center justify-end text-white px-5 gap-5 text-1xl">
        {links.map(({ id, link, icon }) => (
          <li key={id} className="p-2 hover:text-red-400 hover:cursor-pointer">
            <FontAwesomeIcon icon={icon} className="pr-1" />
            {link}
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="text-white mr-6 pr-5 z-10 hover:cursor-pointer md:hidden"
      >
        {nav ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>

      {nav && (
        <ul className="flex h-screen flex-col items-center justify-center absolute top-0 left-0 w-full bg-black text-left">
          {links.map(({ id, link, icon }) => (
            <li
              key={id}
              className="p-2 hover:text-blue-300 hover:cursor-pointer p-4 capitalize text-white text-4xl"
            >
              <FontAwesomeIcon icon={icon} className="pr-1" />
              {link}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navigation;
