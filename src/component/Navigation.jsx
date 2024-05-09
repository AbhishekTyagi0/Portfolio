import { faAtlassian } from "@fortawesome/free-brands-svg-icons";
import {
  faBars,
  faFlask,
  faHouse,
  faIdBadge,
  faListCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const links = [
  { id: 1, link: "Home", icon: faHouse, section: "home" },
  { id: 2, link: "skills", icon: faFlask, section: "skills" },
  { id: 3, link: "Projects", icon: faListCheck, section: "projects" },
  { id: 4, link: "Contact", icon: faIdBadge, section: "contact" },
];

const Navigation = ({ nav, setNav }) => {
  return (
    <div className="bg-slate-900 h-20 font-mono flex justify-between items-center w-full fixed z-10">
      <div className="text-white ml-5 px-5 text-6xl hover:cursor-pointer hover:text-red-400">
        <FontAwesomeIcon icon={faAtlassian} />.
      </div>
      <ul className="h-full hidden md:flex items-center justify-end text-white px-5 gap-5 text-1xl">
        {links.map(({ id, link, icon, section }) => (
          <li
            key={id}
            className="p-2 hover:text-red-400 hover:cursor-pointer font-bold"
          >
            <a href={`#${section}`}>
              <FontAwesomeIcon icon={icon} className="pr-1" />
              {link}
            </a>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="text-white text-4xl mr-6 pr-5 z-10 hover:cursor-pointer md:hidden"
      >
        {nav ? (
          <FontAwesomeIcon icon={faXmark} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </div>

      {nav && (
        <ul
          onClick={() => setNav(!nav)}
          className="flex h-dvh flex-col items-center justify-start pt-32 absolute top-0 left-0 w-full bg-black text-left"
        >
          {links.map(({ id, link, icon, section }) => (
            <li
              key={id}
              className="hover:text-blue-300 hover:cursor-pointer p-6 capitalize text-white text-4xl"
            >
              <a href={`#${section}`} onClick={() => setNav(!nav)}>
                <FontAwesomeIcon icon={icon} className="pr-1" />
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navigation;
