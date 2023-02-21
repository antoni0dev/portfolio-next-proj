import React from "react";
import Image from "next/image";
import Link from "next/link";
import Project from "./Project";
import netflixImg from "../public/assets/projects/netflix.jpg";
import restaurantImg from "../public/assets/projects/restaurant.png";
import cryptoImg from "../public/assets/projects/crypto.png";
import rickandmortyImg from "../public/assets/projects/rick-and-morty.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="max-w-[1240px] mx-auto flex flex-col justify-center pt-16 w-[85%] md:w-[90%] lg:w-full p-5"
    >
      <p className="text-xl tracking-widest text-[#FFEE80] uppercase">
        Projects
      </p>
      <h2 className="py-4">What Ive Built</h2>
      <div className="grid grid-cols-1 grid-rows-1 md:grid-rows-2 md:grid-cols-2 gap-8">
        <Project
          projectSrc={netflixImg}
          projectName="Netflix 2.0"
          technologyUsed="Next JS"
          moreInfo="/netflix"
        />
        <Project
          projectSrc={restaurantImg}
          projectName="Modern UI/UX Restaurant"
          technologyUsed="React JS"
          moreInfo="/restaurant"
        />
        <Project
          projectSrc={cryptoImg}
          projectName="Live Crypto"
          technologyUsed="React JS"
          moreInfo="/crypto"
        />
        <Project
          projectSrc={rickandmortyImg}
          projectName="Rick and Morty Wiki"
          technologyUsed="React JS"
          moreInfo="/rick-and-morty"
        />
      </div>
    </div>
  );
};

export default Projects;
