import gsap from 'gsap';
import { useEffect } from 'react';
import Marquee from 'react-fast-marquee';
import styles from '@/styles/name-marquee.module.css';
import { HeroSpotifyPlaylist } from '@/components/ui/spotify';
import Gallery from '@/components/ui/gallery';

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
      <div data-nosnippet className='container-padding home pt-[11vh]'>
        <div className='section-padding pb-12 md:pb-0'>
          <section className='relative'>
            <div className='text-reveal__container header-text mt-16 '>
              <div className='flex'>
                <div className='text-reveal'>
                  {' '}
                  <img
                    loading='lazy'
                    className=''
                    src='https://media.giphy.com/media/MhYGO6XdrbUb19Ld1q/giphy.gif'
                    alt='birthday kitty'
                    decoding='async'
                  />
                </div>
              </div>
            </div>
            <div className='flex w-full items-center justify-center'>
              <div className='hero-spotify mt-16 flex h-[14vh] items-center justify-center'>
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
                      <b>Sandra</b> • Joshua • <i>BLESSING</i> •{' '}
                      <span className='font-medium'>Alfred</span> •{' '}
                      <span className='font-semibold italic'>DEXTER • </span>
                    </p>
                    <p>
                      <b>Sandra</b> • Joshua • <i>BLESSING</i> •{' '}
                      <span className='font-medium'>Alfred</span> •{' '}
                      <span className='font-semibold italic'>DEXTER • </span>
                    </p>
                  </div>
                </div>
              </main>
            </Marquee>
          </section>
        </div>
        <div className='section-padding'>
          <section className='relative'>
            <div className='mb-16 mt-32 md:mt-40'>
              <p className='text-xs md:text-sm'>
                what if i recorded every year of my life foreverrr?
              </p>
              <Gallery />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
