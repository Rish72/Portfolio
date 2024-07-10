import { useEffect, useState } from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {

  useEffect(() => {
    document.title = "Rishabh Goel";
  },[])
  

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
    </ReactLenis>
  );
}

export default App;
