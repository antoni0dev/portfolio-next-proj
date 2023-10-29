import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

const TechnologiesAside = ({ technologies }) => {
  return (
    <>
      <p className='text-center font-bold pb-2'>Technologies</p>
      <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 text-center sm:text-left justify-items-center sm:justify-items-start items-center '>
        {technologies.map((tech, index) => (
          <p key={index} className='py-2 flex items-center'>
            <p>
              <RiRadioButtonFill className='pr-1' />
            </p>
            <p>{tech}</p>
          </p>
        ))}
      </div>
    </>
  );
};

export default TechnologiesAside;
