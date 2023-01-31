import React from "react";
import Image from "next/image";
import profileIMG from "../public/assets/profile.jpeg";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col lg:grid grid-cols-3 m-auto max-w-[1240px] gap-8 lg:h-screen p-5 pb-16"
    >
      <div className="w-[85%] md:w-[90%] lg:w-full mx-auto tracking-wide col-span-2 flex flex-col justify-between">
        <p className="text-xl tracking-widest text-[#FAD000] uppercase">
          About
        </p>
        <h2 className="py-4">Who I Am</h2>
        <p className="py-2">~ I am not your ordinary developer</p>
        <p>
          Antonio Simeonov <span className="text-[#07F2C5]">(antoni0dev)</span>{" "}
          is a front end web developer with expertise in Next.js, React.js, and
          Tailwind. He has a deep experience in the field and has a proven track
          record of delivering high-quality, scalable solutions.
        </p>
        <p>
          Antonio is well-versed in Next.js, a powerful framework for building
          server-rendered React applications. He has a deep understanding of the
          architecture, features, and best practices of Next.js, and uses this
          knowledge to build fast and reliable web applications that perform
          well under heavy load. He also has a strong background in React.js, a
          popular JavaScript library for building user interfaces. He has
          extensive experience creating complex UI components and integrating
          them into existing applications.
        </p>
        <p>
          In addition to his technical skills, Antonio is highly proficient in
          Tailwind, a utility-first CSS framework. He uses Tailwind to create
          clean and responsive user interfaces that are optimized for both
          desktop and mobile devices. He is an expert in leveraging the power of
          Tailwind to create custom designs that meet the specific needs of each
          client.
        </p>
        <p>
          Beyond his technical skills, Antonio is a dedicated and enthusiastic
          professional. He is always eager to learn and stay current with the
          latest technologies and trends in web development. He is also a strong
          communicator and collaborator, working closely with clients and team
          members to ensure that projects are completed on time and to the
          highest standards.
        </p>
      </div>
      <div className="w-[50%] md:w-[70%] lg:w-full h-full m-auto shadow-xl shadow-[#07F2C5] rounded-l hover:scale-110 ease-in duration-300">
        <Image
          src={profileIMG}
          className="rounded-xl w-full h-full object-cover"
          height={477}
          width={474}
          alt="profile pic"
        />
      </div>
      <div></div>
    </div>
  );
};

export default About;
