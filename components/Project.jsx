import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ projectSrc, projectName, technologyUsed, moreInfo }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#07F2C5] rounded-xl hover:bg-gradient-to-r from-[#451f51] to-[#5fc1a9] group">
      <Image
        width={1000}
        height={1000}
        className="p-2 md:p-4 w-full h-full rounded-xl group-hover:opacity-10"
        src={projectSrc}
        alt="/"
      />
      <div className="hidden text-bg-color text-xl group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[150px]">
        <h3 className="text-sm md:text-xl lg:text-2xl tracking-wider text-center">
          {projectName}
        </h3>
        <p className="text-sm md:text-xl lg:text-2xl pb-4 pt-2 text-center">
          {technologyUsed}
        </p>
        <Link href={moreInfo}>
          <p className="w-[143px] md:w-max text-sm md:text-xl lg:text-2xl text-center p-3 rounded-lg bg-bg-color text-white font-bold cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Project;
