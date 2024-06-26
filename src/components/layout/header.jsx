import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useContext } from 'react';
import SpotifyPlaylist, { SpotifyLogo } from '../ui/spotify';
import { HeaderContext } from './providers';
import useAnimation from '@/hooks/use-animation';
import { textReveal } from '@/lib/anim';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleStopHover = () => {
    setIsHovered(false);
  };

  useAnimation(textReveal);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3900);
  }, []);

  return (
    <>
      <nav
        id='scroller'
        className={`static hidden h-[12vh] w-full items-center justify-between bg-black bg-opacity-50 p-7 text-lg xl:flex`}
      >
        <div className='flex'>
          <div
            className={`mr-[14vh] flex cursor-pointer items-center font-medium`}
          >
            <Link to='/'>Joshua Edo</Link>
          </div>
          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleStopHover}
            className={`{
          ${
            loading ? 'opacity-0' : 'opacity-100'
          } no-scrollbar relative flex h-[12vh] w-[25rem] items-center justify-center md:h-[13vh]`}
          >
            <SpotifyLogo opacity={`${isHovered ? 'hovered' : ''}`} />
            <SpotifyPlaylist opacity={`${isHovered ? 'hovered' : ''}`} />
          </div>
        </div>
        <div
          className={`text-reveal__fade-in flex cursor-pointer justify-end space-x-10`}
        >
          <div className='flex w-[20vw] items-center justify-around '>
            <Link to='/about' className='hover:opacity-70'>
              <p className='font-medium'>Info</p>
              <p className='text-2xs'>ABOUT ME</p>
            </Link>
            <Link to='/projects' className='hover:opacity-70'>
              <p className='font-medium'>Work</p>
              <p className='text-2xs'>MY PROJECTS</p>
            </Link>
          </div>
          <div className='relative flex w-[8vw] items-center justify-center'>
            <Link
              to='mailto:joshua.edo01@gmail.com'
              className='link title-text absolute z-[6]'
            >
              Let&apos;s Talk →
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

export function MobileHeader() {
  const { isActive, setIsActive, show, handleShow } = useContext(HeaderContext);

  const handleClick = () => {
    handleShow(true);
    setIsActive(!isActive);
  };

  return (
    <div className='text-reveal__fade-in static flex h-[12vh] items-center justify-between bg-black bg-opacity-50 p-4 text-lg xl:hidden'>
      <div className='inline cursor-pointer font-medium'>
        <Link to='/'>Joshua Edo</Link>
      </div>
      <div className='relative'>
        <div
          className={`absolute right-2 top-1/2 ${
            show || isActive ? 'hidden' : 'inline'
          } z-10 -translate-y-1/2 transform cursor-pointer font-medium`}
          onClick={handleClick}
        >
          MENU+
        </div>
      </div>
    </div>
  );
}
