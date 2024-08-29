import { useEffect, useRef } from "react";
import "./App.css";
import Aboutme from "./components/Aboutme";
import Contactme from "./components/Contactme";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdArrowUpward } from "react-icons/md";



function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  const aboutMe = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const resume = useRef(null);
  const contactme = useRef(null);

  const navaboutMe = useRef(null);
  const navskills = useRef(null);
  const navprojects = useRef(null);
  const navresume = useRef(null);
  const navcontactme = useRef(null);


  window.addEventListener('scroll', ()=>{
    
    let aboutPos, skillPos, projectsPos, resumePos;
    if(aboutMe.current){
      aboutPos = aboutMe.current.getBoundingClientRect();
    }
    if(skills.current){
      skillPos = skills.current.getBoundingClientRect(); 
    }
    if(projects.current){
      projectsPos = projects.current.getBoundingClientRect();

    }
    if(resume.current){
      resumePos = resume.current.getBoundingClientRect();
    } 
    
    if(aboutPos.bottom > 100){
      navaboutMe.current.style.textDecoration = "underline"
      navaboutMe.current.style.scale = "105%"

      navskills.current.style.textDecoration = "none"
      navskills.current.style.scale = "100%"

      navprojects.current.style.textDecoration = "none"
      navprojects.current.style.scale = "100%"

      navresume.current.style.textDecoration = "none"
      navresume.current.style.scale = "100%"

      navcontactme.current.style.textDecoration = "none"
      navcontactme.current.style.scale = "100%"
    } else if(skillPos.bottom > 200){
      navskills.current.style.textDecoration = "underline"
      navskills.current.style.scale = "105%"

      navaboutMe.current.style.textDecoration = "none"
      navaboutMe.current.style.scale = "100%"

      navprojects.current.style.textDecoration = "none"
      navprojects.current.style.scale = "100%"

      navresume.current.style.textDecoration = "none"
      navresume.current.style.scale = "100%"

      navcontactme.current.style.textDecoration = "none"
      navcontactme.current.style.scale = "100%"
    } else if(projectsPos.bottom > 200){
      navprojects.current.style.textDecoration = "underline"
      navprojects.current.style.scale = "105%"

      navaboutMe.current.style.textDecoration = "none"
      navaboutMe.current.style.scale = "100%"

      navskills.current.style.textDecoration = "none"
      navskills.current.style.scale = "100%"

      navresume.current.style.textDecoration = "none"
      navresume.current.style.scale = "100%"

      navcontactme.current.style.textDecoration = "none"
      navcontactme.current.style.scale = "100%"
    } else if(resumePos.bottom > 300){
      navresume.current.style.textDecoration = "underline"
      navresume.current.style.scale = "105%"

      navaboutMe.current.style.textDecoration = "none"
      navaboutMe.current.style.scale = "100%"

      navskills.current.style.textDecoration = "none"
      navskills.current.style.scale = "100%"

      navprojects.current.style.textDecoration = "none"
      navprojects.current.style.scale = "100%"

      navcontactme.current.style.textDecoration = "none"
      navcontactme.current.style.scale = "100%"
    } else {
      navcontactme.current.style.textDecoration = "underline"
      navcontactme.current.style.scale = "105%"

      navaboutMe.current.style.textDecoration = "none"
      navaboutMe.current.style.scale = "100%"

      navprojects.current.style.textDecoration = "none"
      navprojects.current.style.scale = "100%"

      navresume.current.style.textDecoration = "none"
      navresume.current.style.scale = "100%"

      navskills.current.style.textDecoration = "none"
      navskills.current.style.scale = "100%"
    }
  })

  return (
    <div className="bg-slate-50">
      <Navbar ref1={navaboutMe} ref2={navskills} ref3={navprojects} ref4={navresume} ref5={navcontactme}/>
      <Aboutme ref={aboutMe}/>
      <Skills ref={skills}/>
      <Projects ref={projects}/>
      <Resume ref={resume}/>
      <Contactme ref={contactme}/>
      <Footer />
      <div className="hidden lg:inline fixed right-5 bottom-10 bg-primary rounded-full p-1 active:scale-95 hover:scale-105">
        <a className="text-white text-3xl" href="#">
          <MdArrowUpward />
        </a>
      </div>
    </div>
  );
}

export default App;
