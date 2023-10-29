import React from 'react';
import Image from 'next/image';
import profileIMG from '../public/assets/1.jpeg';

const About = () => {
  return (
    <div
      id='about'
      className='flex flex-col lg:grid grid-cols-3 m-auto max-w-[1240px] gap-8 lg:h-screen p-5 pb-16'
    >
      <div className='w-[85%] md:w-[90%] lg:w-full mx-auto tracking-wide col-span-2 flex flex-col justify-center'>
        <div>
          <p className='text-xl tracking-widest text-[#FAD000] uppercase'>
            About
          </p>

          <h2 className='py-4'>Who I Am</h2>
        </div>
        <p className='pb-2'>
          Antonio Simeonov, known in the tech community as{' '}
          <i className='text-[#07F2C5]'>antoni0dev</i>, is a distinguished
          frontend developer with a specialization in React and TypeScript. He
          masterfully utilizes tools like React Query and Redux to ensure
          optimal state management, demonstrating a finesse with styling
          libraries and a prowess in deploying styled components. With each
          project, Antonio showcases his unwavering commitment to delivering
          cutting-edge, scalable solutions, underpinned by his rich experience
          and dedication to quality and innovation. Beyond his technical skills,
          Antonio is a dedicated and enthusiastic professional. He is always
          eager to learn and stay current with the latest technologies and
          trends in web development. He is also a strong communicator and
          collaborator, working closely with clients and team members to ensure
          that projects are completed on time and to the highest standards.
        </p>
      </div>
      <div className='w-[50%] md:w-[70%] lg:w-full h-full m-auto shadow-xl shadow-[#07F2C5] rounded-l hover:scale-110 ease-in duration-300'>
        <Image
          src={profileIMG}
          className='h-full object-cover'
          alt='profile pic'
        />
      </div>
      <div></div>
    </div>
  );
};

export default About;
