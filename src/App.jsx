import { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Skills from "./Components/Skills";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
  const [count, setCount] = useState(0);

  return (
    <container className="relative w-full h-screen">
      <div className="flex justify-center">
        <NavBar />
      </div>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </container>
  );
}

export default App;
