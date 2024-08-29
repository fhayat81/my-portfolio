import hi from "../assets/IMG-20230129-WA0008.png";
import React, { forwardRef } from "react";

const navbar = forwardRef(({ref1, ref2, ref3, ref4, ref5}, ref) => {
  return (
    <div
      id="navbar"
      className="bg-primary px-2 py-1 flex items-center justify-between fixed top-0 w-full z-10"
    >
      {/* Title */}
      <div className="flex items-center">
        {/* Waving hand */}
        <div className="m-1">
          <img
            className="w-[50px] md:w-[65px] rounded-full mx-2"
            src={hi}
            alt="hi"
          />
        </div>
        {/* Name */}
        <div>
          <h1 className="text-white text-2xl font-bold">Fazal Hayat Khan</h1>
          <p className="text-white text-xs md:text-xl">
            Student At Indian Institute of Technology, Kharagpur
          </p>
        </div>
      </div>
      {/* Navigation */}
      <div className="mx-2 hidden lg:flex">
        <div ref={ref1} className="hover:scale-105 active:scale-95 ease-in-out duration-150">
          <a
            className="mx-3 text-xl text-white hover:underline "
            href="#about-me"
          >
            About Me
          </a>
        </div>
        <div ref={ref2} className="hover:scale-105 active:scale-95 ease-in-out duration-150">
          <a className="mx-3 text-xl text-white hover:underline" href="#skills">
            Skills
          </a>
        </div>
        <div ref={ref3} className="hover:scale-105 active:scale-95 ease-in-out duration-150">
          <a
            className="mx-3 text-xl text-white hover:underline"
            href="#projects"
          >
            Project
          </a>
        </div>
        <div ref={ref4} className="hover:scale-105 active:scale-95 ease-in-out duration-150">
          <a className="mx-3 text-xl text-white hover:underline" href="#resume">
            Resume
          </a>
        </div>
        <div ref={ref5} className="hover:scale-105 active:scale-95 ease-in-out duration-150">
          <a
            className="mx-3 text-xl text-white hover:underline"
            href="#contact-me"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
});

export default navbar;
