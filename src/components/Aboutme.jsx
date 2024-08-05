import React from "react";
import image from "../assets/IMG-20240617-WA0043 (1).jpg";

const Aboutme = () => {
  return (
    <div
      id="about-me"
      data-aos="fade-up"
      data-aos-delay="300"
      className="mx-2 my-4 flex flex-col md:flex-row items-center justify-evenly"
    >
      {/* Image */}
      <div className="drop-shadow-lg bg-white rounded-full w-[300px] p-1">
        <img src={image} alt="" className="w-[300px] rounded-full" />
      </div>
      {/* About me */}
      <div className="p-2 rounded-lg drop-shadow-lg bg-white w-[300px] my-2 md:w-[400px] lg:w-[600px]">
        <p className="text-primary font-semibold text-2xl md:text-3xl">
          ABOUT ME
        </p>
        <p className="mg:text-lg leading-tight">
          Hi, I'm an enthusiastic front-end developer with a passion for
          creating beautiful, responsive web interfaces. I love turning ideas
          into reality by building dynamic, interactive applications with a
          focus on user experience. I'm always learning and excited to
          collaborate on innovative projects that push the boundaries of web
          development. Let's connect and create something amazing!
        </p>
      </div>
    </div>
  );
};

export default Aboutme;
