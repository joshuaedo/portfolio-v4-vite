import { Link } from 'react-router-dom';
import { useDate } from '@/hooks/use-date.js';
import { socialLinks } from '@/db/socials.js';
import styles from '@/styles/marquee.module.css';
import { useState } from 'react';
import Marquee from 'react-fast-marquee';
import { Arrow } from '../ui/image.jsx';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import Card from '../ui/card.jsx';

export default function Footer() {
  const { date, time, wish, isTimeVisible } = useDate();
  const currentTime = isTimeVisible ? time : '';
  const isEbening = wish === 'Good Ebening';

  return (
    <footer className='flex items-center justify-center bg-black pt-4 md:pt-10'>
      <div className='w-[90%]'>
        <div className='title-text pb-3 md:pb-5'>Social Media & Contacts</div>
        <div className='text-3xl uppercase md:text-6xl'>
          {socialLinks.map((link) => (
            <Link
              key={link.name}
              to={link.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FooterMarquee text={link.name} bgColor={link.bgColor} />
            </Link>
          ))}
        </div>
        <div className='title-text flex h-10 items-center justify-between text-center'>
          <p>{date}</p>
          {isTimeVisible && (
            <p className='time hidden md:block'>{currentTime}</p>
          )}

          <HoverCard>
            <HoverCardTrigger>
              <p>{wish}</p>
            </HoverCardTrigger>
            <HoverCardContent>
              {isEbening ? <GoodEbening /> : <></>}
            </HoverCardContent>
          </HoverCard>
        </div>
      </div>
    </footer>
  );
}

function FooterMarquee({ text, bgColor }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleStopHover = () => {
    setIsHovered(false);
  };

  const MarqueeFooter = Array.from({ length: 99 }, (_, index) => (
    <div
      key={index}
      className={`mr-[1rem] flex w-full items-center text-black ${bgColor}`}
    >
      <span className=''>{text}</span>
      <Arrow className='ml-[7.8px] h-6 w-6 md:ml-[12px] md:mt-[9px] md:h-12 md:w-12' />
    </div>
  ));

  const StagnantFooter = () => (
    <div
      className={`flex w-full items-center ${
        !isHovered ? 'z-[2] opacity-100' : 'z-[-2] opacity-0'
      }`}
    >
      <span className=''>{text}</span>
      <Arrow className='ml-[7.8px] h-6 w-6 md:ml-[12px] md:mt-[9px] md:h-12 md:w-12' />
    </div>
  );

  return (
    <main
      className={`${styles.main}`}
      onMouseOver={handleHover}
      onMouseLeave={handleStopHover}
    >
      <StagnantFooter />
      <div
        className={`absolute ${styles.marquee} ${
          !isHovered ? 'bg-black' : bgColor
        } ${isHovered ? 'z-[2] opacity-100' : 'z-[-2] opacity-0'}`}
        style={{
          clipPath: isHovered ? 'inset(0 0 0)' : 'inset(50% 0 50%',
          transition: 'clip-path 0.7s',
        }}
      >
        <Marquee>{MarqueeFooter}</Marquee>
      </div>
    </main>
  );
}

function GoodEbening() {
  return (
    <Card>
      <video
        data-nosnippet
        autoPlay
        loop
        className={`absolute z-[2] h-full w-full rounded-xl object-cover opacity-100 `}
      >
        <source
          src='https://joshuaedo.sirv.com/joshuaedo/public/videos/good-ebening.mp4'
          type='video/mp4'
        />
      </video>
    </Card>
  );
}
