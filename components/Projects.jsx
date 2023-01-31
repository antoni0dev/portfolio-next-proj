import React from "react";
import Image from "next/image";
import Link from "next/link";
import Project from "./Project";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1240px] mx-auto flex flex-col justify-center pt-16 w-[85%] md:w-[90%] lg:w-full p-5"
    >
      <p className="text-xl tracking-widest text-[#FFEE80] uppercase">
        Projects
      </p>
      <h2 className="py-4">What I&apos;ve Built</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Project
          projectSrc="/../public/assets/projects/netflix.jpg"
          projectName="Netflix 2.0"
          technologyUsed="Next JS"
          moreInfo="/netflix"
        />
        <Project
          projectSrc="/../public/assets/projects/restaurant.png"
          projectName="Modern UI/UX Restaurant"
          technologyUsed="React JS"
          moreInfo="/restaurant"
        />
        <Project
          projectSrc="/../public/assets/projects/crypto.png"
          projectName="Live Crypto"
          technologyUsed="React JS"
          moreInfo="/crypto"
        />
        <Project
          projectSrc="/../public/assets/projects/rick-and-morty.png"
          projectName="Rick and Morty Wiki"
          technologyUsed="React JS"
          moreInfo="/rick-and-morty"
        />
      </div>
    </div>
  );
};

export default Projects;
