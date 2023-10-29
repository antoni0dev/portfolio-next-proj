import React from 'react';
import restaurantImg from '../public/assets/projects/restaurant.png';
import ProjectHero from '@/components/ProjectHero';
import ProjectOverview from '@/components/ProjectOverview';
import TechnologiesAside from '@/components/TechnologiesAside';
import BackButton from '@/components/BackButton';

const restaurant = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <ProjectHero
        title='Modern UI/UX Restaurant Website'
        subtitle='React.js & Figma Design & Firebase'
        imgSrc={restaurantImg}
      />
      <div className='max-w-[1240px] mx-auto p-10 m-5 grid md:grid-cols-5 gap-8 shadow-[#07F2C5] shadow-md'>
        <div className='col-span-4 flex flex-col justify-center items-start gap-4'>
          <ProjectOverview
            demoLink='https://antoni0dev.github.io/modern-ui-ux-restaurant-react-proj/'
            repoLink='https://github.com/antoni0dev/modern-ui-ux-restaurant-react-proj'
          >
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
            experience. The website's clean and organized file and folder
            structure, along with its use of animations and gradients, make it a
            great example of modern UI/UX design.
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

export default restaurant;
