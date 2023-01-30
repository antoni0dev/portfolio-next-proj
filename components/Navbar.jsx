import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full shadow-xl z-[100] bg-bg-color">
      <div className="flex justify-between items-center px-4 py-2">
        <div>
          <Image
            className="rounded-lg"
            src="/../public/assets/logo.png"
            width={80}
            height={50}
            alt="logo"
          />
        </div>
        <div className="flex justify-between items-center">
          <ul className="hidden md:flex md:text-xs lg:text-sm justify-between items-center gap-5">
            <Link href="/">
              <li>Home</li>
            </Link>
            <Link href="/">
              <li>About</li>
            </Link>
            <Link href="">
              <li>Skills</li>
            </Link>
            <Link href="">
              <li>Projects</li>
            </Link>
            <Link href="">
              <li>Resume</li>
            </Link>
            <Link href="">
              <li>Contact</li>
            </Link>
          </ul>
          <div className="md:hidden">
            <AiOutlineMenu onClick={handleNav} size={25} />
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div
        className={
          nav
            ? "md:hidden fixed left-0 top-0 w-full h-screen bg-[#1b222c]/90"
            : ""
        }
      >
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[75%] sm:w=[60%] md:w-[45%] h-screen border-r border-primary-color p-5 ease-in duration-500"
              : "fixed left-[-150%] top-0 p-5 ease-in duration-500"
          }
        >
          <div>
            <div className="flex justify-between items-center">
              <Image
                className="rounded-lg"
                src="/../public/assets/logo.png"
                width={80}
                height={50}
                alt="logo"
              />
              <div onClick={handleNav}>
                <AiOutlineClose
                  className="p-2 bg-[#657786] hover:bg-[#AAB8C2] rounded-full shadow-2xl shadow-outline shadow-white-900 cursor-pointer"
                  size={35}
                />
              </div>
            </div>
            <div className="border-b border-primary-color">
              <p className="w-[85%] md:w-[90%] py-4 font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-primary-color to-[#E1E8ED]">
                Let's build something bullish together
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col justify-between gap-20">
            <ul className="flex flex-col gap-3 text -sm">
              <Link href="/">
                <li className="w-min">Home</li>
              </Link>
              <Link href="/">
                <li className="w-min">About</li>
              </Link>
              <Link href="/">
                <li className="w-min">Skills</li>
              </Link>
              <Link href="/">
                <li className="w-min">Projects</li>
              </Link>
              <Link href="/">
                <li className="w-min">Contact</li>
              </Link>
            </ul>
            <div>
              <p className="uppercase tracking-widest text-[#AAB8C2]">
                Let's Connect
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <div className="rounded-full shadow-lg shadow-[#E1E8ED] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaLinkedinIn />
                </div>
                <div className="rounded-full shadow-lg shadow-[#E1E8ED] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <FaGithub />
                </div>
                <div className="rounded-full shadow-lg shadow-[#E1E8ED] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <AiOutlineMail />
                </div>
                <div className="rounded-full shadow-lg shadow-[#E1E8ED] p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                  <BsFillPersonLinesFill />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
