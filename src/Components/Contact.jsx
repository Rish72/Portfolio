import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import styled from "styled-components";

const Span = styled.span`
  color: transparent;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #fff;
`;

const Label = styled.label`
  font-size: 1rem;
  color: #fff;
  font-weight: 600;
`;

const H5 = styled.h5`
  font-size: 0.9rem;
  color: #646464;
  margin-bottom: 2px;
  font-weight: 600;
`;

const P = styled.p`
  font-size: 1rem;
`;


const ContactInfo = [
  {
    h5: "Phone",
    data: "(+91)7906195495",
  },
  {
    h5: "Email",
    data: "(goel72.rishabh@gmail.com",
  },
  {
    h5: "Address",
    data: "Noida , Uttar Pradesh",
  },
];

function Contact() {
  return (
    <div className="flex flex-col  w-full h-screen bg-black box-border text-white">
      <h1
        style={{ fontFamily: '"Anton", sans-serif' }}
        className="text-[14.22vw] scale-y-125 tracking-tighter my-6 px-10 text-right"
      >
        Con<Span>tact</Span>
      </h1>

      <div className=" flex justify-around mt-[-15px]">
        <form className="flex flex-col box-border">
          <Label>
            Name
          </Label>
          <input type="text" className="bg-transparent my-2 border-b" />
          <Label>Email</Label>
          <input type="email"  className="bg-transparent p-3 my-2 border-b"/>
          <Label >Message</Label>
          <textarea className="bg-transparent p-3 my-2 border-b w-[25vw]"></textarea>
          <button
            style={{ border: "1.5px solid white" }}
            className="bg-transparent my-2 w-full text-white px-4 py-3 rounded-lg text-xs"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-col gap-7">
          {ContactInfo.map((info) => (
            <div>
              <H5>{info.h5}</H5>
              <P>{info.data}</P>
            </div>
          ))}
          <div>
            <H5>Socials</H5>
            <div className="flex justify-start gap-3 ">
              <FaLinkedinIn />
              <FaGithub />
              <FaTwitter />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
