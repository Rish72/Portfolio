import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #fff;
  font-family: "Anton", sans-serif;
`;

const Proj_span = styled.span`
  transition : color 0.5s ease-in-out;
  font-weight: 100;
  font-family: "Anton", sans-serif;
  &:hover {
    color: transparent;
    -webkit-text-stroke-width: 0.5px;
    -webkit-text-stroke-color: #fff;
  }
`;

const projects = [
  {
    title: "POSTAWAY",
    type: "FULL STACK",
    link : "https://github.com/Rish72/Postaway"
  },
  {
    title: "E COMMERCE",
    type: "FULL STACK",
    link : "https://github.com/Rish72/E-Commerce_API"
  },
  {
    title: "PORTFOLIO",
    type: "FRONTEND",
    link : "https://github.com/Rish72/Portfolio"
  },
  
];

function Projects() {
  return (
    <div className="bg-black relative w-full h-[100vh] border flex justify-center items-center border overflow-hidden box-border">
      <div className="flex flex-col text-white justify-center">
        <h1
          style={{ fontFamily: '"Anton", sans-serif' }}
          className="mb-[-90px] px-10 text-[14.22vw] scale-y-125 tracking-tighter"
        >
          PROJ
        </h1>
        <H1 className="text-[14.22vw] scale-y-125 tracking-tighter px-10">
          ECTS
        </H1>
      </div>
      <div className="text-white box-border h-[100vh] flex flex-col justify-center p-40">
        {projects.map((proj) => (
          <a href={proj.link} target="_blank" className="py-10 border-b border-slate-400 flex justify-between box-border cursor-pointer">
            <h1 className="text-[4.5vw] mr-20">{proj.title}</h1>
            <Proj_span>{proj.type}</Proj_span>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Projects;
