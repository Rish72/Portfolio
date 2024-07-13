import { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import "./App.css";
// import ProjectCard from "./Components/ProjectCard";
import Loader from "./Components/Loader";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {

  const [isLoading , setIsLoading] = useState(true);
  useEffect(() => {
    document.title = "Rishabh Goel";
  },[])

  useEffect(()=>{
    
    const timer = setInterval(() => {
      setIsLoading(false);
    }, 100);

    return () => clearInterval(timer)
  },[])
  
  if(isLoading){
      return <Loader />
  }

  return (
    <ReactLenis root>
      <div className="relative w-full h-screen">
        <div className="flex justify-center">
          <NavBar />
        </div>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
      {/* <ProjectCard/> */}

    </ReactLenis>
  );
}

export default App;
