import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
const Div = styled.div`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

function ProjectCard() {
  return (
    <div className="flex justify-center items-center w-[100vw] h-[100vh] bg-black">
      <a href="https://github.com/rish72/postaway" target="_blank">
        <Div
          as={motion.div}
          whileHover={{ rotate: "-5deg" }}
          className=" text-white p-5 rounded-xl w-60 h-64 backdrop-blur-lg shadow-xl box-border"
        >
          <div className="border border-[rgba(255,255,255,0.1)] flex items-center justify-center text-white rounded-md h-[50%]">
            <h1>Project</h1>
          </div>
          <div className="p-4 rounded-md h-[50%] flex flex-col gap-3">
            <p className="font-semibold text-">BACKEND</p>
            <p>Social Media</p>
          </div>
        </Div>
      </a>
    </div>
  );
}

export default ProjectCard;

{
  /* <div className="max-w-sm p-6 bg-slate-50 bg-opacity-5 backdrop-blur-md rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1720423413643-363310b689e8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="random"
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="absolute top-4 right-4">🥺</div>
        </div>
        <div className="mt-4">
          <h3 className="text-xl font-semibold text-white">Rishabh</h3>
          <p className="text-sm text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam
            autem ut porro suscipit commodi maxime!
          </p>
          <p className="text-sm text-gray-400 mt-2">2018</p>
        </div>
      </div> */
}
