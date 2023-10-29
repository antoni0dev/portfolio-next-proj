import Image from 'next/image';
import React from 'react';

const ProjectHero = ({ title, subtitle, imgSrc }) => {
  return (
    <div className='w-screen h-[30vh] lg:h-[40vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] z-10 bg-black/70' />
      <Image
        className='absolute'
        src={imgSrc}
        alt='netflix img'
        fill
        objectFit='cover'
      />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-[11] p-2'>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
      </div>
    </div>
  );
};

export default ProjectHero;
