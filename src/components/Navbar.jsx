import hi from "../assets/wave-hand.png";
import React from "react";

const navbar = () => {
  return (
    <div
      id="navbar"
      className="bg-primary px-2 py-1 flex items-center justify-between"
    >
      {/* Title */}
      <div className="flex items-center">
        {/* Waving hand */}
        <div>
          <img className="w-[50px] md:w-[75px]" src={hi} alt="hi" />
        </div>
        {/* Name and Hi */}
        <div>
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            Hi! I'm Fazal Hayat Khan
          </h1>
          <p className="text-white text-sm md:text-xl">
            Student At Indian Institute of Technology, Kharagpur
          </p>
        </div>
      </div>
      {/* Navigation */}
      <div className="mx-2 hidden lg:flex">
        <div className="hover:scale-105 active:scale-95 ease-in-out duration-150">
          <a
            className="mx-3 text-xl text-white hover:underline "
            href="#about-me"
          >
            About Me
          </a>
        </div>
        <div className="hover:scale-105 active:scale-95 ease-in-out duration-150">
          <a className="mx-3 text-xl text-white hover:underline" href="#skills">
            Skills
          </a>
        </div>
        <div className="hover:scale-105 active:scale-95 ease-in-out duration-150">
          <a className="mx-3 text-xl text-white hover:underline" href="#resume">
            Resume
          </a>
        </div>
        <div className="hover:scale-105 active:scale-95 ease-in-out duration-150">
          <a
            className="mx-3 text-xl text-white hover:underline"
            href="#projects"
          >
            Project
          </a>
        </div>
        <div className="hover:scale-105 active:scale-95 ease-in-out duration-150">
          <a
            className="bg-light-blue px-2 py-1 rounded-full mx-3 text-xl text-white hover:scale-105"
            href="#contact-me"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default navbar;
