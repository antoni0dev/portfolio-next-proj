import React from "react";
import Image from "next/image";
import cryptoImg from "../public/assets/projects/crypto.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const crypto = () => {
  return (
    <div className="w-full h-full overflow-x-hidden">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10 bg-black/70" />
        <Image
          className="absolute"
          src={cryptoImg}
          alt="netflix img"
          fill
          objectFit="cover"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-[11] p-2">
          <h2>Live Crypto</h2>
          <h3>React.js & Tailwind CSS & Firebase</h3>
        </div>
      </div>
      <div className="max-w-[1240px] mx-auto p-10 m-5 grid md:grid-cols-5 gap-8 shadow-[#07F2C5] shadow-xl">
        <div className="col-span-4 flex flex-col justify-center items-start gap-4">
          <p className="text-[#FFEE80]">Project</p>
          <h2>Overview</h2>
          <p className="text-xl tracking-wider">
            A responsive clone of CoinMarketCap called LiveCrypto built using
            React.js, Tailwind CSS, Firebase and the CoinGecko Cryptocurrency
            API. The frontend of the app is built using React.js, which provides
            a seamless user experience. It is designed to be fast and
            responsive, so the user can get the information they need quickly.
            The app&apos;s UI is built using Tailwind CSS, which gives the app a
            modern and clean look. The app utilizes the CoinGecko Cryptocurrency
            API to fetch real-time cryptocurrency data, including the latest
            prices, market capitalization, and 24-hour volume. The API is easy
            to integrate and provides reliable and accurate data. The app uses
            Firebase to store user data, such as the user&apos;s preferred
            currency and the cryptocurrencies they are interested in. This
            ensures that the user&apos;s preferences are remembered, even if
            they close the app or switch devices. Some of the features of the
            app include: Real-time cryptocurrency data User-friendly interface
            Option to select preferred currency Option to add and remove
            cryptocurrencies from the watchlist Mobile responsive design The app
            has been thoroughly tested and optimized for performance. I am
            confident that it will provide users with an excellent experience
            and help them stay up to date with the latest cryptocurrency
            information.
          </p>
          <div>
            <button className="px-8 py-2 mt-4 mr-4">
              <a
                href="https://netflix2-0-next-proj.vercel.app/"
                target="_blank"
                rel="noreferrer"
              >
                Demo
              </a>
            </button>
            <button className="px-8 py-2 mt-4">
              <a
                href="https://github.com/antoni0dev/netflix2.0-next-proj"
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
                <RiRadioButtonFill className="pr-1 " /> Tailwind CSS
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

export default crypto;
