import React from "react";
import Image from "next/image";
import Link from "next/link";
import Project from "./Project";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1240px] mx-auto flex flex-col justify-center pt-16 w-[50%] md:w-[70%] lg:w-full"
    >
      <p className="text-xl tracking-widest text-[#c1c13d] uppercase">
        Projects
      </p>
      <h2 className="py-4">What I've Built</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <Project
          projectSrc="/../public/assets/projects/netflix.jpg"
          projectName="Netflix 2.0"
          technologyUsed="Next JS"
          moreInfo="https://github.com/antoni0dev/netflix2.0-next-proj"
        />
        <Project
          projectSrc="/../public/assets/projects/restaurant.png"
          projectName="Modern UI/UX Restaurant"
          technologyUsed="React JS"
          moreInfo="https://github.com/antoni0dev/modern-ui-ux-restaurant-react-proj"
        />
        <Project
          projectSrc="/../public/assets/projects/crypto.png"
          projectName="Live Crypto"
          technologyUsed="React JS"
          moreInfo="https://github.com/antoni0dev/livecrypto-react-proj"
        />
        <Project
          projectSrc="/../public/assets/projects/rick-and-morty.png"
          projectName="Rick and Morty Wiki"
          technologyUsed="React JS"
          moreInfo="https://github.com/antoni0dev/rick-and-morty-wiki-react-proj"
        />
      </div>
    </div>
  );
};

export default Projects;
