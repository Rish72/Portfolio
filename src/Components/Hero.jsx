import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-family: "Anton", sans-serif;
  margin-right: 1.5rem;
  display : inline;
  color : transparent;
      -webkit-text-stroke-width:  3px;
    -webkit-text-stroke-color: #fff;
`;
const Span = styled.span`
  color: red;
  font-size: 120px;
`;

function Hero() {
  return (
    <div className="box-border relative w-full bg-slate-300 h-[100vh] overflow-hidden">
      <img
        width={900}
        style={{ filter: "drop-shadow(0 0 0.75rem #3d3d3d)" }}
        className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 drop-shadow-2xl "
        src="src/images/Myphoto_png.png"
        alt=""
      />

      {/* info */}
      <div className="w-full border border-slate-800 h-[30%] flex justify-start items-end box-border px-10 py-5">
        <div>
          <h3 className="font-medium text-2xl">Full Stack</h3>
          <h3 className="font-medium text-2xl">Web Developer</h3>
        </div>
      </div>

       {/* Heading section */}
       <div className=" flex justify-start items-center w-full h-[40%] box-border ">
        {/* <H1 className="text-[16.02vw] my-[-10px] scale-y-125 tracking-tighter">
          Rishabh Goel<Span>.</Span>
        </H1> */}
        <marquee behavior="scroll" scrollamount="20" direction="left">
          <H1 className=" text-[16.02vw] bg-gradient-to-r from-cyan-500 to-blue-500 my-[-10px] scale-y-125 tracking-tighter">RISHABH GOEL<Span>.</Span></H1>
          <H1 className="text-[16.02vw] my-[-10px] scale-y-125 tracking-tighter">RISHABH GOEL<Span>.</Span></H1>
          <H1 className="text-[16.02vw] my-[-10px] scale-y-125 tracking-tighter">RISHABH GOEL<Span>.</Span></H1>
          <H1 className="text-[16.02vw] my-[-10px] scale-y-125 tracking-tighter">RISHABH GOEL<Span>.</Span></H1>
        </marquee>
      </div>

  

      {/* scroll text */}
      <div className="w-full border border-slate-800 h-[30%] flex justify-end items-end box-border px-10 py-5">
        <div className="flex flex-col items-center justify-center gap-3">
          <h3 className="font-medium text-3xl">Scroll</h3>
          <img
            className="rotate-[90deg]"
            width={50}
            src="src/images/image.png"
            alt=""
          />
        </div>
      </div>

         
    </div>
  );
}

export default Hero;
