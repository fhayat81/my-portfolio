import { useEffect } from 'react';
import './App.css';
import Aboutme from './components/Aboutme';
import Contactme from './components/Contactme';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Skills from './components/Skills';
import AOS from 'aos';
import "aos/dist/aos.css";
import { MdArrowUpward } from "react-icons/md";

function App() {

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    })
    AOS.refresh();
  }, [])

  return (
    <div className='bg-slate-50'>
      <Navbar/>
      <Aboutme/>
      <Skills/>
      <Projects/>
      <Resume/>
      <Contactme/>
      <Footer/>
      <div className='hidden lg:inline fixed right-5 bottom-10 bg-primary rounded-full p-1 active:scale-95 hover:scale-105'>
        <a className='text-white text-3xl' href="#navbar"><MdArrowUpward/></a>
      </div>
    </div>
  )
}

export default App
