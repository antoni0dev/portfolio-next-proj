import React from "react";
import Image from "next/image";
import Link from "next/link";

const Project = ({ projectSrc, projectName, technologyUsed, moreInfo }) => {
  return (
    <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-[#07F2C5] rounded-xl hover:bg-gradient-to-r from-[#FFEE80] to-[#07F2C5] group">
      <Image
        width={1000}
        height={1000}
        className="p-2 md:p-4 w-full h-full rounded-xl group-hover:opacity-10"
        src={projectSrc}
        alt="/"
      />
      <div className="hidden text-bg-color text-xl group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] max-w-[150px]">
        <h3 className="text-2xl tracking-wider text-center">{projectName}</h3>
        <p className="pb-4 pt-2 text-center">{technologyUsed}</p>
        <Link href={moreInfo}>
          <p className="text-center py-3 rounded-lg bg-bg-color text-white font-bold text-lg cursor-pointer">
            More Info
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Project;
