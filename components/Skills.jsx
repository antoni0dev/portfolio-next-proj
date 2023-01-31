import React from "react";
import Image from "next/image";
import Skill from "./Skill";
import netflixImg from "../public/assets/skills/nextjs.png";
import tailwindImg from "../public/assets/skills/tailwind.png";
import reactImg from "../public/assets/skills/react.png";
import jsImg from "../public/assets/skills/javascript.png";
import cssImg from "../public/assets/skills/css.png";
import htmlImg from "../public/assets/skills/html.png";
import firebaseImg from "../public/assets/skills/firebase.png";
import githubImg from "../public/assets/skills/github.png";

const Skills = () => {
  return (
    <div
      id="skills"
      className="max-w-[1240px] mx-auto lg:h-screen flex flex-col justify-center pt-16 w-[85%] md:w-[90%] lg:w-full p-5"
    >
      <p className="text-xl tracking-widest text-[#FFEE80] uppercase">Skills</p>
      <h2 className="py-4">What I Can Do</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Skill imgSrc={netflixImg} skillName="Next.js" />
        <Skill imgSrc={tailwindImg} skillName="Tailwind CSS" />
        <Skill imgSrc={reactImg} skillName="React.js" />
        <Skill imgSrc={jsImg} skillName="Javascript" />
        <Skill imgSrc={cssImg} skillName="CSS" />
        <Skill imgSrc={htmlImg} skillName="HTML" />
        <Skill imgSrc={firebaseImg} skillName="Firebase" />
        <Skill imgSrc={githubImg} skillName="Github" />
      </div>
    </div>
  );
};

export default Skills;
