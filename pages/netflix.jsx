import React from 'react';
import netflixImg from '../public/assets/projects/netflix.jpg';
import TechnologiesAside from '@/components/TechnologiesAside';
import ProjectHero from '@/components/ProjectHero';
import ProjectOverview from '@/components/ProjectOverview';
import BackButton from '@/components/BackButton';

const netflix = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <ProjectHero
        imgSrc={netflixImg}
        title='Netflix 2.0'
        subtitle='Next.js & Tailwind CSS & Firebase'
      />
      <div className='max-w-[1240px] mx-auto p-10 m-5 grid md:grid-cols-5 gap-8 shadow-[#07F2C5] shadow-md'>
        <div className='col-span-4 flex flex-col justify-center items-start gap-4'>
          <ProjectOverview
            demoLink='https://netflix2-0-next-proj.vercel.app/'
            repoLink='https://github.com/antoni0dev/netflix2.0-next-proj'
          >
            A Netflix clone built with Next.js, Tailwind CSS and hosted on
            Firebase is the interface of the popular cutting-edge video
            streaming platform that delivers a seamless movie watching
            experience. With its intuitive user interface and fast, responsive
            design, this clone provides an enjoyable way to browse and watch
            movies. At the heart of the platform is a powerful slider that makes
            it easy to find your next favorite film. Simply swipe left or right
            to browse through a curated selection of the latest releases,
            classic films, and more. The slider is backed by a sophisticated API
            that fetches data from The Movie Database (TMDb) API, ensuring that
            all information is up-to-date and accurate. The platform&apos;s
            stylish design is powered by Tailwind CSS, a utility-first CSS
            framework that provides a sleek, modern look and feel. Whether
            you&apos;re watching on your desktop, tablet, or smartphone, the
            platform is optimized for all devices and provides a responsive,
            adaptive experience that&apos;s perfect for movie-watching on the
            go. And with Firebase hosting, the platform is fast, reliable, and
            always available. This means that you can enjoy your favorite movies
            without any buffering or interruptions, no matter where you are or
            what you&apos;re doing. In addition, the Firebase Authentication
            allows you to sign up or sign in on the website and save your
            favorite movies in your Account page. So why not dive into the world
            of film with this Next.js, Tailwind CSS, and Firebase-powered
            Netflix clone today?
          </ProjectOverview>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-[#07F2C5] rounded-xl p-4 overflow-auto'>
          <TechnologiesAside
            technologies={[
              'React.js',
              'Figma Design',
              'JavaScript',
              'Firebase',
            ]}
          />
        </div>
        <BackButton href='/#projects' />
      </div>
    </div>
  );
};

export default netflix;
