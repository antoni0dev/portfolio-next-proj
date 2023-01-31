import React from "react";
import Image from "next/image";
import netflixImg from "../public/assets/projects/netflix.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const netflix = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10 bg-black/70" />
        <Image
          className="absolute"
          src={netflixImg}
          alt="netflix img"
          fill
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-[11] p-2">
          <h2>Netflix 2.0</h2>
          <h3>Next.js & Tailwind CSS & Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-10 m-5 grid md:grid-cols-5 gap-8 shadow-[#07F2C5] shadow-md">
        <div className="col-span-4 flex flex-col justify-center items-start gap-4">
          <p className="text-[#FFEE80]">Project</p>
          <h2>Overview</h2>
          <p className="text-xl tracking-wider">
            A Netflix clone built with Next.js, Tailwind CSS and hosted on
            Firebase is the interface of the popular cutting-edge video
            streaming platform that delivers a seamless movie watching
            experience. With its intuitive user interface and fast, responsive
            design, this clone provides an enjoyable way to browse and watch
            movies. At the heart of the platform is a powerful slider that makes
            it easy to find your next favorite film. Simply swipe left or right
            to browse through a curated selection of the latest releases,
            classic films, and more. The slider is backed by a sophisticated API
            that fetches data from The Movie Database (TMDb) API, ensuring that
            all information is up-to-date and accurate. The platform&apos;s
            stylish design is powered by Tailwind CSS, a utility-first CSS
            framework that provides a sleek, modern look and feel. Whether
            you&apos;re watching on your desktop, tablet, or smartphone, the
            platform is optimized for all devices and provides a responsive,
            adaptive experience that&apos;s perfect for movie-watching on the
            go. And with Firebase hosting, the platform is fast, reliable, and
            always available. This means that you can enjoy your favorite movies
            without any buffering or interruptions, no matter where you are or
            what you&apos;re doing. In addition, the Firebase Authentication
            allows you to sign up or sign in on the website and save your
            favorite movies in your Account page. So why not dive into the world
            of film with this Next.js, Tailwind CSS, and Firebase-powered
            Netflix clone today?
          </p>
          <div>
            <button className="px-8 py-2 mt-4 mr-4">
              <a
                href="https://netflix2-0-next-proj.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </button>
            <button className="px-8 py-2 mt-4">
              <a
                href="https://github.com/antoni0dev/netflix2.0-next-proj"
                target="_blank"
                rel="noreferrer"
              >
                Code
              </a>
            </button>
          </div>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-[#07F2C5 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 text-center sm:text-left justify-items-center sm:justify-items-start items-center">
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 " /> Next.js
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 " /> Tailwind CSS
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 " /> JavaScript
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 " /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer text-[#FFEE80]">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default netflix;
