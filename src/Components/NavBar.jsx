import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";

const H4 = styled.h4`
  font-family: "Anton", sans-serif;
`;
const Span = styled.span`
  color: red;
  font-size : 20px;
`;

const Nav = ["HOME",'/', "ABOUT", '/',"SKILLS",'/', "PROJECTS", "/", "CONTACT"]

function NavBar() {

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    console.log("current scroll Y ", currentScrollY);

    if (currentScrollY > lastScrollY) {
      // Scrolling down
      setShow(false);
    } else {
      // Scrolling up
      setShow(true);
    }

    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);



  return (
    <nav className={`fixed z-20 top-5 transition-transform duration-300 ${show ? 'translate-y-0' : '-translate-y-[100px]'} h-12 w-[95%] bg-white flex justify-between items-center px-4 box-border rounded-xl border border-gray-400`}>
      <div>
        <H4>
          rishabh<Span>.</Span>
        </H4>
      </div>

      <ul className="flex justify-between text-xs gap-6">
        {
          Nav.map((item, i) => (
            <li key={i} ><a key={i} href="#+${item}"></a>{item}</li>
          ))
        }
      
      </ul>
      <div>
        <button
          style={{ border: "1.5px solid black" }}
          className="bg-transparent  text-black px-4 py-1 rounded-lg text-xs"
        >
          HIRE ME
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
