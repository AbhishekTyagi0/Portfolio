import React from "react";

const Home = ({ nav }) => {
  return (
    <div
      id="home"
      className="h-dvh w-full bg-slate-950 bg-gradient-to-b from-slate-900 to-slate-950  text-white flex justify-between items-center max-md:flex-col"
    >
      <div className="flex flex-col p-20 gap-3 -mt-32 max-md:mt-0 max-md:p-32 max-sm:p-12">
        <h3 className="text-4xl max-md:text-2xl">
          Hello there!{" "}
          {nav ? "" : <span className="wave inline-block">👋</span>}
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
      </div>
      <div className="p-1 mr-32 flex justify-start -mt-32 max-md:justify-center max-md:mr-0 max-sm:mt-20">
        {nav ? (
          ""
        ) : (
          <img
            src="../src/assets/Images/mypic.jpg"
            alt="my image"
            className="w-full h-full rounded-3xl bg-cover scale-150 max-md:h-4/6 max-sm:h-3/6"
          />
        )}
      </div>
    </div>
  );
};

export default Home;
