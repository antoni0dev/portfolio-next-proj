import Link from 'next/link';
import React from 'react';

const BackButton = ({ href }) => {
  return (
    <Link href={href}>
      <button className='p-2 border-none underline cursor-pointer text-[#FFEE80]'>
        Back
      </button>
    </Link>
  );
};

export default BackButton;
