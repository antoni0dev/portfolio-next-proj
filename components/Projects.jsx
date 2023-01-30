import React from "react";

const Projects = () => {
  return (
    <div className="max-w-[1240px] mx-auto lg:h-screen flex flex-col justify-center items-center pt-16">
      <p className="text-xl tracking-widest text-[#c1c13d] uppercase">
        Projects
      </p>
      <h2 className="py-4">What I've Built</h2>
      <div className="grid md:grid-cols-2 gap-8"></div>
    </div>
  );
};

export default Projects;
