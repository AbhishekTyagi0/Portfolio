import React from "react";

const Home = () => {
  return (
    <div className="h-dvh w-full bg-slate-950 bg-gradient-to-b from-slate-900 to-slate-950  text-white flex justify-between items-center">
      <div className="flex flex-col p-20 gap-3 -mt-32">
        <h3 className="text-4xl">Hello there!</h3>
        <h1 className="text-5xl mb-11">
          I'm <span className="text-red-400 font-bold">Abhishek Tyagi</span>
        </h1>
        <h2 className="text-7xl w-10/12">
          I'm a{" "}
          <span className="text-red-400 font-bold">Frontend Developer</span>
        </h2>
        <p className="w-11/12 text-lg">
          Passionate frontend developer with a knack for crafting user-centric
          interfaces. Proficient in ReactJS and responsive web development, I'm
          eager to leverage my skills and build seamless, visually compelling
          experiences. From dynamic shopping carts to interactive memory games,
          my GitHub portfolio showcases my dedication to delivering engaging and
          impactful projects.
        </p>
      </div>
      <div className="p-1 mr-32 flex justify-start -mt-32">
        <img
          src="../src/assets/mypic.jpg"
          alt="my image"
          className="w-full h-full rounded-3xl bg-cover scale-150"
        />
      </div>
    </div>
  );
};

export default Home;
