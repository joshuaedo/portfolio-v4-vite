import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import styles from '@/styles/name-marquee.module.css';
import { useState } from 'react';
import { HomeMeta } from '@/components/layout/meta.jsx';
import Image, { Arrow } from '@/components/ui/image';
import { HeroSpotifyPlaylist } from '@/components/ui/spotify';

export function Home() {
  useEffect(() => {
    gsap.to('.text-reveal', {
      y: 0,
      stagger: 0.1,
      delay: 0.5,
      duration: 0.2,
    });
  }, []);
  return (
    <>
      <HomeMeta />
      <div data-nosnippet className='container-padding home'>
        <div className='section-padding pb-12 md:pb-0'>
          <section className='relative'>
            <div className='text-reveal__container header-text mt-16 '>
              <div className='flex justify-center lg:justify-start'>
                <p className='text-reveal'>SOFTWARE</p>
              </div>
              <div className='flex justify-center lg:justify-end'>
                <p className='text-reveal'>DEVELOPER</p>
              </div>
            </div>
            <div className='text-reveal__container mt-3 flex justify-end'>
              <span className='text-reveal text-reveal__negative title-text line-height max-w-[70%] text-end md:max-w-[30%]'>
                SPECIALIZED IN FRONTEND DEVELOPMENT
              </span>
            </div>
            <div className='mt-16 hidden justify-end md:flex'>
              <Link to='mailto:joshua.edo01@gmail.com'>
                <div className='title-text link flex'>
                  <span>AVAILABLE FOR HIRE</span>
                  <Arrow className='ml-1 mt-[2px] h-4 w-4' />
                </div>
              </Link>
            </div>
            <div className='flex w-full items-center justify-center'>
              <div className='hero-spotify mt-16 flex h-[14vh] items-center justify-center md:hidden'>
                <HeroSpotifyPlaylist />
              </div>
            </div>
          </section>
        </div>
        <div className=''>
          <section className='relative'>
            <Marquee autoFill>
              <main className={styles.main}>
                <div className={styles.sliderContainer}>
                  <div className={`${styles.slider} text-reveal__fade-in `}>
                    <p>
                      <b>Edo</b> • Joshua • <i>THOMAS</i> •{' '}
                      <span className='font-medium'>Akpan</span> •{' '}
                      <span className='font-semibold italic'>ANIEKAN</span> • =)
                      •
                    </p>
                    <p>
                      <b>Edo</b> • Joshua • <i>THOMAS</i> •{' '}
                      <span className='font-medium'>Akpan</span> •{' '}
                      <span className='font-semibold italic'>ANIEKAN</span> • =)
                      •
                    </p>
                  </div>
                </div>
              </main>
            </Marquee>
          </section>
        </div>
        <div className='section-padding'>
          <section className='relative'>
            <div className='mt-24 text-center md:text-start'>
              <p className='section-text'>PROJECTS</p>
              <p className='title-text inline'>A SELECTION OF MY WORK</p>
            </div>
            <div className='mb-16 mt-20 md:mt-40'>
              <div className='inline items-center justify-around space-y-32 md:flex md:space-y-1'>
                <div data-scroll data-scroll-speed='0.5' className='space-y-32'>
                  <ProjectsCard i={4} name='z' slug='z' />
                  <ProjectsCard i={3} name='prime' slug='prime' />
                  <ProjectsCard i={5} name='joshuaGPT' slug='joshua-gpt' />
                </div>
                <div data-scroll data-scroll-speed='0.8' className='space-y-32'>
                  <ProjectsCard i={3} name='spotify' slug='spotify' />
                  <ProjectsCard i={2} name='google' slug='google' />
                </div>
              </div>
            </div>
            <div className='line-height title-text link absolute bottom-10 right-10 hidden max-w-[7rem] text-right text-sm md:right-3 md:flex md:max-w-[10rem]'>
              <Link to='/projects' className='flex'>
                <span>VIEW THE REST OF MY WORK</span>
              </Link>
            </div>
            <div className='title-text link flex items-center justify-center pt-10 text-xs md:hidden'>
              <Link to='/projects' className='flex'>
                <span>VIEW THE REST OF MY WORK</span>
                <Arrow className='ml-1 h-4 w-4' />
              </Link>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function ProjectsCard({ i, name, slug }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className='relative px-[1.5rem] md:pl-[2rem]'>
      <Link to={`/projects/${slug}`}>
        <div
          className='flex cursor-pointer items-center justify-center'
          onMouseEnter={handleHover}
          onMouseLeave={handleHover}
        >
          <div className='relative'>
            <Image
              webpSrc={`/images/webp/home/${name}/${i}.webp`}
              orgSrc={`/images/original/home/${name}/${i}.jpg`}
              height={1000}
              width={1000}
              alt={name}
              className='h-[320px] w-[233px] rounded-sm object-cover md:h-[457px] md:w-[332px]'
            />
            <div
              className={`absolute left-0 top-0 h-full w-full transition-opacity duration-500 ${
                isHovered ? 'opacity-50' : 'opacity-0'
              }`}
            >
              <Image
                webpSrc={`/images/webp/home/${name}/1.webp`}
                orgSrc={`/images/original/home/${name}/1.jpg`}
                height={1000}
                width={1000}
                alt={name}
                className='h-[320px] w-[233px]  rounded-sm object-cover md:h-[457px] md:w-[332px]'
              />
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <p className='inline w-[233px] pt-3 text-2xl font-thin md:w-[332px] md:text-3xl'>
            {name}
          </p>
        </div>
      </Link>
    </div>
  );
}
