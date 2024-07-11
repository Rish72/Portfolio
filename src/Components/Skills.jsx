import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Anton", sans-serif;
  color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #fff;
`;

const Btn = styled.button`
  &:active{
    background-color: red;
  }
`;

function Skills() {
  return (
    <section id="skills" className="bg-black border border-red-900 relative w-full h-screen">
      <div className="flex justify-between items-baseline px-10">
        <div className=" flex p-8 box-border  justify-between w-[50%] items-center h-10 text-2xl text-white my-5">
          <button className=" hover:bg-sky-700 border p-3 rounded-full">  FRONTEND </button>
          <button>BACKEND</button>
          <button>DATABASE</button>
          <Btn>ADDITIONAL</Btn>
        </div>
        <H1 className="text-[14.42vw] my-5 scale-y-125 tracking-tighter">
          SKILLS
        </H1>
      </div>
    </section>
  );
}

export default Skills;
