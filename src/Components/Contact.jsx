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

const H5 = styled.h5`
  font-size: 0.9rem;
  color: #646464;
  margin-bottom: 2px;
  font-weight: 600;
`;

const P = styled.p`
  font-size: 1rem;
`;
function Contact() {
  return (
    <div className="flex flex-col  w-full h-screen bg-black box-border text-white">
      <h1
        style={{ fontFamily: '"Anton", sans-serif' }}
        className="text-[14.22vw] scale-y-125 tracking-tighter my-6 px-10"
      >
        Con<Span>tact</Span>
      </h1>

      <div className=" flex justify-around">
        <form className="min-h-20 p-7 flex flex-col box-border">
          <label htmlFor="" className="my-1">
            Name
          </label>
          <input type="text" name="" id="" className="bg-" />
          transparent <label htmlFor="">Email</label>
          <input type="email" name="" id="" />
          <label htmlFor="">Message</label>
          <textarea name="" id=""></textarea>
          <button
            style={{ border: "1.5px solid white" }}
            class="bg-transparent my-5 w-full text-white px-4 py-1 rounded-lg text-xs"
          >
            Submit
          </button>
        </form>

        <div className="flex flex-col gap-7">
          <div>
            <H5>Phone</H5>
            <P>(+91)7906195495</P>
          </div>
          <div>
            <H5>Email</H5>
            <P>goel72.rishabh@gmail.com</P>
          </div>
          <div>
            <H5>Address</H5>
            <P>Noida , Uttar Pradesh</P>
          </div>
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
