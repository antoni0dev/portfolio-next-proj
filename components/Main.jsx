import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div
      id="home"
      className="p-5 w-full h-screen md:text-xs lg:text-sm flex justify-center items-center text-center"
    >
      <div>
        <p className="uppercase tracking-widest">
          <span className="p-1 rounded">
            LET&apos;S BUILD SOMETHING BULLISH TOGETHER
          </span>
        </p>
        <h1 className="py-4">
          Hey, I&apos;m <span className="text-[#FFEE80]">Antonio</span>
        </h1>
        <h1 className="py-2">
          A <span className="text-[#AA02F0]">Front End</span> Web Developer
        </h1>
        <p className="py-4 max-w-[70%] m-auto">
          Highly skilled Next.js Front-End Developer with extensive experience
          building fast and scalable web applications.
        </p>
        <div>
          <div className="flex max-w-[400px] justify-evenly items-center m-auto p-4">
            <a
              href="https://www.linkedin.com/in/antonio-simeonov-0061801b3/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-[#07F2C5] p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/antoni0dev"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-[#07F2C5] p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <a
              href="mailto:antoniosimeonov7@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-[#07F2C5] p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </a>
            <a
              href="https://resume.io/r/d0iJkiroN"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-md shadow-[#07F2C5] p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
