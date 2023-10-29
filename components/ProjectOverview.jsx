import React from 'react';

const ProjectOverview = ({ demoLink, repoLink, children }) => {
  return (
    <>
      <p className='text-[#FFEE80]'>Project</p>
      <h2>Overview</h2>
      <p className='text-xl tracking-wider'>{children}</p>
      <div>
        <button className='px-8 py-2 mt-4 mr-4 hover:underline'>
          <a href={demoLink} target='_blank' rel='noreferrer'>
            Demo
          </a>
        </button>
        <button className=' px-8 py-2 mt-4 hover:underline'>
          <a href={repoLink} target='_blank' rel='noreferrer'>
            Code
          </a>
        </button>
      </div>
    </>
  );
};

export default ProjectOverview;
