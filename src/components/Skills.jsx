import React, { forwardRef } from "react";
import img1 from "../assets/skills/html.png";
import img2 from "../assets/skills/css3.png";
import img3 from "../assets/skills/js.png";
import img4 from "../assets/skills/react.png";
import img5 from "../assets/skills/tailwind.png";
import img6 from "../assets/skills/bootstrap.png";

const Skills = forwardRef((props, ref) => {
  // Array containing details of all skills
  const skills = [
    {
      id: 1,
      img: img1,
      title: "HTML",
      delay: "400",
    },
    {
      id: 2,
      img: img2,
      title: "CSS",
      delay: "500",
    },
    {
      id: 3,
      img: img3,
      title: "JavaScript",
      delay: "600",
    },
    {
      id: 4,
      img: img4,
      title: "React",
      delay: "700",
    },
    {
      id: 5,
      img: img5,
      title: "Tailwind CSS",
      delay: "800",
    },
    {
      id: 6,
      img: img6,
      title: "Bootstrap",
      delay: "900",
    },
  ];

  return (
    <div ref={ref} id="skills" className="mx-2 my-4 pt-16 md:pt-[75px]">
      {/* Heading */}
      <div>
        <p className="text-center text-primary font-semibold text-2xl md:text-3xl">
          SKILLS
        </p>
      </div>
      {/* Mapping skills array */}
      <div className="grid grid-cols-2 md:grid-cols-3 place-items-center">
        {skills.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.delay}
            key={data.id}
            className="w-[100px] h-[125px] flex flex-col items-center justify-evenly bg-white rounded-lg drop-shadow-lg my-2"
          >
            <img src={data.img} alt="" className="w-[75px] mt-2" />
            <p className="text-slate-500 text-lg text-center">{data.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Skills;
