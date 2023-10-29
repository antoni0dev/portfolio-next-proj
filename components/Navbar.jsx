import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from 'react-icons/ai';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { useRouter } from 'next/router';
import logoImg from '../public/assets/logo.png';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#282a36');
  const [linkColor, setLinkColor] = useState('#f8f8f2');
  const router = useRouter();

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    if (
      router.asPath === '/netflix' ||
      router.asPath === '/crypto' ||
      router.asPath === '/rick-and-morty' ||
      router.asPath === '/restaurant'
    ) {
      setNavBg('transparent');
      setLinkColor('#657786');
    } else {
      setNavBg('#282a36');
      setLinkColor('#f8f8f2 ');
    }
  }, [router]);

  useEffect(() => {
    const handleToggleShadow = () => {
      if (window.scrollY >= 1) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };

    window.addEventListener('scroll', handleToggleShadow);

    return () => window.removeEventListener('scroll', handleToggleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full z-[100] shadow-md shadow-[#AA02F0]'
          : 'fixed w-full z-[100]'
      }
    >
      <div className='max-w-[1240px] mx-auto flex justify-between items-center px-4 py-2'>
        <div>
          <Link href='/'>
            <Image
              className='rounded-lg'
              src={logoImg}
              width={80}
              height={50}
              alt='logo'
            />
          </Link>
        </div>
        <div className='flex justify-between items-center tracking-wide'>
          <ul
            style={{ color: `${linkColor}` }}
            className='hidden md:flex md:text-md lg:text-lg justify-between items-center gap-5 rounded'
          >
            <Link href='/'>
              <li>Home</li>
            </Link>
            <Link href='/#about'>
              <li>About</li>
            </Link>
            <Link href='/#skills'>
              <li>Skills</li>
            </Link>
            <Link href='/#projects'>
              <li>Projects</li>
            </Link>
            <Link href='/#contact'>
              <li>Contact</li>
            </Link>
          </ul>
          <div className='md:hidden'>
            <AiOutlineMenu
              onClick={handleNav}
              size={35}
              className='p-2 bg-[#AA02F0] text-white hover:bg-[#07F2C5] rounded-full shadow-2xl shadow-outline shadow-white-900 cursor-pointer'
            />
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div
        className={
          nav
            ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-[#1b222c]/90'
            : ''
        }
      >
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'fixed left-0 top-0 w-[75%] sm:w=[60%] md:w-[45%] h-screen border-r border-primary-color p-5 ease-in duration-500'
              : 'fixed left-[-150%] top-0 p-5 ease-in duration-500'
          }
        >
          <div>
            <div className='flex justify-between items-center'>
              <Image
                className='rounded-lg'
                src={logoImg}
                width={80}
                height={50}
                alt='logo'
              />
              <div onClick={handleNav}>
                <AiOutlineClose
                  className='p-2 bg-[#AA02F0] text-white hover:bg-[#07F2C5] rounded-full shadow-2xl shadow-outline shadow-white-900 cursor-pointer'
                  size={35}
                />
              </div>
            </div>
            <div className='border-b border-primary-color'>
              <p className='w-[85%] md:w-[90%] py-4 font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-[#07F2C5] to-[#AA02F0]'>
                Let&apos;s build something bullish together
              </p>
            </div>
          </div>
          <div className='py-4 flex flex-col justify-between gap-20'>
            <ul className='flex flex-col gap-4'>
              <Link onClick={handleNav} href='/'>
                <li onClick={handleNav} className='w-min'>
                  Home
                </li>
              </Link>
              <Link href='/#about'>
                <li onClick={handleNav} className='w-min'>
                  About
                </li>
              </Link>
              <Link href='/#skills'>
                <li onClick={handleNav} className='w-min'>
                  Skills
                </li>
              </Link>
              <Link href='/#projects'>
                <li onClick={handleNav} className='w-min'>
                  Projects
                </li>
              </Link>
              <Link onClick={handleNav} href='/#contact'>
                <li className='w-min'>Contact</li>
              </Link>
            </ul>
            <div>
              <p className='uppercase tracking-widest text-[#FAD000]'>
                Let&apos;s Connect
              </p>
              <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                <a
                  href='https://www.linkedin.com/in/antonio-simeonov-0061801b3/'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-[#07F2C5] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaLinkedinIn />
                  </div>
                </a>
                <a
                  href='https://github.com/antoni0dev'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-[#07F2C5] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <FaGithub />
                  </div>
                </a>
                <a
                  href='mailto:antoniosimeonov7@gmail.com'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-[#07F2C5] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <AiOutlineMail />
                  </div>
                </a>
                <a
                  href='https://resume.io/r/d0iJkiroN'
                  target='_blank'
                  rel='noreferrer'
                >
                  <div className='rounded-full shadow-lg shadow-[#07F2C5] p-3 cursor-pointer hover:scale-105 ease-in duration-300'>
                    <BsFillPersonLinesFill />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
