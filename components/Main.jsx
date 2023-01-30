import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Main = () => {
  return (
    <div className="w-screen h-screen md:text-xs lg:text-sm flex justify-center items-center text-center">
      <div>
        <p className="text-primary-color uppercase tracking-widest">
          LET'S BUILD SMETHING BULLISH TOGETHER
        </p>
        <h1 className="py-4 text-primary-color">
          Hey, I'm <span className="text-[#c1c13d]">Antonio</span>
        </h1>
        <h1 className="py-2">A Front-End Web Developer</h1>
        <p className="py-4 max-w-[70%] m-auto">
          Highly skilled Next.js Front-End Developer with extensive experience
          building fast and scalable web applications.
        </p>
        <div>
          <div className="flex max-w-[400px] justify-evenly items-center m-auto p-4">
            <div className="rounded-full shadow-lg shadow-[#7c96ab] p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedin />
            </div>
            <div className="rounded-full shadow-lg shadow-[#7c96ab] p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-[#7c96ab] p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-[#7c96ab] p-4 md:p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
