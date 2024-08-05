import resume from "../assets/RESUME.pdf";
import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="my-4 mx-2">
      {/* Heading */}
      <p className="text-center text-primary font-semibold text-2xl md:text-3xl">
        RESUME
      </p>

      <div className="flex flex-col items-center ">
        {/* Overview of resume pdf */}
        <div data-aos="fade-up" data-aos-delay="400">
          <iframe className="my-2" src={resume} frameborder="0"></iframe>
        </div>
        {/* Download button */}
        <div data-aos="fade-up" data-delay-aos="500">
          <div className="my-2 hover:scale-105 ease-in-out duration-150 active:scale-95">
            <a
              className="bg-primary text-white text-lg md:text-xl px-2 py-1 rounded-lg font-semibold drop-shadow-lg"
              href={resume}
              download="Fazal-Resume"
            >
              DOWNLOAD PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
