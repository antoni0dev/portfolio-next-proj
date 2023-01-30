import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div
      id="contact"
      className="m-auto max-w-[1240px] pt-16 w-[50%] md:w-[70%] lg:w-full"
    >
      <p className="text-xl tracking-widest text-[#c1c13d] uppercase">
        Contact
      </p>
      <h2 className="py-4">Get in Touch</h2>
      <div className="grid lg:grid-cols-5 gap-8">
        {/* Left */}
        <div className="p-8 col-span-3 lg:col-span-2 w-full h-full rounded-xl shadow-xl shadow-black">
          <div>
            <div className="rounded-xl h-full w-full">
              <Image
                width={600}
                height={600}
                className="h-full w-full rounded-xl hover:scale-105 ease-in duration-300"
                src="/../public/assets/contact.jpeg"
                alt="contact"
              />
            </div>
            <div>
              <h2 className="py-4">Antonio Simeonov</h2>
              <p>Front-End Developer</p>
              <p className="py-4">
                I am available for freelance or full-time positions. Contact me
                and let's talk.
              </p>
            </div>
            <div>
              <p className="uppercase pt-8 text-center">Connect with me</p>
              <div className="pt-4 flex justify-evenly items-center gap-4 ">
                <div className="rounded-full shadow-lg shadow-[#7c96ab] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaLinkedin size={15} />
                </div>
                <div className="rounded-full shadow-lg shadow-[#7c96ab] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <FaGithub size={15} />
                </div>
                <div className="rounded-full shadow-lg shadow-[#7c96ab] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <AiOutlineMail size={15} />
                </div>
                <div className="rounded-full shadow-lg shadow-[#7c96ab] p-4 cursor-pointer hover:scale-110 ease-in duration-300">
                  <BsFillPersonLinesFill size={15} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Right */}
        <div className="col-span-3 w-full h-auto shadow-xl shadow-black rounded-xl p-8">
          <form>
            <div className="grid md:grid-cols-2 gap-4 w-full">
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Name</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-primary-color text-[#E1E8ED] bg-inherit"
                  type="text"
                />
              </div>
              <div className="flex flex-col">
                <label className="uppercase text-sm py-2">Phone Number</label>
                <input
                  className="border-2 rounded-lg p-3 flex border-primary-color text-[#E1E8ED] bg-inherit"
                  type="text"
                />
              </div>
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Email</label>
              <input
                className="border-2 rounded-lg p-3 flex border-primary-color text-[#E1E8ED] bg-inherit"
                type="email"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Subject</label>
              <input
                className="border-2 rounded-lg p-3 flex border-primary-color text-[#E1E8ED] bg-inherit"
                type="text"
              />
            </div>
            <div className="flex flex-col py-2">
              <label className="uppercase text-sm py-2">Message</label>
              <textarea
                className="border-2 rounded-lg p-3 flex border-primary-color text-[#E1E8ED] bg-inherit"
                rows={10}
              />
            </div>
            <button
              className="w-full p-3 mt-4 border shadow-gray-400 rounded-xl uppercase bg-gradient-to-r text-[#7c96ab]"
              type="submit"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="flex justify-center text-center py-12">
        <Link href="/">
          <div>
            <HiOutlineChevronDoubleUp
              className="border rounded-full p-2 flex border-primary-color text-[#E1E8ED] bg-inherit shadow-gray-400 shadow-md"
              size={50}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
