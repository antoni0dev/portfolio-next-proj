import React from 'react';
import Image from 'next/image';
import rickmortyImg from '../public/assets/projects/rick-and-morty.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import ProjectHero from '@/components/ProjectHero';
import ProjectOverview from '@/components/ProjectOverview';
import TechnologiesAside from '@/components/TechnologiesAside';

const rickAndMorty = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <ProjectHero
        title='Rick and Morty Wiki'
        subtitle='React.js & Bootstrap & Firebase'
        imgSrc={rickmortyImg}
      />
      <div className='max-w-[1240px] mx-auto p-10 m-5 grid md:grid-cols-5 gap-8 shadow-[#07F2C5] shadow-md'>
        <div className='col-span-4 flex flex-col justify-center items-start gap-4'>
          <ProjectOverview
            demoLink='https://antoni0dev.github.io/rick-and-morty-wiki-react-proj/'
            repoLink='https://github.com/antoni0dev/rick-and-morty-wiki-react-proj'
          >
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
          </ProjectOverview>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-[#07F2C5 rounded-xl p-4'>
          <TechnologiesAside
            technologies={['React.js', 'Bootstrap', 'JavaScript', 'Firebase']}
          />
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer text-[#FFEE80]'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default rickAndMorty;
