import React from "react";
import styled from "styled-components";

const H4 = styled.h4`
  font-family: "Anton", sans-serif;
`;
const Span = styled.span`
  color: red;
  font-size : 20px;
`;

function NavBar() {
  return (
    <nav className="absolute h-12 w-[95%] bg-slate-100 flex justify-between items-center px-4 box-border rounded-xl border border-gray-400">
      <div>
        <H4 className="">
          rishabh<Span>.</Span>
        </H4>
      </div>

      <ul className="flex justify-between text-xs gap-6">
        <li className="font-bold">HOME</li>
        <li>/</li>
        <li>ABOUT</li>
        <li>/</li>
        <li>PROJECTS</li>
        <li>/</li>
        <li>CONTACT</li>
      </ul>
      <div>
        <button
          style={{ border: "1.5px solid black" }}
          class="bg-transparent  text-black px-4 py-1 rounded-lg text-xs"
        >
          HIRE ME
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
