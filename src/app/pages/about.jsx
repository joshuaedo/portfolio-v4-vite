import { useState } from 'react';
import styles from '@/styles/avatar.module.css';
import { AboutMeta } from '@/components/layout/meta.jsx';
import Card, { CardTop } from '@/components/ui/card.jsx';
import { Arrow } from '@/components/ui/image';
import { aboutData } from '@/db/about';
import useAnimation from '@/hooks/use-animation';
import { textReveal } from '@/lib/anim';

export function About() {
  useAnimation(textReveal);

  return (
    <>
      <AboutMeta />
      <div className='container-padding'>
        <section className='md:section-padding mb-24 mt-10 text-center text-xs md:min-h-[1vh] md:text-start'>
          <div data-nosnippet className='text-reveal__container'>
            <p className='text-reveal text-reveal__negative'>
              who is joshua edo?
            </p>
          </div>
        </section>
        {aboutData.map((section, index) => (
          <section className='text-reveal md:section-padding mb-24' key={index}>
            <AboutCard {...section} />
          </section>
        ))}
      </div>
    </>
  );
}

function AboutCard({
  color,
  content,
  isVideo = false,
  avatar = false,
  headline,
  cta,
}) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Card
      color={color}
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {isVideo ? (
        <video
          data-nosnippet
          autoPlay
          muted
          loop
          className={`absolute h-full w-full rounded-xl object-cover ${
            isHovered ? 'z-[2] opacity-100' : 'z-[-2] opacity-0'
          }`}
        >
          <source src={content.videoSrc} type='video/mp4' />
        </video>
      ) : avatar ? (
        <img
          src={content.imgSrc}
          alt={content.title}
          className={avatar ? styles.avatar : ''}
        />
      ) : (
        <div
          data-nosnippet
          className={`absolute flex h-full w-full items-center justify-center text-center ${
            isHovered ? 'z-[2] opacity-100' : 'z-[-2] opacity-0'
          }`}
        >
          {headline && cta && (
            <div className='max-w-[70%]'>
              <div className='section-text text-4xl text-black'>{headline}</div>
              <a href={cta.link}>
                <div className='title-text link mt-2 flex items-center justify-center text-center text-black decoration-black'>
                  <span>{cta.name}</span> <Arrow className='ml-1 h-3 w-3' />
                </div>
              </a>
            </div>
          )}
        </div>
      )}

      <CardTop
        className={`${isHovered ? 'opacity-0' : 'opacity-100'}`}
        h={content.topHeight}
        w={content.topWidth}
        title={content.title}
        items={content.items}
        src={content.gifSrc}
      />
    </Card>
  );
}
