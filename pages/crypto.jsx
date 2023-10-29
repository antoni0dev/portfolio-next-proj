import React from 'react';
import cryptoImg from '../public/assets/projects/crypto.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import ProjectHero from '@/components/ProjectHero';
import ProjectOverview from '@/components/ProjectOverview';
import TechnologiesAside from '@/components/TechnologiesAside';
import BackButton from '@/components/BackButton';

const crypto = () => {
  return (
    <div className='w-full h-full overflow-x-hidden'>
      <ProjectHero
        title='Live Crypto'
        subtitle='React.js & Tailwind CSS & Firebase'
        imgSrc={cryptoImg}
      />
      <div className='max-w-[1240px] mx-auto p-10 m-5 grid md:grid-cols-5 gap-8 shadow-[#07F2C5] shadow-xl'>
        <div className='col-span-4 flex flex-col justify-center items-start gap-4'>
          <ProjectOverview
            demoLink='https://cryptoapi-clone.web.app/'
            repoLink='https://github.com/antoni0dev/livecrypto-react-proj'
          >
            A responsive clone of CoinMarketCap called LiveCrypto built using
            React.js, Tailwind CSS, Firebase and the CoinGecko Cryptocurrency
            API. The frontend of the app is built using React.js, which provides
            a seamless user experience. It is designed to be fast and
            responsive, so the user can get the information they need quickly.
            The app's UI is built using Tailwind CSS, which gives the app a
            modern and clean look. The app utilizes the CoinGecko Cryptocurrency
            API to fetch real-time cryptocurrency data, including the latest
            prices, market capitalization, and 24-hour volume. The API is easy
            to integrate and provides reliable and accurate data. The app uses
            Firebase to store user data, such as the user's preferred currency
            and the cryptocurrencies they are interested in. This ensures that
            the user's preferences are remembered, even if they close the app or
            switch devices. Some of the features of the app include: Real-time
            cryptocurrency data User-friendly interface Option to select
            preferred currency Option to add and remove cryptocurrencies from
            the watchlist Mobile responsive design The app has been thoroughly
            tested and optimized for performance. I am confident that it will
            provide users with an excellent experience and help them stay up to
            date with the latest cryptocurrency information.
          </ProjectOverview>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-[#07F2C5 rounded-xl p-4'>
          <TechnologiesAside
            technologies={[
              'React.js',
              'Tailwind CSS',
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

export default crypto;
