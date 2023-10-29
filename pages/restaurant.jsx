import React from 'react';
import Image from 'next/image';
import restaurantImg from '../public/assets/projects/restaurant.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const restaurant = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10 bg-black/70' />
        <Image
          className='absolute'
          src={restaurantImg}
          alt='netflix img'
          fill
          objectFit='cover'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-[11] p-2'>
          <h2>Modern UI/UX Restaurant</h2>
          <h3>React.js & Figma Design & Firebase</h3>
        </div>
      </div>
      <div className='max-w-[1240px] mx-auto p-10 m-5 grid md:grid-cols-5 gap-8 shadow-[#07F2C5] shadow-md'>
        <div className='col-span-4 flex flex-col justify-center items-start gap-4'>
          <p className='text-[#FFEE80]'>Project</p>
          <h2>Overview</h2>
          <p className='text-xl tracking-wider'>
            The Modern UI/UX Restaurant Project is a cutting-edge platform for
            showcasing the offerings of a restaurant. It was built using React
            and leverages the power of functional components and their
            reusability. The project showcases my knowledge of fundamental CSS
            properties, including Flex & Grid Layouts and Figma Designs,
            Animations, and Gradients. The file and folder structure of the
            project was designed to be efficient and scalable, making it easy to
            navigate and maintain. The use of functional components has made the
            code more organized and reusable, enabling me to write cleaner, more
            efficient code. The design of the website was created using Figma
            and incorporates the latest trends in UI/UX design. I used
            animations and gradients to make the website more engaging and
            interactive, and to provide a modern, visually appealing look and
            feel. The website was designed with responsiveness in mind, and I
            used media queries to ensure that it would look and function
            properly on most devices. I also took care to ensure that the
            website would be accessible and usable for users with different
            abilities, making it an inclusive and user-friendly platform. In
            conclusion, the Modern UI/UX Restaurant Project is a comprehensive
            platform for showcasing the offerings of a restaurant. The use of
            React and functional components, along with my knowledge of
            fundamental CSS properties, has enabled me to create a modern,
            responsive, and engaging website that provides a great user
            experience. The website&apos;s clean and organized file and folder
            structure, along with its use of animations and gradients, make it a
            great example of modern UI/UX design.
          </p>
          <div>
            <button className='px-8 py-2 mt-4 mr-4'>
              <a
                href='https://antoni0dev.github.io/modern-ui-ux-restaurant-react-proj/'
                target='_blank'
                rel='noreferrer'
              >
                Demo
              </a>
            </button>
            <button className='px-8 py-2 mt-4'>
              <a
                href='https://github.com/antoni0dev/modern-ui-ux-restaurant-react-proj'
                target='_blank'
                rel='noreferrer'
              >
                Code
              </a>
            </button>
          </div>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-[#07F2C5 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 text-center sm:text-left justify-items-center sm:justify-items-start items-center'>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 ' /> React.js
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 ' /> Figma Design
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 ' /> JavaScript
              </p>
              <p className='py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1 ' /> Firebase
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer text-[#FFEE80]'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default restaurant;
