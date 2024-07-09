import React from "react";
import styled from "styled-components";
import arrow from "../images/image.png";


const H1 = styled.h1`
  font-family: "Anton", sans-serif;
      color: transparent;
        -webkit-text-stroke-width: 3px;
      -webkit-text-stroke-color: #fff
      ;
`;


function About() {
  return (
    <div className="relative  w-full h-screen bg-black box-border flex flex-col gap-7">
      <div className="my-6 px-10">
        <H1 className="text-[16.02vw] my-[-10px] scale-y-125 tracking-tighter">
          ABOUT
        </H1>
      </div>
      <div className="text-slate-300 flex justify-center items-center" >
        <img className="rotate-[-45deg]"  width={250} src={arrow} alt="" />
        <p className="text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed corrupti
          consectetur quia temporibus, quibusdam accusantium labore voluptas
          eligendi deleniti ipsam dolores molestias assumenda corporis.
          Recusandae accusantium eum repellendus perspiciatis veniam totam nobis
          provident sint iste eligendi, quia consequuntur ea id a sapiente
          possimus ducimus! Reprehenderit tempora laboriosam natus eius nemo!
        </p>
      </div>
    </div>
  );
}

export default About;
