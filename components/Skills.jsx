import React from 'react';
import Image from 'next/image';
import Skill from './Skill';
import netflixImg from '../public/assets/skills/nextjs.png';
import tailwindImg from '../public/assets/skills/tailwind.png';
import reactImg from '../public/assets/skills/react.png';
import jsImg from '../public/assets/skills/javascript.png';
import cssImg from '../public/assets/skills/css.png';
import htmlImg from '../public/assets/skills/html.png';
import firebaseImg from '../public/assets/skills/firebase.png';
import tsImg from '../public/assets/skills/ts.png';
import reduxImg from '../public/assets/skills/redux.svg';
import scImg from '../public/assets/skills/sc.png';
import rqImg from '../public/assets/skills/rq.png';
import muiImg from '../public/assets/skills/mui.png';

const skills = [
  {
    name: 'Next.js',
    imgSrc: netflixImg,
  },
  {
    name: 'React.js',
    imgSrc: reactImg,
  },
  {
    name: 'Redux',
    imgSrc: reduxImg,
  },
  {
    name: 'React Query',
    imgSrc: rqImg,
  },
  {
    name: 'TypeScript',
    imgSrc: tsImg,
  },
  {
    name: 'Tailwind CSS',
    imgSrc: tailwindImg,
  },
  {
    name: 'Material UI',
    imgSrc: muiImg,
  },
  {
    name: 'Styled Components',
    imgSrc: scImg,
  },
  {
    name: 'Javascript',
    imgSrc: jsImg,
  },
  {
    name: 'CSS',
    imgSrc: cssImg,
  },
  {
    name: 'HTML',
    imgSrc: htmlImg,
  },
  {
    name: 'Firebase',
    imgSrc: firebaseImg,
  },
];

const Skills = () => {
  return (
    <div
      id='skills'
      className='max-w-[1240px] mx-auto lg:h-screen flex flex-col justify-center pt-16 w-[85%] md:w-[90%] lg:w-full p-5'
    >
      <p className='text-xl tracking-widest text-[#FFEE80] uppercase'>Skills</p>
      <h2 className='py-4'>What I Can Do</h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
        {skills.map(({ name, imgSrc }, index) => (
          <Skill key={index} imgSrc={imgSrc} skillName={name} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
