import React from "react";
import Image from "next/image";
import Skill from "./Skill";

const Skills = () => {
  return (
    <div className="max-w-[1240px] mx-auto lg:h-screen flex flex-col justify-center items-center pt-16">
      <p className="text-xl tracking-widest text-[#c1c13d] uppercase">Skills</p>
      <h2 className="py-4">What I Can Do</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Skill
          imgSrc="/../public/assets/skills/nextjs.png"
          skillName="Next.js"
        />
        <Skill
          imgSrc="/../public/assets/skills/tailwind.png"
          skillName="Tailwind CSS"
        />
        <Skill
          imgSrc="/../public/assets/skills/react.png"
          skillName="React.js"
        />
        <Skill
          imgSrc="/../public/assets/skills/javascript.png"
          skillName="Javascript"
        />
        <Skill imgSrc="/../public/assets/skills/css.png" skillName="CSS" />
        <Skill imgSrc="/../public/assets/skills/html.png" skillName="HTML" />
        <Skill
          imgSrc="/../public/assets/skills/firebase.png"
          skillName="Firebase"
        />
        <Skill
          imgSrc="/../public/assets/skills/github.png"
          skillName="Github"
        />
      </div>
    </div>
  );
};

export default Skills;