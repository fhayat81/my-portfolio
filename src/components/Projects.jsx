import React, { forwardRef } from "react";
import { FaGithub } from "react-icons/fa";

const Projects = forwardRef((props, ref) => {
  // Array containing details to all projects
  const projects = [
    {
      id: 1,
      src: "https://player.vimeo.com/video/979321586?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1",
      title: "course-landing-page",
      heading: "Learning Hub - Course Landing Page",
      link: "https://learning-hub-by-fazal.netlify.app",
      descp:
        "Learning Hub is a fictional course landing page using React JS, Tailwind CSS, and AOS for dynamic components, responsive styling, and smooth animations, featuring courses, instructors, and testimonials.",
      delay: "400",
      gitHub: "https://github.com/fhayat81/course-landing-page",
    },
    {
      id: 2,
      src: "https://player.vimeo.com/video/979324204?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1",
      title: "weather-app",
      heading: "Weather App",
      link: "https://weather-app-by-fazal.netlify.app",
      descp:
        "The Weather App, built with React JS and Tailwind CSS, fetches real-time weather data and dynamically changes its background based on the weather conditions of the specified location.",
      delay: "450",
      gitHub: "https://github.com/fhayat81/weather-app",
    },
    {
      id: 3,
      src: "https://player.vimeo.com/video/979322321?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1",
      title: "expenseTracker",
      heading: "Expense Tracker App",
      link: "https://expense-tracker-by-fazal-23ce10018.netlify.app",
      descp:
        "The Expense Tracker app, built with React JS and Tailwind CSS, manages transactions for categories, adds/edits categories, displays bar charts, filters transactions, includes a reset option, and saves data in local storage.",
      delay: "500",
      gitHub:
        "https://github.com/fhayat81/Expense_tracker_Web_Team_Task_23CE10018",
    },
    {
      id: 4,
      src: "https://player.vimeo.com/video/979323698?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1",
      title: "rock-paper-scissors",
      heading: "Stone Paper Scissors Game",
      link: "https://rock-paper-scissors-by-fazal.netlify.app",
      descp:
        "The Stone Paper Scissors game, built with HTML, CSS, and JavaScript, offers an interactive and responsive interface where players can play against the computer. The game tracks scores and provides visual feedback for each round.",
      delay: "550",
      gitHub: "https://github.com/fhayat81/stone-paper-scissors",
    },
    {
      id: 5,
      src: "https://player.vimeo.com/video/983769656?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1",
      title: "portfolio",
      heading: "Portfolio Website",
      link: "https://fazalhayatkhan-portfolio.netlify.app",
      descp:
        "A responsive portfolio website built with HTML and CSS, showcasing project videos and offering a downloadable resume. It highlights my skills, past projects, and skills, ensuring seamless usability across all devices.",
      delay: "600",
      gitHub: "https://github.com/fhayat81/Encryptix_taskno.2",
    },
    {
      id: 6,
      src: "https://player.vimeo.com/video/983769279?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1",
      title: "ecoVision-landing-page",
      heading: "EcoVision-landing page",
      link: "https://landing-page-fazal-encryptix.netlify.app",
      descp:
        "The responsive EcoVision landing page promotes an environmental campaign, ensuring device compatibility, featuring engaging visuals and intuitive navigation to effectively raise awareness about EcoVision's mission.",
      delay: "650",
      gitHub: "https://github.com/fhayat81/Encryptix_taskno.1",
    },
    {
      id: 7,
      src: "https://player.vimeo.com/video/983772794?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1",
      title: "calculator",
      heading: "Simple Calculator",
      link: "https://calculator-by-fazal-encryptix.netlify.app",
      descp:
        "A focused web project featuring a simple calculator designed with HTML, CSS, and JavaScript. This interactive tool allows users to perform basic arithmetic operations conveniently.",
      delay: "700",
      gitHub: "https://github.com/fhayat81/Encryptix_taskno.3",
    },
    {
      id: 8,
      src: "https://player.vimeo.com/video/983773138?title=0&amp;byline=0&amp;portrait=0&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;loop=1",
      title: "tribute-page",
      heading: "Grace Hopper: Tribute Page",
      link: "https://tribute-page-fazal-encryptix.netlify.app",
      descp:
        "A dedicated tribute page to Grace Hopper, showcasing her contributions to computer science and her illustrious career in the U.S. Navy. The page features major milestones, awards, and notable quotes, all styled using HTML, CSS, and JavaScript to create a responsive and interactive experience.",
      delay: "750",
      gitHub: "https://github.com/fhayat81/Encryptix_taskno.4",
    },
  ];

  return (
    <div ref={ref} id="projects" className="pt-16 md:pt-[75px]">
      {/* Heading */}
      <div>
        <p className="text-center text-primary font-semibold text-2xl md:text-3xl">
          PROJECTS
        </p>
        <p className="text-center">
          (click on the heading to view complete site)
        </p>
      </div>
      {/* Mapping project array */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {projects.map((data) => (
          <div
            data-aos="fade-up"
            data-aos-delay={data.delay}
            key={data.id}
            className="w-[320px] bg-white drop-shadow-lg rounded-lg p-1 flex flex-col items-center justify-center my-2 mx-1"
          >
            <div className="my-1">
              <iframe
                src={data.src}
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write;"
                muted
                title={data.title}
              ></iframe>
            </div>
            <div className="px-2 py-1">
              <a
                className="text-primary font-semibold text-xl hover:underline"
                href={data.link}
                target="_blank"
              >
                {data.heading}
              </a>
              <p className="leading-tight">{data.descp}</p>

              <a href={data.gitHub} target="_blank">
                <div className="bg-primary transition-all inline-flex justify-center items-center gap-1 duration-150 text-white px-2 py-[2px] rounded-lg hover:scale-105 active:scale-95 my-1">
                  <p>GitHub</p>
                  <FaGithub />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Projects;
