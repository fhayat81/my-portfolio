import React, {forwardRef} from "react";
import image from "../assets/IMG-20240617-WA0043 (1).jpg";

const Aboutme = forwardRef((props, ref) => {
  return (
    <div
      ref={ref}
      id="about-me"
      data-aos="fade-up"
      data-aos-delay="300"
      className="mx-2 my-4 flex flex-col md:flex-row items-center justify-evenly pt-16 md:pt-[75px]"
    >
      {/* Image */}
      <div className="drop-shadow-lg bg-white rounded-full w-[260px] md:w-[300px] p-1">
        <img src={image} alt="" className="w-[260px] md:w-[300px] rounded-full" />
      </div>
      {/* About me */}
      <div className="p-3 rounded-lg drop-shadow-xl bg-white w-[300px] my-2 md:w-[400px] lg:w-[600px] border-2 border-primary">
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
});

export default Aboutme;
