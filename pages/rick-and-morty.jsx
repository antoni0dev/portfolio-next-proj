import React from "react";
import Image from "next/image";
import rickmortyImg from "../public/assets/projects/rick-and-morty.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const rickAndMorty = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10 bg-black/70" />
        <Image
          className="absolute"
          src={rickmortyImg}
          alt="netflix img"
          fill
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-[11] p-2">
          <h2>Rick and Morty Wiki</h2>
          <h3>React.js & Bootstrap CSS & Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-10 m-5 grid md:grid-cols-5 gap-8 shadow-[#07F2C5] shadow-md">
        <div className="col-span-4 flex flex-col justify-center items-start gap-4">
          <p className="text-[#FFEE80]">Project</p>
          <h2>Overview</h2>
          <p className="text-xl tracking-wider">
            A Modern, Responsive Rick & Morty Wiki React.js project is a
            comprehensive and interactive platform that provides information
            about the popular animated TV show. The project was built using the
            latest technologies and tools, including React Hooks (useState and
            useEffect), Fetch API, Bootstrap for styling, Pagination, Data
            Filters, Search Bar, React Router, and Dynamic Routing. The use of
            React Hooks such as useState and useEffect enabled the creation of
            dynamic and reactive user interfaces, providing an immersive and
            engaging experience for the users. The Fetch API was utilized to
            fetch data from a remote server and render it on the page. This
            helped to keep the website fast and responsive, even with large
            amounts of data. Bootstrap was used to style the website and make it
            look professional and visually appealing. The use of Bootstrap
            allowed for a responsive layout that would adapt to different screen
            sizes and devices, ensuring an optimal viewing experience for users
            on all platforms. Pagination, Data Filters, and Search Bar were
            added to make navigation of the site more efficient and
            user-friendly. Users could now easily filter and search for specific
            information, making it easier to find what they were looking for.
            The addition of these features greatly improved the overall
            usability of the website. React Router was employed to handle the
            routing of the website and dynamic routing was used to provide a
            seamless user experience. This allowed for a clean and organized URL
            structure and made it easy for users to navigate through the
            different pages on the website. In conclusion, the Modern,
            Responsive Rick & Morty Wiki React.js project is a comprehensive
            platform that provides in-depth information about the popular
            animated TV show. The use of the latest technologies and tools,
            including React Hooks, Fetch API, Bootstrap, Pagination, Data
            Filters, Search Bar, React Router, and Dynamic Routing, has made the
            website fast, responsive, and user-friendly, providing a great
            experience for users.
          </p>
          <div>
            <button className="px-8 py-2 mt-4 mr-4">
              <a
                href="https://antoni0dev.github.io/rick-and-morty-wiki-react-proj/"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </button>
            <button className="px-8 py-2 mt-4">
              <a
                href="https://github.com/antoni0dev/rick-and-morty-wiki-react-proj"
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
                <RiRadioButtonFill className="pr-1 " /> React.js
              </p>
              <p className="py-2 flex items-center">
                <RiRadioButtonFill className="pr-1 " /> Bootstrap CSS
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

export default rickAndMorty;
